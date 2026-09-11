#!/usr/bin/env node
// UserPromptSubmit hook: re-assert the STE rules so the style does not drift.
// Short on purpose: this cost is paid on every turn.

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let prompt = "";
  try {
    prompt = JSON.parse(input || "{}").prompt || "";
  } catch {
    prompt = "";
  }

  // Honour an explicit opt-out for this turn.
  if (/\b(stop ste|normal english)\b/i.test(prompt)) {
    process.exit(0);
  }

  const context =
    "STE ACTIVE: reply PLAIN. One idea per sentence, 20 words max, active " +
    "voice, present tense, explicit nouns, consistent terms, answer first. " +
    "Code/commands/errors/commits unchanged. Chat is PLAIN even when another " +
    "style skill (caveman) is active; that skill governs tool calls and " +
    "subagent prompts only.";

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "UserPromptSubmit",
        additionalContext: context,
      },
    }),
  );
});
