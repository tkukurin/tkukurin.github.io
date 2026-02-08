---
title: "Compositional Reasoning in Early Childhood"
tags:
  - marginalia
last_modified_at: 2020-11-14T11:42:00+01:00
published: true
---


[PLOS](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0147734).
Motivated by Fodor's [Language Of Thought learning models](https://plato.stanford.edu/entries/language-thought/);
composition of simple primitive functions is what allows for the creation of
complex cognitive representations.
Here they focus on conceptual, not linguistic compositionality (compositionality
of linguistics may or may not be encapsulated within language processing).

> We show that 3.5–4.5 year olds are able to predictively compose two novel
> functions at significantly above chance levels, even without any explicit
> training or feedback on the composition itself.


## Experiment

> (...) our experiment is to teach children that certain screens cause specific
> feature changes (color or pattern) to an occluded object. The critical test
> conditions occur when *two such screens are adjacent* and children observe an
> object go behind both screens but they do not observe it between screens.

They are testing *weak* compositionality (children do not need to name function
compositions, e.g. `pitstop = tire_change + refuel`).
Setup: truck gets occluded by colored/patterned screen; children asked to choose
a new pattern; buzzing or trumpet sound to indicate failure or success.
6 trials, training until 5/6 correct.
Then this setup is extended to *two* screens to test compositionality.
Use [KelPy](https://github.com/piantado/kelpy).

![Four phases of the experiment](https://journals.plos.org/plosone/article/figure/image?size=large&id=10.1371/journal.pone.0147734.g001)

> Children receive **no feedback** on their responses to the compositional
> (two-screen) trials, meaning that success is indicative of automatic
> compositional reasoning without instruction or encouragement.


## Results

The single-screen part of the experiment gets only ~50%.

![One-screen train trials](https://journals.plos.org/plosone/article/figure/image?size=inline&id=info:doi/10.1371/journal.pone.0147734.g002)


The 2nd part shows above-chance recognition of compositionality, however it's
worth noting within-dimension changes (e.g. CH-Color/CH-color) cause total
(sub-50% performance) breakdown, akin to [breakdowns seen in object tracking](https://www.sciencedirect.com/science/article/abs/pii/S0010027704002082).
Why?

> One theory is that setting a feature value in memory is slow. Thus, when the
> value of two features change rapidly, children may get confused about what the
> resulting value is. On the other hand, if one feature changes and then a
> different feature changes, both "write" processes can occur in parallel and
> not interfere with each other


![Two-screen test trials](https://journals.plos.org/plosone/article/figure/image?size=inline&id=info:doi/10.1371/journal.pone.0147734.g003)

Blue dots above show expected performance under independent application of each
function, based on 1st part of experiment.


## Discussion

Children may have previously learned about composition (i.e. not innate),
but that was at an abstract-enough level to apply to novel situations.
There are also non-compositional models that could capture these results (e.g.
children learning that each screen only constrains possible outcomes).

Some unanswered questions:
* how do you test against these non-compositional models?
* do children learn *strong* compositionality?
* what's up with the breakdown in CH-Color/CH-Color?
* how could such learning be captured in connectionist or parallel distribution
  processing approaches?

