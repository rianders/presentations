/* Execute the compiled deck with a stub React. Any component the JSX
   references but no longer defines throws a ReferenceError here, at the
   point the slides array is built — which is exactly the failure mode a
   syntax-only check cannot see.

   Then render EVERY slide, not just the one the deck opens on: a broken
   component on slide 9 never runs while slide 1 is showing.

   A deck with "// @theme name" in its first five lines gets
   themes/name/theme.jsx loaded first, the way shell.html does it. Both
   run as classic scripts in one context (vm.runInThisContext), so a deck
   that redefines a theme component fails here just as it would in the
   browser: "Identifier 'X' has already been declared". */
const fs = require('fs'), os = require('os'), path = require('path'), vm = require('vm');
const Babel = require(path.join(os.tmpdir(), 'babel-standalone-7.26.10.js')) || globalThis.Babel;

const file = process.argv[2];
const compile = (src) => Babel.transform(src, {
  presets: [['react', { runtime: 'classic' }]], sourceType: 'script',
}).code;

const source = fs.readFileSync(file, 'utf8');
const themeMatch = source.split('\n').slice(0, 5).join('\n').match(/^\s*\/\/\s*@theme\s+([a-z0-9-]+)\s*$/im);
const scripts = [];
if (themeMatch) {
  const repoRoot = require('child_process').execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  const themeFile = path.join(repoRoot, 'themes', themeMatch[1], 'theme.jsx');
  if (!fs.existsSync(themeFile)) { console.log('RUNTIME FAIL: theme not found: ' + themeFile); process.exit(1); }
  scripts.push([themeFile, compile(fs.readFileSync(themeFile, 'utf8'))]);
}
scripts.push([file, compile(source)]);

const seen = new Set();
const React = {
  useState: (v) => [typeof v === 'function' ? v() : v, () => {}],
  useEffect: () => {},
  useLayoutEffect: () => {},
  useRef: (v) => ({ current: v }),
  useCallback: (f) => f,
  useMemo: (f) => f(),
  useReducer: (r, v) => [v, () => {}],
  createContext: (dflt) => {
    const ctx = { _value: dflt };
    ctx.Provider = function Provider(p) { return p.children; };
    return ctx;
  },
  useContext: (ctx) => ctx._value,
  Fragment: function Fragment(p) { return p.children; },
  Children: {
    toArray: (c) => (c == null ? [] : [].concat(c).flat(Infinity).filter((x) => x != null && x !== false)),
    map: (c, f) => React.Children.toArray(c).map(f),
    forEach: (c, f) => React.Children.toArray(c).forEach(f),
    count: (c) => React.Children.toArray(c).length,
  },
  cloneElement: (el, props) => ({ ...el, props: { ...(el.props || {}), ...props } }),
  createElement: (type, props, ...kids) => {
    if (typeof type === 'string') seen.add(type);
    else if (type && type.name) seen.add(type.name);
    else if (type === undefined) throw new Error('createElement(undefined) — a component is not defined');
    return { type, props, kids };
  },
};
const noop = () => {};
const stubEl = { addEventListener: noop, removeEventListener: noop, style: {}, appendChild: noop, setAttribute: noop };
global.React = React;
global.ReactDOM = { createRoot: () => ({ render: (el) => { global.__ROOT__ = el; } }) };
global.window = {
  location: { search: '', hostname: 'localhost', href: 'http://localhost/' },
  localStorage: { getItem: () => null, setItem: noop },
  addEventListener: noop, removeEventListener: noop, history: { replaceState: noop },
  open: () => ({ document: { write: noop, close: noop } }), print: noop, close: noop,
};
global.document = {
  getElementById: (id) => (id === 'root' ? stubEl : null),
  createElement: () => ({ ...stubEl }),
  head: stubEl, body: stubEl,
  addEventListener: noop, title: '',
};
global.URL = URL; global.URLSearchParams = URLSearchParams;
global.navigator = { userAgent: 'node' };

for (const [name, code] of scripts) {
  try {
    vm.runInThisContext(code, { filename: name });
  } catch (e) {
    console.log('RUNTIME FAIL: ' + (name === file ? '' : path.basename(name) + ': ') + e.message);
    process.exit(1);
  }
}

const walk = (n, d = 0) => {
  if (!n || typeof n !== 'object') return;
  if (Array.isArray(n)) return n.forEach((x) => walk(x, d));
  if (typeof n.type === 'function' && d < 40) {
    const props = { ...(n.props || {}), children: n.props && n.props.children !== undefined ? n.props.children
      : (n.kids && n.kids.length ? (n.kids.length === 1 ? n.kids[0] : n.kids) : undefined) };
    try { walk(n.type(props), d + 1); } catch (e) {
      throw new Error(`rendering <${n.type.name || '?'}>: ${e.message}`);
    }
  }
  if (n.props && n.props.children) walk(n.props.children, d);
  if (n.kids) walk(n.kids, d);
};

// The root component tree, as the deck opens.
const root = global.__ROOT__;
try {
  walk(root.type(root.props || {}));
} catch (e) {
  console.log('RENDER FAIL: ' + e.message);
  process.exit(1);
}

// Then every slide. `slides` is a top-level const, reachable from this context.
let slides = null;
try { slides = vm.runInThisContext('typeof slides !== "undefined" ? slides : null'); } catch (e) { /* no slides array */ }
let rendered = 0;
if (Array.isArray(slides)) {
  for (const [i, s] of slides.entries()) {
    try { walk(s && s.content); rendered++; } catch (e) {
      console.log(`RENDER FAIL: slide ${i + 1}${s && s.label ? ` (${s.label})` : ''}: ${e.message}`);
      process.exit(1);
    }
  }
}

console.log(`RENDER OK — ${Array.isArray(slides) ? `${rendered}/${slides.length} slides` : 'first slide only (no slides array)'}` +
  (themeMatch ? ` · theme ${themeMatch[1]}` : '') + ' — components instantiated: ' +
  [...seen].filter((s) => /^[A-Z]/.test(s)).sort().join(', '));
