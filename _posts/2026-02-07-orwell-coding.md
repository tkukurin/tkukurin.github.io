---
title: "The limits of my prompt"
tags:
  - sententia
last_modified_at: 2026-02-07T10:42:00+01:00
published: true
---

* *Post status*: incomplete thinking, workshopping timeboxed writing.
* *In plain words*: What technical interviews might look like in a few years.
* *Writing style*: Weird math formalism interspersed with literary references.

**NB**
_The irony of incomplete thoughts in a post arguing for clarity of expression does not escape me._


## Prologue: Cracks in the Coding Interview

For a long while, technical hiring **axiomatized (A1)**:
_screen for smarts and everything follows_.
We proxied this via **algorithmic interviews**.

Per [Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law),
the signal has been decaying for years—hence **lemma (L1)**.
The world [cracked the coding interview](https://amzn.to/4rfybE8):
memorize mildly difficult algorithms,
get hired into high-paying yet not necessarily fulfilling jobs.
The proxy became the product.


## Storyline: The Clawding Interview

From **(L1)** we derive **Axiom (A2)**:
most code will soon flow through a very high level
[Turing-complete-test-clearing stochastic compiler](https://en.wikipedia.org/wiki/Large_language_model).

Does **(A1)**—_general smarts_ via algorithmic puzzles—still suffice
to select the next generation of technical prowess?
Perhaps partially.
But more specifically:
the new technical talent must efficiently _invoke_ the compiler
and efficiently _verify its output_.

**Conjecture**:
The core competencies to screen for become:
1. _Clarity of thought_ (compiler-input side)—can you articulate what you want?
2. _Taste and diligence_ (compiler-output side)—can you smell when it's wrong?

The first is bottlenecked by language. The second by patience and pattern recognition.
Neither is well-measured by inverting a binary tree on a whiteboard.


## Epilogue: The limits of my language are the limits of my world

Enter the _literary interview_.

> If people cannot write well, they cannot think well.
> If they cannot think well, others will do their thinking for them.
> — George Orwell

Some formats worth exploring:

1. **Joint code review**: subtly wrong code, candidate must find and articulate the issue. Tests taste.
2. **Requirements crystallization**: given a vague product ask, write a spec on the spot. Tests clarity under ambiguity.
3. **Interviewer-as-LLM roleplay**: candidate prompts, interviewer responds as a capable-but-literal model. Tests prompt engineering intuition.
4. **Algorithmic + agent hybrid**: solve a classic problem, then describe how you'd prompt an agent to implement it. Tests translation between thinking and articulation.

The through-line: writing is thinking made visible.
If you can't write the prompt, you can't think the solution.
If you can't read the output critically, you can't ship the product.

Lest this sound elitist:
the bar isn't _eloquence_, it's _precision_.
You don't need to write like Orwell. You need to think like him.

