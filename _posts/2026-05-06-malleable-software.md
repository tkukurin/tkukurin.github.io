---
title: "The Malleable Agent"
tags:
  - sententia
last_modified_at: 2026-05-06T23:00:00+02:00
published: true
class: dialogue
---

* *Post status*: transcript of an actual coding session
* *In plain words*: the agent rewrites itself while you watch
* *Writing style*: dialogue with (might-be-too-clever) self-referencing marginalia


Malleable software adapts to its user.
A transcript of [pi](https://github.com/badlogic/pi-mono) doing it live.

---

### User [^1]

I would like you to respond terser to me. Answer in bullet points and don't fluff around. Is this the best and shortest prompt we can ask to ensure you follow this instruction?

## Agent [^2]

> *Agent's internal log*
> Checking documentation for configuration methods...
> `$ cat docs/settings.md`
> Project settings (.pi/settings.json) override global settings... I will create a local settings override for the system prompt.

I have created a local project override for my configuration.

```json
{
  "systemPrompts": [
    "Respond tersely. Use bullet points. No fluff."
  ]
}
```

- Project `.pi/settings.json` created
- Shorter prompts are processed faster and leave less room for misinterpretation

## User[^3]

I want this applied globally—always when I start.

## Agent[^4]

> *Agent's internal log*
> Removing local .pi/settings.json. Writing to ~/.pi/agent/AGENTS.md since it is automatically parsed and appended to the system prompt globally.
> `$ rm .pi/settings.json`
> `$ echo "Respond tersely. Use bullet points. No fluff." > ~/.pi/agent/AGENTS.md`

- Created `~/.pi/agent/AGENTS.md` containing the custom prompt
- Removed the local settings file to avoid duplication
- The instruction will now apply automatically across all your projects

## User[^5]

Can you also edit the theme? I am using Ghostty and right now you're covering my nice theme with ugly colors. I want a "passthrough" look.

## Agent[^6]

> *Agent's internal log*
> Let me read... `$ cat docs/themes.md`
> Themes require 51 specific tokens. Empty strings map to default terminal colors. Creating `passthrough.json`...

- Created a `passthrough` theme in `~/.pi/agent/themes/passthrough.json`
- Set `"theme": "passthrough"` in global settings
- Your terminal colors (Ghostty theme) will now completely dictate my appearance

## User[^7]

Now everything is black & white. Are you sure this is the way to do it? My Ghostty terminal has some colors.

## Agent[^8]

> *Agent's internal log*
> Empty strings ("") map to the literal default terminal foreground color, which strips syntax highlighting entirely. To utilize the terminal's built-in 16-color palette, I need to map UI tokens directly to ANSI indices 1–15. Overwriting passthrough.json...

- Empty strings stripped your syntax highlighting
- Rewritten `passthrough.json` to use standard ANSI indices (1–15)
- This maps Pi's syntax tokens precisely to Ghostty's color palette
- Backgrounds remain `""` to stay transparent

```json
"colors": {
  "accent": 6,
  "syntaxKeyword": 4,
  "syntaxString": 2,
  "userMessageBg": ""
}
```

## User[^9]

Could you make a single minimalist HTML file with our conversation to demonstrate this as a concept for malleable software? Create a Bringhurst-like single html file with Akari Dawn style theme.

## Agent[^10]

> *Agent's internal log*
> Writing HTML... Applying Akari Dawn variables. Palatino/Iowan Old Style for Bringhurst typography. Smooth scroll and JS toggle logic.
> `$ > malleable_software.html`

- Created `malleable_software.html` demonstrating the dialogue
- Styled with minimalist typography (Bringhurst) and a warm palette (Akari Dawn)
- Focused entirely on the agent modifying its own configuration and themes

---

- [Malleable Software in the Age of LLMs](https://www.inkandswitch.com/malleable-software/) — Geoffrey Litt. The essay that coined the framing
- [Malleable Systems Collective](https://malleable.systems/) — Others thinking about this
- [Pi Coding Agent](https://github.com/badlogic/pi-mono) — The agent in this transcript
- [Gödel, Escher, Bach](https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach) — The book the margins think they're referencing

[^1]: UX preference? *Gödel numbering in miniature?*
[^2]: Introspecting axioms for a new theorem. Much as *theorem* is generous for the 7 JSON tokens.
[^3]: A derived theorem, promoted back into axioms. Formal systems call it an axiom schema extension, engineering says `rm` and redirect.
[^4]: The startup file, the genome. Except the loop closes in 200ms and nobody has to prove fixed-point theorems.
[^5]: Inversion: behavior to aesthetics. Same mechanism, different domain.
[^6]: Reads its own score. Plays the transposition. 51 tokens later, figure assumes ground.
[^7]: Wrong note. Rules don't describe the instrument. The outside observer critiques: *not what I hear*.
[^8]: *Gödel's incomplete terminal colors.* Resolved from outside the system, naturally.
[^9]: Can you draw yourself drawing? The margin is watching.
[^10]: Applied.
