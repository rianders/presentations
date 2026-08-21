/* Execute the compiled deck with a stub React. Any component the JSX
   references but no longer defines throws a ReferenceError here, at the
   point the slides array is built — which is exactly the failure mode a
   syntax-only check cannot see. */
const fs = require('fs'), os = require('os'), path = require('path');
const Babel = require(path.join(os.tmpdir(), 'babel-standalone-7.26.10.js')) || globalThis.Babel;

const file = process.argv[2];
const { code } = Babel.transform(fs.readFileSync(file, 'utf8'), {
  presets: [['react', { runtime: 'classic' }]], sourceType: 'script',
});

let slidesSeen = null;
const seen = new Set();
const React = {
  useState: (v) => [v, () => {}],
  useEffect: () => {},
  createElement: (type, props, ...kids) => {
    if (typeof type === 'string') seen.add(type);
    else if (type && type.name) seen.add(type.name);
    else if (type === undefined) throw new Error('createElement(undefined) — a component is not defined');
    return { type, props, kids };
  },
};
const noop = () => {};
const stubEl = { addEventListener: noop, removeEventListener: noop, style: {}, appendChild: noop };
global.React = React;
global.ReactDOM = { createRoot: () => ({ render: (el) => { global.__ROOT__ = el; } }) };
global.window = {
  location: { search: '', hostname: 'localhost', href: 'http://localhost/' },
  localStorage: { getItem: () => null, setItem: noop },
  addEventListener: noop, removeEventListener: noop, history: { replaceState: noop },
  open: () => ({ document: { write: noop, close: noop } }), print: noop, close: noop,
};
global.document = { getElementById: () => stubEl, addEventListener: noop, title: '' };
global.URL = URL; global.URLSearchParams = URLSearchParams;
global.navigator = { userAgent: 'node' };

try {
  new Function(code)();
} catch (e) {
  console.log('RUNTIME FAIL: ' + e.message);
  process.exit(1);
}

// Now actually render the root component tree once.
const root = global.__ROOT__;
try {
  const tree = root.type(root.props || {});
  const walk = (n, d = 0) => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) return n.forEach((x) => walk(x, d));
    if (typeof n.type === 'function' && d < 40) {
      try { walk(n.type(n.props || {}), d + 1); } catch (e) {
        throw new Error(`rendering <${n.type.name || '?'}>: ${e.message}`);
      }
    }
    if (n.props && n.props.children) walk(n.props.children, d);
    if (n.kids) walk(n.kids, d);
  };
  walk(tree);
} catch (e) {
  console.log('RENDER FAIL: ' + e.message);
  process.exit(1);
}
console.log('RENDER OK — components instantiated: ' +
  [...seen].filter((s) => /^[A-Z]/.test(s)).sort().join(', '));
