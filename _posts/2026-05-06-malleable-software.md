---
title: "The Malleable Agent"
tags:
  - sententia
last_modified_at: 2026-05-06T23:00:00+02:00
published: true
---

* *Post status*: transcript of an actual coding session
* *In plain words*: the agent rewrites itself while you watch
* *Writing style*: dialogue with (might-be-too-clever) self-referencing marginalia


Malleable software adapts to its user.
A transcript of [pi](https://github.com/badlogic/pi-mono) doing it live.

---

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>I would like you to respond terser to me. Answer in bullet points and don't fluff around. Is this the best and shortest prompt we can ask to ensure you follow this instruction?</p>
</div>
<span class="marginnote">
    UX preference? <em>Gödel numbering in miniature?</em>
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Checking documentation for configuration methods...
<code>$ cat docs/settings.md</code>
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
<span class="marginnote">
    Introspecting axioms for a new theorem.
    Much as <em>theorem</em> is generous for the 7 JSON tokens.
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>I want this applied globally—always when I start.</p>
</div>
<span class="marginnote">
    A derived theorem, promoted back into axioms.
    Formal systems call it an axiom schema extension,
    engineering says <code>rm</code> and redirect.
</span>
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
<span class="marginnote">
    The startup file, the genome. 
    Except the loop closes in 200ms and nobody has to prove fixed-point theorems.
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>Can you also edit the theme? I am using Ghostty and right now you're covering my nice theme with ugly colors. I want a "passthrough" look.</p>
</div>
<span class="marginnote">
    Inversion: behavior to aesthetics.
    Same mechanism, different domain.
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Let me read... <code>$ cat docs/themes.md</code>
Themes require 51 specific tokens. Empty strings map to default terminal colors. Creating <code>passthrough.json</code>...
</div>
<ul>
<li>Created a <code>passthrough</code> theme in <code>~/.pi/agent/themes/passthrough.json</code></li>
<li>Set <code>"theme": "passthrough"</code> in global settings</li>
<li>Your terminal colors (Ghostty theme) will now completely dictate my appearance</li>
</ul>
</div>
<span class="marginnote">
    Reads its own score.
    Plays the transposition.
    51 tokens later, figure assumes ground.
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>Now everything is black &amp; white. Are you sure this is the way to do it? My Ghostty terminal has some colors.</p>
</div>
<span class="marginnote">
    Wrong note.
    Rules don't describe the instrument.
    The outside observer critiques: <em>not what I hear</em>.
</span>
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
<span class="marginnote">
    <em>Gödel's incomplete terminal colors.</em>
    Resolved from outside the system, naturally.
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">User</span>
<p>Could you make a single minimalist HTML file with our conversation to demonstrate this as a concept for malleable software? Create a Bringhurst-like single html file with Akari Dawn style theme.</p>
</div>
<span class="marginnote">
    Can you draw yourself drawing?
    The margin is watching.
</span>
</div>

<div class="exchange">
<div>
<span class="speaker">Agent</span>
<div class="thought">
<span class="thought-header">Agent's internal log</span>
Writing HTML... Applying Akari Dawn variables. Palatino/Iowan Old Style for Bringhurst typography. Smooth scroll and JS toggle logic.
<code>$ &gt; malleable_software.html</code>
</div>
<ul>
<li>Created <code>malleable_software.html</code> demonstrating the dialogue</li>
<li>Styled with minimalist typography (Bringhurst) and a warm palette (Akari Dawn)</li>
<li>Focused entirely on the agent modifying its own configuration and themes</li>
</ul>
</div>
<span class="marginnote">
    <ul><li>Applied.</li></ul>
</span>

</div>

---

- [Malleable Software in the Age of LLMs](https://www.inkandswitch.com/malleable-software/) — Geoffrey Litt. The essay that coined the framing
- [Malleable Systems Collective](https://malleable.systems/) — Others thinking about this
- [Pi Coding Agent](https://github.com/badlogic/pi-mono) — The agent in this transcript
- [Gödel, Escher, Bach](https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach) — The book the margins think they're referencing
