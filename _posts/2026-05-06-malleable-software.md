---
title: "The Malleable Agent"
tags:
  - sententia
last_modified_at: 2026-05-06T23:00:00+02:00
published: true
---

* *Post status*: transcript of an actual coding session
* *In plain words*: the agent rewrites itself while you watch
* *Writing style*: dialogue with marginalia

Modern software is rigid—it forces the user to adapt to its constraints.
A malleable agent rewrites its own configuration, interfaces, and behaviors
dynamically in response to conversational feedback.
This transcript demonstrates an AI coding assistant actively reshaping its
system prompts, scope, and UI theming during a standard session.

---

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>I would like you to respond terser to me. Answer in bullet points and don't fluff around. Is this the best and shortest prompt we can ask to ensure you follow this instruction?</p>
</div>
<span class="marginnote">The request sounds trivial. But it's a demand that the system rewrite its own governing rules—from within.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Checking documentation for configuration methods...<br>
<code>$ cat docs/settings.md</code><br>
Project settings (.pi/settings.json) override global settings... I will create a local settings override for the system prompt.
</div>
<p>I have created a local project override for my configuration.</p>
<pre><code>{
  "systemPrompts": [
    "Respond tersely. Use bullet points. No fluff."
  ]
}</code></pre>
<ul>
<li>Project <code>.pi/settings.json</code> created</li>
<li>Shorter prompts are processed faster and leave less room for misinterpretation</li>
</ul>
</div>
<span class="marginnote">The agent parses its own documentation and modifies its <code>settings.json</code>. A new behavior for this instance.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>I want this applied globally—always when I start.</p>
</div>
<span class="marginnote">The scope of malleability expands. The user elevates a local hack to a system-wide permanent condition.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Removing local .pi/settings.json. Writing to ~/.pi/agent/AGENTS.md since it is automatically parsed and appended to the system prompt globally.<br>
<code>$ rm .pi/settings.json</code><br>
<code>$ echo "Respond tersely. Use bullet points. No fluff." &gt; ~/.pi/agent/AGENTS.md</code>
</div>
<ul>
<li>Created <code>~/.pi/agent/AGENTS.md</code> containing the custom prompt</li>
<li>Removed the local settings file to avoid duplication</li>
<li>The instruction will now apply automatically across all your projects</li>
</ul>
</div>
<span class="marginnote"><em>Lemma (1):</em> if a file is read on every boot, writing to it permanently rewrites the organism's DNA. A classic <strong>Strange Loop</strong>—the system alters the rules of its own execution from within.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>Can you also edit the theme? I am using Ghostty and right now you're covering my nice theme with ugly colors. I want a "passthrough" look.</p>
</div>
<span class="marginnote">From behavioral constraints to aesthetic ones. The user demands the agent disappear into the host environment.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Let me read docs/themes.md...<br>
<code>$ cat docs/themes.md</code><br>
Themes require 51 specific tokens. Empty strings map to default terminal colors. Creating ~/.pi/agent/themes/passthrough.json...
</div>
<ul>
<li>Created a <code>passthrough</code> theme in <code>~/.pi/agent/themes/passthrough.json</code></li>
<li>Set <code>"theme": "passthrough"</code> in global settings</li>
<li>Your terminal colors (Ghostty theme) will now completely dictate my appearance</li>
</ul>
</div>
<span class="marginnote">The agent reads its UI schema, generates a valid JSON theme dynamically, and applies it to itself—hot-reloading instantly. The proxy becomes the product.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>Now everything is black &amp; white. Are you sure this is the way to do it? My Ghostty terminal has some colors.</p>
</div>
<span class="marginnote"><em>Caveat emptor:</em> the first aesthetic attempt fails due to a misunderstanding of terminal emulator rendering protocols.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Empty strings ("") map to the literal default terminal foreground color, which strips syntax highlighting entirely. To utilize the terminal's built-in 16-color palette, I need to map UI tokens directly to ANSI indices 1–15. Overwriting passthrough.json...
</div>
<ul>
<li>Empty strings stripped your syntax highlighting</li>
<li>Rewritten <code>passthrough.json</code> to use standard ANSI indices (1–15)</li>
<li>This maps Pi's syntax tokens precisely to Ghostty's color palette</li>
<li>Backgrounds remain <code>""</code> to stay transparent</li>
</ul>
<pre><code>"colors": {
  "accent": 6,
  "syntaxKeyword": 4,
  "syntaxString": 2,
  "userMessageBg": ""
}</code></pre>
</div>
<span class="marginnote">The agent corrects its understanding of ANSI escape codes versus default text properties. Irony: the machine must be taught how the machine displays colors.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>Could you make a single minimalist HTML file with our conversation to demonstrate this as a concept for malleable software? Create a Bringhurst-like single html file with Akari Dawn style theme.</p>
</div>
<span class="marginnote">The user shifts from shaping the agent's environment to demanding it synthesize the interaction into an educational artifact. Meta-cognition ensues.</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Writing HTML... Applying Akari Dawn variables. Palatino/Iowan Old Style for Bringhurst typography. Smooth scroll and JS toggle logic.<br>
<code>$ &gt; malleable_software.html</code>
</div>
<ul>
<li>Created <code>malleable_software.html</code> demonstrating the dialogue</li>
<li>Styled with minimalist typography (Bringhurst) and a warm palette (Akari Dawn)</li>
<li>Focused entirely on the agent modifying its own configuration and themes</li>
</ul>
</div>
<span class="marginnote">The agent steps outside its conversational UI to author a standalone document—simultaneously the software, the developer, and the documentarian.</span>
</div>

---

## References & Further Reading

- [Malleable Software in the Age of LLMs](https://www.inkandswitch.com/malleable-software/) — Geoffrey Litt at Ink & Switch on AI as a flexible intermediary.
- [Malleable Systems Collective](https://malleable.systems/) — Software that can be redefined by its users.
- [Pi Coding Agent](https://github.com/badlogic/pi-mono) — The open-source CLI agent used here.
- [Gödel, Escher, Bach](https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach) — Hofstadter on Strange Loops and tangled hierarchies.
- [The Elements of Typographic Style](https://web.mit.edu/macrakis/www/bringhurst.html) — Bringhurst on layout and rhythm.
