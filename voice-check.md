# Voice Check

A checklist for deck prose, derived from how Rick actually writes when he describes his
own slides. Built September 2, 2026 from his own sentences in a working session, on his
suggestion: *"review my responses and suggestions and look for the ways I describe the
slides — that can be used to double check the wording in the slide."*

Use it on any new or rewritten slide before it ships. The reference sentences are real;
don't replace them with invented examples.

---

## The reference sentences

> "Using ALLY first helps determine the workload and complete the easier parts and identify
> where there are harder problems efficiently."

> "AI can describe the image, but it doesn't always understand the whole page and why the
> image is there."

> "If the image doesn't have a good alt text then you can take a screen shot of the page and
> give it to Gemini or Copilot."

> "Over-writing can be fixed with good prompting in an LLM."

> "With enough bad handwriting AI will try to jump to a conclusion about what was meant, and
> it can even be correct but those conclusions aren't always accurate to the course and to
> the meaning of the instructor."

> "You can use ALLY to see if you still have problems after a fix."

> "I don't tell faculty what to do. I want them to add to their toolbox and to their
> experiences. Let them enhance the context of their courses."

---

## The six checks

### 1. Hedge the capability, don't accuse the tool
He writes *can*, *helps*, *may*, *tends to*, *doesn't always*, *will do best case*. He almost
never writes a flat negative verdict about a tool.

- ✅ "AI can describe the image, but it doesn't always understand the whole page."
- ❌ "It describes, then stops."
- ❌ "Dates and ranges are reliably wrong."

**Test:** does the sentence accuse, or does it describe a tendency? If a faculty member's
own experience would contradict it once, hedge it.

### 2. Credit what it does before naming what it doesn't
The limitation comes second, attached with *but*, and it is a real qualification rather
than a rhetorical turn.

- ✅ "AI can describe the image, **but** it doesn't always understand the whole page."
- ❌ "You get what is in the image but not what it means." *(the credit is grudging)*

### 3. Build with **and**, not with *not X but Y*
His sentences accumulate. Mine used to pivot.

- ✅ "helps determine the workload **and** complete the easier parts **and** identify where
  the harder problems are"
- ❌ "The most common mistake is not doing it badly. It is doing it thoroughly, to the file
  nobody opens."

### 4. Say what a thing is *for*
He ends clauses with purpose: *to help fit the image into the page*, *to see if you still
have problems after a fix*.

**Test:** could a reader ask "why would I do that?" and not find the answer in the sentence?

### 5. Give the physical steps, in order
*"Take a screen shot of the page and give it to Gemini or Copilot."* Concrete nouns, real
verbs, the actual sequence. Procedural imperatives are fine — evaluative ones are not.

- ✅ "Press it." / "Screenshot the whole page and hand that over."
- ❌ "Always spot-check." / "Your job is the second draft."

### 6. Offer, never assign
He does not tell faculty what to do. Watch for *your job*, *you must*, *you should*, *the
job is*, and anything that hands the reader an obligation.

- ✅ "Take what fits your course and leave the rest."
- ❌ "That gap is your job."

---

## Quick grep for the usual offenders

```
grep -nE "is not a |It is the |your job|you must|you should|reliably|always |never " *.jsx
```

Not every hit is wrong — "never" in a safety line is fine. But every hit deserves a look.

## The two habits to watch for in *drafted* prose

**Aphorism.** A balanced sentence that withholds its point for effect. It performs insight
rather than handing someone a tool. Cut it, even when it's good — especially when it's good.

**Irony.** "Wearing a better costume." Wry reads as knowing better than the audience, which
is the same problem as telling faculty what to do, just in the sentence rhythm.

## What signposting to use
Card titles carry the structure. Do **not** add inline labels like "The problem:" or
"The result:" — this deck's cards already do that job, and doubling up reads mechanical.
