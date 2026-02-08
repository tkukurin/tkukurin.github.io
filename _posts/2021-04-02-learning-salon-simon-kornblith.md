---
title: "Learning Salon: Simon Kornblith"
tags:
  - symposia
last_modified_at: 2021-04-03T09:42:00+01:00
published: true
---

[YouTube](https://www.youtube.com/watch?v=lvAOJm2SjzQ).


## Presentation: Do CV models need to learn like humans?

Simon thinks CV models *don't* need to learn the same way as humans.

Transfer learning via representation learning is a cornerstone of CV.
\[I guess of NLP, too, nowadays.\] [DeCAF (2014)](http://proceedings.mlr.press/v32/donahue14.html)
introduced fine-tuning on frozen representations.

Correlation between ImageNet and other datasets given "human understanding of
similarity between tasks". [YT](https://youtu.be/lvAOJm2SjzQ?t=09m17s).
I.e. humans would judge the *other* datasets are dissimilar (no formal notion).

Better ImageNet = better perf under distribution shift. [YT](https://youtu.be/lvAOJm2SjzQ?t=15m17s).

ImageNet has 1.3 million image-level labels (less than brain).
Maybe we're learning funny things because of that number.
SimCLR (contrastive learning on distorted image crops) can match supervised
performance of ResNet but needs to be 16 times larger and have 100x more
computation. [YT](https://youtu.be/lvAOJm2SjzQ?t=19m56s).

What is unsupervised learning discussion heh. [YT](https://youtu.be/lvAOJm2SjzQ?t=25m21s).

Shape/texture conlicts. [YT](https://youtu.be/lvAOJm2SjzQ?t=32m37s).

---

Simon seems to advocate the "bitter lesson" view; in essence, neural nets are
*reasonable* given the amount of data we give them.
In the limit they should be able to generalize (we're nowhere near overfit
regime). Andrew: SVM with RBF kernel has infinite dimensions, but it works
because regularization. SGD is the same way. Core behind DL is regularization.


## Discussion

Ida: is SimCLR adversarially robust? Simon: didn't test this; probably not.
Mention [Poggio's work](https://poggio-lab.mit.edu/publications/foveation-based-mechanisms-alleviate-adversarial-examples).
[YT](https://youtu.be/lvAOJm2SjzQ?t=42m06s).
\[There is no free lunch for adversarial examples\]

John: Are optical illusions adversarial examples for humans? Not really, since
it's a different (topdown imposition of priors) mechanism. Simon agrees, Jovo not.

Because humans have seen more stuff we're more adversarially robust and so the
solution to adversarial examples is more data \[I guess that's his claim?\].
[YT](https://youtu.be/lvAOJm2SjzQ?t=48m19s).

John: What if the model sees catwoman or puss in boots as input? What's its
output? \[Basically standard issue - it will give its best prediction given
known training labels\]

Simon mentions that representations generalize well regardless of labels.
E.g. if you take the second-to-last layer output, then the embedding looks
*reasonable* given its neighbors. \[How is the neighborhood defined?\]

Jovo: if you defined a metric of representation similarity *a priori* and then
find that deep nets are similar with that respect to humans, but other types of
predictive models don't, that would be interesting.

John: you can read out occipital cortex to infer arm movements, but nobody
really thinks they cause arm movement. \[What?\]

Jovo: I don't want human-like behavior; I'd just make another human. I want HCI.
Ida: big NO! Knowing if AI can simulate human behavior is interesting of itself.
Model that has good performance, less human-like is less interesting than a
model with human-like behavior. \[Simon agrees, no real contention here.\]

(...)

Shaiyan: Many images from ImageNet contain objects from multiple classes.
For example, "chairs" often have people sitting on them.
A subset of a picture of a dog might not include any part of a dog - for
example, it might just contain 'floor' or 'sky' - do you control for this?
Simon: We don't. It's true that dog photos might contain these fragments, but
maybe it's useful. \[I guess in the sense of biasing output given environment\]

Simon: We don't think representations learned by SimCLR are significantly
different from other models; however it's difficult to measure that.
\[I mean you could define some metrics to measure cross-model similarity? Am I
missing something?\]

