# Quinns-Skills

A Claude Code plugin that holds my personal skills.

## Skills

### `simplified-technical-english`

Makes Claude write chat messages in plain ASD-STE100 Simplified Technical
English: one idea per sentence, 20 words maximum, active voice, consistent
terms, answer first.

The skill is always active. Two hooks keep it on:

| Hook | File | Job |
| --- | --- | --- |
| `SessionStart` | `hooks/ste-activate.js` | Loads the full rules when a session opens. |
| `UserPromptSubmit` | `hooks/ste-reinforce.js` | Repeats a short reminder after each message, so the style holds over long sessions. |

Say "stop STE" or "normal english" to turn it off.

**Scope.** The skill changes chat only. Code, commands, paths, error text,
commit messages, and PR bodies keep their own format.

**Precedence.** Another style plugin may set a different voice. Caveman is one.
Chat to me stays plain. The other skill governs tool calls, subagent prompts,
commits, and code.

## Install

```bash
/plugin marketplace add C:/Users/quinn/Documents/Projects/Quinns-Skills
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
