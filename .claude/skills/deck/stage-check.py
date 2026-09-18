#!/usr/bin/env python3
"""Flag presenter stage directions that leaked into audience-facing deck text.

Strips comments, extracts rendered strings, and greps for the phrasings that
mean 'this sentence is about the slide' rather than 'this sentence is for you'.
Reports candidates; a human decides. Run before a deck goes out of draft.
"""
import re, sys

PATTERNS = [
    (r'\bsaid plainly\b',                 'direction to the presenter'),
    (r'\bshort version\b',                'meta: about the slide, not the topic'),
    (r'\bbecause the clock\b',            'meta: about session timing'),
    (r'\bthis slide\b|\bthis deck\b',     'refers to the artefact, not the subject'),
    (r'\bskip (this|ahead)\b',            'delivery instruction'),
    (r'\bif (we have|there is) time\b',   'delivery instruction'),
    (r'\b(don\'t|do not) (say|read|show)\b', 'direction to the presenter'),
    (r'\bnote to self\b|\bTODO\b|\bTKTK?\b|\bFIXME\b', 'working note'),
    (r'\bplaceholder\b|\bdraft\b',        'draft chrome or unfinished marker'),
    (r'\bpurpose[:.]',                    'section header from a planning note'),
    (r'\bcut (this|for time)\b',          'delivery instruction'),
    (r'\bI(\'ll| will) (skip|cut|drop)\b','delivery instruction'),
]

def rendered_text(src):
    src = re.sub(r'/\*.*?\*/', '', src, flags=re.S)
    src = re.sub(r'^\s*//.*$', '', src, flags=re.M)
    out = []
    for m in re.finditer(r'>([^<>{}]+)<', src):
        t = ' '.join(m.group(1).split())
        if len(t) > 3:
            out.append((src[:m.start()].count('\n') + 1, t))
    for m in re.finditer(r'(?:prompt|title|alt)="([^"]{12,})"', src):
        out.append((src[:m.start()].count('\n') + 1, m.group(1)))
    return out

hits = 0
for path in sys.argv[1:]:
    for line, text in rendered_text(open(path).read()):
        for pat, why in PATTERNS:
            if re.search(pat, text, re.I):
                print(f'{path}:{line}: [{why}]\n    {text[:130]}')
                hits += 1
                break
print(f'\n{hits} candidate(s). These are suggestions, not errors — read each one.')
sys.exit(0)
