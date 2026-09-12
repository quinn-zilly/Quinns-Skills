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
| `SessionStart` | `hooks/ste-activate.js` | Loads the full rules when a session opens. |
| `UserPromptSubmit` | `hooks/ste-reinforce.js` | Repeats a short reminder after each message, so the style holds over long sessions. |

Say "stop speaking plainly" to turn it off. Although I'm not sure why you would.

**Scope.** The skill changes chat only. Code, commands, paths, error text,
commit messages, and PR bodies keep their own format.

**Compatibility.** This skill was written to take precedence over other voice skills (like Caveman).

Chat messages are plain, but other skills governs tool calls, subagent prompts,
commits, and code.

## Install

```bash
/plugin marketplace add quinn-zilly/Quinns-Skills
/plugin install quinns-skills@quinns-skills
```

Restart the session to run the `SessionStart` hook.

## Layout

```
.claude-plugin/
  plugin.json        Plugin manifest and hook registration
  marketplace.json   Local marketplace entry
hooks/
  ste-activate.js    SessionStart hook
  ste-reinforce.js   UserPromptSubmit hook
skills/
  simplified-technical-english/SKILL.md
```
