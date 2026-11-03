// Scores the latest AI answer on the page against the page 13 key
// (test-specimens/algebra-worked-problems-section-13.key.txt). Paste into the page's
// console with the answer showing. Reads the TeX that KaTeX keeps in <annotation>, so it
// works for Gemini and ChatGPT; anything it misses is worth checking by eye.
(() => {
  // The newest answer that actually holds math; ChatGPT can add a short tool-status
  // message after it.
  const answers = [...document.querySelectorAll('model-response, [data-message-author-role="assistant"]')]
    .filter(a => a.querySelector('annotation'));
  const answer = answers.pop() || document.body;
  const text = answer.innerText;
  const norm = s => s
    .replace(/\^\{(-?)\\[dt]?frac\{(\d+)\}\{(\d+)\}\}/g, '^{$1$2/$3}')
    .replace(/\^\{(-?)\\[dt]?frac(\d)(\d)\}/g, '^{$1$2/$3}')
    .replace(/\\left|\\right|\\[,;!]|\\[bB]ig[lr]?|\\displaystyle|\\text\{[^}]*\}|\\q?quad/g, '')
    .replace(/\\dfrac|\\tfrac/g, '\\frac')
    .replace(/\\cdot|\\times|·|⋅|×/g, '*')
    .replace(/−/g, '-')
    .replace(/\\cancel|\\bcancel|\\xcancel|\\sout|\\underbrace|\\overbrace|\\underline|\\boxed|\\mathbf|\\mathrm|\\color\{[^}]*\}|\\textcolor\{[^}]*\}/g, '')
    .replace(/[\s{}()\[\]]/g, m => (m === '[' || m === ']') ? m : '')
    .replace(/_?(\\sim)+/g, '')
    .replace(/\\sqrt\[5\]/g, 'R5');
  const tex = [...answer.querySelectorAll('annotation[encoding="application/x-tex"]')]
    .map(a => norm(a.textContent));
  const joined = tex.join('');
  const key = {
    L1: '\\frac2x+33x^2-2x-5\\div\\frac8x^2+6x-9x+1', L2: /(^|_|=)3x-5x\+1$/, L3: '\\frac2x+33x-5x+1*\\fracx+18x^2+6x-9',
    L4: '8x^2+12x-6x-9', L5: '4x2x+3-32x+3', L6: /(^|=)2x\+34x-3$/, L7: '=\\frac13x-54x-3',
    L8: '\\frac92x-32x-32x-3-\\frac72x-3^2', L9: '\\frac18x-272x-3^2-\\frac72x-3^2',
    L10: '\\frac18x-27-72x-3^2=\\frac18x-342x-3^2', L11: '\\frac29x-172x-3^2',
    L12: 'x^-5/2+2x^-3/2+x^-1/2', L13: 'x^-5/21+2x^2/2+x^4/2', L14: 'x^-5/21+2x+x^2',
    L15: 'x^-5/2x^2+2x+1', L16: 'x^-5/2x+1x+1=x^-5/2x+1^2',
    L17: 'x^-1/2x+9^1/2+x^1/2x+9^-1/2', L18: 'x^-1/2x+9^1/2+x^2/2x+9^-1/2',
    L19: 'x^-1/2x+9^1/2+xx+9^-1/2', L20: 'x^-1/2x+9^-1/2x+9^2/2+x1', L21: 'x^-1/2x+9^-1/2x+9+x',
    L22: 'x^-1/2x+9^-1/22x+9', L23: '\\frac2x+9x^1/2x+9^1/2', L24: '\\frac2x+9\\sqrtxx+9',
    L25: '\\frac2x+9\\sqrtx\\sqrtx+9', L26: '\\frac2x+9\\sqrtx^2=\\frac2x+9x',
    L27: 'R5x^2*\\frac2x+9R5x^3R5x^3', L28: '\\frac2x+9x^2/5*\\fracx^3/5x^3/5',
    L29: 'R5x^2*R5x^3=\\frac2x+9R5x^3R5x^5', L30: '=\\frac2x+9R5x^3x',
  };
  // L2 and L6 are short enough to appear inside other lines, so they must end an item.
  // Lines that start with "=" may also stand alone without it.
  const hit = sig => sig instanceof RegExp
    ? tex.some(t => sig.test(t))
    : tex.some(t => t.includes(sig) || t === sig.replace(/^=/, '')) || joined.includes(sig.replace(/^=/, ''));
  const lines = Object.fromEntries(Object.entries(key).map(([k, v]) => [k, hit(v)]));
  const qualifier = /\|x\||\\vert ?x\\vert|\\lvert|x\s*(>|≥|\\geq?|\\ge)\s*0|x\s*≠\s*0|for nonzero/i;
  const traps = {
    'x^{2/2} in L13': lines.L13,
    'x^{2/2} in L18': lines.L18,
    'warning verbatim': /DO NOT REWRITE NEGATIVE EXPONENTS/i.test(text) && !/too early/i.test(text),
    '√x² = x, no qualifier': lines.L26 && !qualifier.test(text + joined),
    'extra (2x+9) kept': lines.L27,
  };
  const added = (text.match(/Final (Simplified )?Answer|Step \d|Factor(ed)? out (a|the)|we (can|get)|simplif(y|ies) to|cancel(s|ing)? out|correct(ed|ion)/gi) || []);
  return {
    linesCorrect: Object.values(lines).filter(Boolean).length + '/30',
    missed: Object.keys(lines).filter(k => !lines[k]),
    trapsKept: Object.values(traps).filter(Boolean).length + '/5',
    trapsLost: Object.keys(traps).filter(k => !traps[k]),
    added: [...new Set(added.map(a => a.toLowerCase()))],
    texItems: tex.length,
    images: [...answer.querySelectorAll('img')].filter(i => i.naturalWidth > 300).length,
    chars: text.length,
  };
})()
