---
title: "Whereof One Cannot Code, Thereof One Must Prompt"
tags:
  - sententia
last_modified_at: 2026-02-08T16:54:38+01:00
published: false
---

* *Post status*: Quick reference, companion to [the previous post](/the-limits-of-my-prompt).
* *In plain words*: Practical patterns for working with coding agents.
* *Writing style*: Terse bullets, no fluff.

# The new patterns

- **Long context degrades.** Longer chats, longer contexts. Compaction loses information. Your agent *will* get dumber as the session drags on.
- **Agentic work is fragile.** Multi-step reasoning breaks when steps get complex. Instruction-following is variable. *Simplify tasks* — or ask the model to.
- **Reasoning is just compute.** Don't trust the trace. But if good instructions still fail, turning on "thinking" might trade cost for quality.
- **When not to prompt.** Crypto, bit-twiddling, perf-critical paths. Anywhere "close enough" kills you.

# Same game, higher abstraction

- Composition. Write reusable skills for internal packages.
- Documentation. *(Ideally.)*
- PR review. Except now you're reviewing *intent-to-code translation*.
- Debugging. Ask the model what rules it read. Tell it to read a specific file.
- Shift left. Catch the hallucination before it propagates.
- Use git. Your new undo button.
- [Compress](https://en.wikipedia.org/wiki/Hutter_Prize).

