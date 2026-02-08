---
title: "[AI4Good 2020] Don't ExplAIn yourself"
image:
    path: https://www.explainxkcd.com/wiki/images/0/01/here_to_help.png
    caption: "Now that I'VE tried, WE know it's hard"
tags:
  - marginalia
last_modified_at: 2020-11-13T15:42:00+01:00
published: true
---


Some excellent points in Marzyeh Ghassemi's [talk "against explainability"](https://www.youtube.com/watch?v=wc8gDNNq0XA&list=PL6Xpj9I5qXYFTaKnvgyfFFkxrOb4Ss_-J&index=4),
especially in (applied) AI for medicine.
Humans overtrust if AI can perform a function they can't, or when they expect
the system to mitigate risks (*danger of explainability*).
Focus instead on "healthy" (robust, private, fair) models, healthcare, behavior.

That said: prior seems weighted towards disbelieving AI more than humans, though
humans are the ultimate black-box.
Makes a point of between-clinician variability; some people are more susceptible
to advice, e.g. especially younger clinicians.
Also note: ~400 routine clinical practices contradicted by studies.

So what kind of *transparency* is useful?
Perhaps understand when to reject model output and
on which strata it fails
(akin to [datasheets](https://arxiv.org/abs/1803.09010) and [model cards](https://arxiv.org/abs/1810.03993.pdf))
rather than necessarily "white-boxing".
Transparency in process is easier to achieve.
Transparency via post-hoc explanations is useful if consistent.
But e.g. vanilla attention and saliency maps aren't always consistent
(though apparently can be made so).

Finally, bias is not inherent to models but part of the clinical/human landscape.
We are all to some extent *overfit* to our prior experience.
35% of doctors report burnout; 56% *don't have time* to empathize.
AI as a chance to *regularize* (educate) and unburden clinicians. Collaborative,
with human-in-the-loop. Try to improve faulty existing processes.

