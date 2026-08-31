# Audio & Text-to-Speech — Decision Matrix

**Working doc for Segment 1.** Drafted August 28, 2026. Feeds worklist items 1, 2, 26.
Not a slide as-is — see "The slide version" at the bottom.

The entry point is **what the faculty member is trying to do**, not which product is
best. Almost every tool comparison in this space fails because it starts from the tools.

---

## The two scales

### Tier — what you can rely on institutionally

| Tier | Means | Can you say it from the podium |
|---|---|---|
| **T1 · Institutional** | Rutgers-licensed, integrated, supported. No account decision, no data question. | **Yes, with no caveat.** |
| **T2 · Provided** | Free to every NetID, but you drive it and you own the output. | Yes — name the tool, own the verification. |
| **T3 · Local** | No account, no network, nothing leaves the laptop. | Yes — but you are the support desk. |
| **T4 · Outside** | Needs money and/or a non-Rutgers account. Data classification exposure. | **Only as a showcase.** Never as "do this Monday." |

### Effort — what the faculty member actually spends

| | Means |
|---|---|
| ○ | **Nothing.** Already happening, or one click. |
| ◑ | **Minutes.** Upload, click, wait. Nothing to learn. |
| ◐ | **A first time.** 15–30 minutes once, then minutes forever. |
| ● | **A project.** Install, terminal, troubleshooting. Realistically a weekend person. |

---

## The matrix

| # | What you're trying to do | Tool | Tier | What you actually do | Effort | Who starts it | What you verify |
|---|---|---|---|---|---|---|---|
| 1 | **Students need the reading as audio** | Ally → Alternative Formats → Audio (MP3) | T1 | *Nothing.* Make sure the source file is clean. | ○ | **Student** | The source, not the audio — headings, reading order, no OCR garbage |
| 2 | Same, but the file isn't in Canvas | SensusAccess | T1 | Submit the file, get MP3/DAISY back | ◑ | Either | Pronunciation spot-check |
| 3 | **The PDF isn't even text yet** | Ally OCR (instructor, on-demand) | T1 | Download the OCR'd version, **replace the original** | ◑ | Faculty | OCR accuracy — quality depends on the scan. Ally calls it "not a permanent fix" |
| 4 | **Give students an audio companion** | Gemini Notebook → Audio Overview | T2 | Upload sources, steer it toward your objectives, link it in Canvas | ◑ | Faculty | **Fidelity** — did it get your material right, did it flatten the argument |
| 5 | Hear something Gemini just wrote | Gemini chat → ⋯ → Listen | T2 | Click | ○ | Faculty | n/a — playback only, **no downloadable file** |
| 6 | **Audio in another language** | Ally translated version · SensusAccess · Gemini Notebook (80+ langs) | T1/T2 | Depends — **the chain is unverified** | ◑ | Either | **See worklist item 26. Do not claim this yet.** |
| 7 | **It can't leave the laptop** | Browser TTS demo — `rianders.github.io/kittenttsinweb/` | T3 | Paste text, generate | ○ | Faculty | Pronunciation |
| 8 | Batch a semester, offline, free | Kokoro-82M (Apache-2.0, CPU, faster than real time) | T3 | Install once, then script it | ● | Faculty | Pronunciation, plus your own tooling |
| 9 | Directed, multi-speaker, 70+ languages | Gemini API TTS (`2.5-flash-preview-tts`, etc.) | **T4** | API key, billing, chunk anything long | ● | Faculty | Everything. ~$0.55–0.90 per hour of audio; 32k context; drifts past a few minutes |
| 10 | Your own voice, cloned | Chatterbox (MIT), Orpheus, Dia | T3/T4 | Install — **and settle the consent question first** | ● | Faculty | Policy before output |
| — | ~~Subscription TTS products~~ | ElevenLabs, Speechify, Murf | T4 | — | — | — | **Skip.** No entitlement, data exposure, and it makes the deck sound like it's selling something |

---

## The decision rule

**Start at T1. Only move down a tier when the tier above genuinely cannot do the job.**

And the thing worth noticing about the table: **the single most common need — row 1, students
needing the reading as audio — is already solved at T1 with effort ○.** It is happening right
now, in every Canvas course, whether or not the instructor knows it.

That reframes the whole segment. The faculty job is not *making audio*. It is **making the
source good enough that the audio already being generated is worth listening to.** Rows 2–10
are the exceptions.

## The trap

**A T2 companion is never a substitute for T1 access.** Handing a disabled student a chatty
AI-generated overview while everyone else gets the source article is not equivalent access —
it is the same failure as slide 6's *auto-generate description* and slide 10's middle tier:
it sounds accessible and isn't.

Rows 1 and 4 are both good. Row 4 replacing row 1 is a compliance problem wearing a
helpful face.

## Licensing, worth 30 seconds

**Kokoro, Chatterbox, Orpheus, and Dia are Apache-2.0/MIT — commercially clean.
Coqui XTTS-v2 is CPML: non-commercial.** Piper's original MIT repo was archived in late
2025; development moved to a GPL-3.0 fork.

"Free" and "licensed for your use" are different things — which is the same lesson as the
entitlement tiers, in a second context. Cheap to say, and it lands with this room.

---

## The slide version

**Do not put the ten-row table on a slide.** A dense table is a bad slide generally, and on
*this* deck it would be a self-inflicted wound — the session where the presenter shows an
inaccessible table. Say that out loud if anyone asks why it isn't on screen.

Three lanes, which is what the table collapses to:

| Lane | Tier | The line |
|---|---|---|
| **Institutional** | T1 | Ally and SensusAccess. Already running. Your job is the source. |
| **Authored** | T2 | Gemini Notebook. You make the companion — and verify it for fidelity. |
| **Local** | T3 | Runs on your laptop, costs nothing, tells no one. |

T4 gets named once, as the boundary, and not demoed.

The demo that carries this is **row 7** — a 25MB model speaking offline in a browser tab,
shown right after a slide listing $20/month products. That landed in August and it is the
strongest available version of this segment's argument.
