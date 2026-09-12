# Quinns-Skills

A Claude Code plugin that holds my personal skills.

## Skills

### `plain-english`

I got tired of trying to parse through unreadable slop whenever I interacted with Claude Code to figure out what it was trying to say.

This skill makes Claude write chat messages in plain ASD-STE100 Simplified Technical
English (E.g., one idea per sentence, 20 words maximum, active voice, consistent
terms, answer first).

Two hooks keep the skill active at all times:

| Hook | File | Job |
| --- | --- | --- |
| `SessionStart` | `hooks/plain-english-activate.js` | Loads the full rules when a session opens. |
| `UserPromptSubmit` | `hooks/plain-english-reinforce.js` | Repeats a short reminder after each message, so the style holds over long sessions. |

Say "stop speaking plainly" (or "normal english") to turn it off. Although I'm not sure why you would.

**Scope.** The skill changes chat only. Code, commands, paths, error text,
commit messages, and PR bodies keep their own format.

**Compatibility.** This skill was written to take precedence over other voice skills (like Caveman).

Chat messages are plain, but other skills govern tool calls, subagent prompts,
commits, and code.

## Install

```bash
/plugin marketplace add quinn-zilly/Quinns-Skills
/plugin install quinns-skills@quinns-skills
```

Restart Claude Code to run the `SessionStart` hook. Installing does not fire it in the
current session.

To call the skill directly: `/quinns-skills:plain-english`.

## Layout

```
.claude-plugin/
  plugin.json        Plugin manifest and hook registration
  marketplace.json   Local marketplace entry
hooks/
  plain-english-activate.js    SessionStart hook
  plain-english-reinforce.js   UserPromptSubmit hook
skills/
  plain-english/SKILL.md
```
