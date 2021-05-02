---
title: "Studying and prompts"
tags:
  - learning
last_modified_at: 2021-04-29T12:42:00+01:00
published: true
---

Cf. [Andy Matuschak on prompts](https://andymatuschak.org/prompts/).


## Factual prompts

```
Q. What type of chicken parts are used in the stock?
A. Bones
```

*Explanation prompts* make facts more meaningful.
```
Q. Why do we use bones to make chicken stock?
A. Because they are full of gelatin, which produces a rich texture.
```

*Better -- more precise -- explanation prompt*:
```
Q. How do the bones produce chicken stock's richer texture?
A. Because they are full of gelatin.
```

I guess the latter makes cards easier to *evaluate*.


## Functional grouping

```
Q. Chicken stock is made of chicken, water, and what other type of ingredients?
A. Aromatics.

Q. What are the typical aromatics used in chicken stock?
A. Onion, carrots, celery, garlic, parsley
```

*But we can also make it a fill-in task ("cloze deletions")*
```
Q. What are the typical aromatics used in chicken stock?
A. Onion, ???, celery, garlic, parsley
```

You can then also ask *why* for each element ("why is a carrot a good  ... ").
This requires additional research but solidifies your understanding.
Consider adding non-trivial hints to some prompts, e.g. `??? (herb)`.
Andy also recommends to retain the list shape in these cloze tasks to aid recall
(that's interesting, wouldn't that train you to recognize list patterns?).

Note, hints shouldn't render the task trivial. Differentiate: "rhymes with
parrots" is a good **mnemonic** (review post-answer) but bad hint.
Cf. [elaborative encoding](https://andymatuschak.org/prompts/Bradshaw1982.pdf).
Could also be separate q: "elaborative mnemonic for carrots in chicken stock?"
Using visuals is a form of elaborative encoding:

![Cloze task using visuals](https://andymatuschak.org/prompts/aromats-cloze.jpg)

Mnemonics should trigger an emotional response (humor, visuals, personal
experience,...).

Make the material easy to review by writing many finer-grained prompts.
> prompts are cheap, but they’re not free. Besides their time cost, they have an
> emotional cost: no one wants to spend **time** reviewing a bunch of boring
> material they already know. So if you’re writing prompts for a subject that’s
> already quite familiar, you should use fewer prompts

[NOTE: I think this is why many different learning sources work better;
assumption of different background knowledge. Anki "decays" how often prompts
appear based on your performance.]

With time, you'll make more complex "chunks".
Cf. [Perception in chess](https://andymatuschak.org/prompts/Chase1973.pdf).


## Procedural knowledge

In some sense, procedures are lists. But make them focused!
Erase irrelevant details, ex:
```
1. ???
2. Slowly bring to a simmer
3. Maintain bare simmer for 90m
4. Strain, wait until cool, then store
```

> editing down helps us make a few observations about this knowledge [...] A few
> keywords (or word groups) carry the critical details of the procedure:
> **slowly** bring to a **simmer**, then maintain **bare simmer** for **90m**.
> [...] After highlighting keywords in this way, prompt-writing often feels like
> playing Jeopardy: can you phrase that in the form of a question?

```
Q. At what speed should you heat a pot of ingredients for chicken stock?
A. Slowly.
Q. When making chicken stock, when should you lower the heat?
A. After the pot reaches a simmer.
Q. When making chicken stock, what should you do after the pot reaches a simmer?
A. Lower the temperature to a bare simmer.
Q. How long must chicken stock simmer?
A. 90m.
```

Recipe for chicken stock is linear.
For branching, maybe draw a flowchart and include in your prompt (how? I guess
as a cloze task seems most logical).
Explanation prompts are especially valuable with procedures (avoid rote
memorization):

```
Q. Why does Andy’s recipe claim we should prepare chicken stock over low heat?
A. "Brighter, cleaner" flavor.
```

NOTE: this is still quite a shallow explanation.
Andy recommends to indicate uncertainty by **explicitly phrasing the answer as
tentative**, reliant on an external claim.


## Conceptual knowledge

Hello, Wittgenstein.

Attributes and tendencies: what makes X, X?
```
Q. Why don’t stocks usually have a distinctive flavor?
A. To make them more versatile.
```

Similarities and differences: what does X relate to?
```
Q. How is stock different from soup broth?
A. Soup broth has a more complete flavor; stock isn’t meant to stand on its own.
```

Parts and wholes: What are X's constituents? What's the broader category?
```
Q. Name at least three examples of stock:
A. chicken, vegetable, mushroom, pork
```

Cause / effect: What does X do? Why?
```
Q. Why do restaurants use stock as a cooking medium instead of water?
A. Adds flavor, improves texture.
```

Significance and implications: How does it help me?
```
Q. What liquid building block explains why simple restaurant dishes are often
tastier than home renditions?
A. Stock.

Q. What should I ask myself if I notice I’m using water in savory cooking?
A. "Should I use stock instead?"
```

## Open list prompts

Not all knowledge has a neat answer.
```
Q. Name two ways you might use chicken stock.
A. e.g. cooking grains, steaming hearty greens, making purée soups, deglazing

Q. Name a vegetable purée soup which you might try making with chicken stock
A. e.g. potato, parsnip, celeriac, sunchoke, salsify, squash, carrot, pepper
```

> What specific effects, if any, do such tasks have on our memory and
> understanding? Through what mechanisms? In what situations and with what
> properties are they most useful? What repetition schedule should be used for
> such tasks? **These remain open research questions.**

Baader-Meinhof: selective attention means you become more aware of concepts.
Prompts **keep you in contact with an idea over time.**


## Writing prompts in practice: iterate!

First off, set reasonable goals.
For some less familiar topics you may not be able to write&read in parallel.

During review, actively tag prompts which make you feel uncomfortable.
Think of prompt writing as normal writing; revision sometimes requires
rearranging, merging sentences [NOTE: hah let's make git for learning?].


## Further reading

* [Effective learning: Twenty rules of formulating knowledge](https://www.supermemo.com/en/archives1990-2015/articles/20rules)
* [Knowledge structuring and representation in learning based on active recall](https://www.supermemo.com/en/archives1990-2015/english/ol/ks)
* [Nielsen: Augmenting Long-term Memory](http://augmentingcognition.com/ltm.html)
* [Nielsen: Using spaced repetition systems to see through a piece of math](http://cognitivemedium.com/srs-mathematics)
* [Soren Bjornstad’s series on memory systems](https://controlaltbackspace.org/memory/designing-precise-cards/)
  (but also check out other memory writings on his blog)
  * Questions should ask exactly one thing
  * Questions should permit exactly one answer
  * Questions should not ask you to enumerate things
    * (a) understand each member of the set through separate cards; (b) order
      the set into an enumeration, develop a mnemonic device (e.g. acronym)
  * Questions should not ask for y/n answers
  * Questions should be context-free
* [Nicky Case’s (illustrated) How To Remember Anything Forever-ish](https://ncase.me/remember/)
  * [Leitner box](https://youtu.be/uvF1XuseZFE) recall
    (group by level; recall every $$2^l$$ days)
  * Cogsci: you need memorization for creativity & critical thinking
    (imagine writing an essay if you know no words!)
* [How can we develop transformative tools for thought?](https://numinous.productions/ttft/)

Tying into similar ideas,
cf. [Adam Wiggins](https://twitter.com/_adamwiggins_/status/1388944154953228288)'
[Metamuse](https://museapp.com/podcast/)
and his [Muse app](https://twitter.com/MuseAppHQ).
I also think [karlicoss' Promnesia](https://github.com/karlicoss/promnesia)
could be a great tool for developers (open source).
Check out [his infrastructure](https://beepb00p.xyz/myinfra.html).

