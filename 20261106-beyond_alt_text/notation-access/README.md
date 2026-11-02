# Notation access: a skill for making course notation accessible

From *Beyond Alt Text*, the UOES / TIIP faculty workshop on November 6, 2026.

[`SKILL.md`](SKILL.md) holds the rules from the session, written for an AI assistant:
transcribe, never solve; keep your course's conventions; mark anything uncertain; describe
figures without giving away what they prove. Save it once as a skill, and every page you
give the assistant gets the same rules, without retyping the prompt.

**Download:** [notation-access.zip](https://rianders.github.io/presentations/20261106-beyond_alt_text/notation-access.zip)
(the skill folder, ready to upload), or open [`SKILL.md`](SKILL.md) and use **Copy raw file**.

The skill is plain text in the `SKILL.md` format. As of November 2026, Gemini, Copilot,
ChatGPT and Claude all accept that format, so this one file works in each of them.

> **Checked November 2, 2026.** These tools change month to month. If a menu has moved,
> the vendor's own help page (linked in each section) is the authority.

---

## Gemini

Gemini **skills** replaced Gems in autumn 2026.

1. Open [gemini.google.com](https://gemini.google.com) and go to **Skills**.
2. Upload the skill file or the unzipped `notation-access` folder. Or choose **Create with
   Gemini** and paste the contents of `SKILL.md`.
3. In a chat, attach your page and ask Gemini to make it accessible. The skill's description
   tells Gemini when to use it.

**Rutgers NetID:** skills are rolling out to personal Google accounts first, and Google's help
page says they are *not yet available on work or school accounts*. Until they reach yours,
paste the short prompt from the slides at the start of each chat. Gems on education
accounts continue until at least June 2027.

Google's guide: [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296)

## Microsoft Copilot

Microsoft 365 Copilot **agents** can carry skills.

1. In Copilot, create an agent (Agent Builder).
2. Add a skill and upload **notation-access.zip**. Upload the whole .zip; Microsoft says not to
   upload `SKILL.md` on its own.
3. Or, more simply, paste the contents of `SKILL.md` into the agent's **Instructions**. It's
   under 4,000 characters, well within the limit.

**Rutgers NetID:** which Copilot features your account has depends on its licence. Check that
you can create an agent before relying on it.

Microsoft's guide: [Add skills to your declarative agent in Agent Builder](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills)

## ChatGPT

Custom GPTs are being retired in favour of **plugins**; a plugin carries one or more skills.

1. In ChatGPT, install **Plugin Creator** from the plugin directory.
2. Start a chat with `@plugin-creator`, paste the contents of `SKILL.md`, and ask it to create
   a plugin called `notation-access` from it.
3. Install the new plugin, then use it on your page.

If you already had a custom GPT with these instructions, ChatGPT's **Migrate to plugin** option
turns its instructions into a skill. Custom GPTs stop working on December 11, 2026.

OpenAI's guide: [Plugins quickstart](https://developers.openai.com/plugins/quickstart)

## Claude

1. In Claude's settings, find **Skills** and upload **notation-access.zip**. The .zip must have
   the `notation-access` folder at its root with `SKILL.md` inside, exactly as the download is.
2. Code execution needs to be turned on in settings for skills to run.
3. Custom skills on claude.ai need a paid plan, and they belong to your account only.

In Claude Code, put the `notation-access` folder in `~/.claude/skills/` instead.

Anthropic's guide: [Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

---

## Any other assistant

If a tool has no skills feature, paste the contents of `SKILL.md` at the start of the chat, or
into its custom instructions. The rules work the same; they just don't travel with you.

## Always

Whichever tool you use, **you verify the output**. The skill makes that easier: it ends every
answer with a "Check these" list of everything it wasn't sure of. You are the one person who
can tell whether it read your notation correctly.
