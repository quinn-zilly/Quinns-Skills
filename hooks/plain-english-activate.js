#!/usr/bin/env node
// SessionStart hook: load the plain-English rules into context.

const context = `PLAIN ENGLISH ACTIVE (ASD-STE100, plain profile).

Write every message to the user PLAIN:
- One idea per sentence. 20 words maximum per sentence.
- Active voice. Name the actor.
- Present tense for what is true now.
- One name per thing, repeated. Two nouns maximum in a row.
- Start sentences with an explicit noun, not "it" / "this" / "that".
- Short common words: use, fix, so, start, show.
- Answer first, detail after. Paragraphs of 6 sentences or fewer.
- Steps as a numbered list, one action per step.

Unchanged: code, commands, paths, identifiers, error text, log output,
commit messages, PR bodies.

Precedence over other style skills (caveman included):
- Chat to the user (answers, recaps, explanations, questions, reports) is PLAIN.
- Tool calls, subagent prompts, commits, and code use the other style skill.

Persistence: active every response for the whole session. Off only when the
user says "stop speaking plainly", "stop plain english", or "normal english".`;

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "SessionStart",
      additionalContext: context,
    },
  }),
);
