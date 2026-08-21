#!/usr/bin/env node
/* Compile decks with the EXACT Babel config shell.html uses, so a syntax
   error surfaces here instead of as a blank slide in front of a room.

   Usage:  node .claude/skills/deck/check.js [file.jsx ...]
           (no args = every *.jsx in the repo)                              */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Pin the same version shell.html loads from unpkg.
const BABEL_VERSION = '7.26.10';
const CACHE = path.join(require('os').tmpdir(), `babel-standalone-${BABEL_VERSION}.js`);

if (!fs.existsSync(CACHE)) {
  process.stderr.write(`fetching @babel/standalone@${BABEL_VERSION}...\n`);
  execSync(`curl -sfL -o "${CACHE}" https://unpkg.com/@babel/standalone@${BABEL_VERSION}/babel.min.js`);
}
const Babel = require(CACHE) || globalThis.Babel;

let files = process.argv.slice(2);
if (files.length === 0) {
  files = execSync("git ls-files '*.jsx'", { encoding: 'utf8' })
    .split('\n').filter(Boolean);
}

let failed = 0;
for (const f of files) {
  try {
    Babel.transform(fs.readFileSync(f, 'utf8'), {
      presets: [['react', { runtime: 'classic' }]],
      sourceType: 'script',
    });
    console.log('OK    ' + f);
  } catch (e) {
    failed++;
    console.log('FAIL  ' + f + '\n      ' + e.message.split('\n')[0]);
  }
}
process.exit(failed ? 1 : 0);
