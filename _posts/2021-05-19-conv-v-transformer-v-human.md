---
title: Are Convolutional NNs or Transformers more like Human Vision?
tags:
  - marginalia
last_modified_at: 2021-05-19T07:42:00+01:00
published: true
---

[ArXiv](https://arxiv.org/pdf/2105.07197.pdf) and [Git repo](https://github.com/shikhartuli/cnn_txf_bias).
Compares human recognition of images to CNNs/Transformers.

Error consistency measured via Cohen's Kappa as with some previous work:

$$\kappa_{i,j} = \frac{c_{\textrm{obs}_{i,j}} - c_{\textrm{exp}_{i,j}}}{1 - c_{\textrm{exp}_{i,j}}}$$

Kappa is unable to qualitatively measure two systems' errors, though, so they
granularize ImageNet classes to 16 higher-level categories to obtain a feasible
confusion matrix: *airplane, bear, bicycle, bird, boat, bottle, car, cat, chair,
clock, dog, elephant, keyboard, knife, oven and truck* (as in [previous work](https://arxiv.org/abs/1811.12231)).
Each class' confusion is quantified by Jensen-Shannon distance (symmetrized and
smoothed Kullback-Leibler):

$$\textrm{JS}(p,q) = \sqrt{\frac{D(p\parallel m) + D(q \parallel m)}{2}}$$

Where $$m$$ is the point-wise mean ($$m_i = \frac{p_i+q_i}{2}$$) of two
probability distributions. $$p_i$$ are distributions over classifier errors:

$$p_i = \frac{e_i}{\sum_j e_j} \forall i \in \{1 \ldots C\}$$

And we compute distributions by collapsing the confusion matrix along the
predicted labels axis:

$$e_i = \sum_j \textrm{CM}_{i,j} \forall j \neq i$$


## Interesting things

Measures above are used to compare errors between humans and ML models.
I.e. higher Kappa and lower JS distance imply higher consistency.

Error consistency doesn't necessarily track accuracy.

They also measure "shape bias":

> The shape bias has been defined as the percentage of the time the model
> correctly predicts the shape for trials on which either shape or texture
> prediction is correct. We tested this by evaluating performance on the SIN
> dataset. This dataset contains images where the shape and texture of the
> object in each image conflict.

According to fig. 7, humans bias heavily towards shape *except for* planes,
knives and boats?! I don't get it. How does shape/texture conflict exactly?

[Blake Richards](https://twitter.com/tyrell_turing/status/1395073954776240131):

> I find it slightly odd that anyone is ever surprised that ANNs trained using
> nothing but still images focus on shape less than humans (who live in a 3D
> world where they can actually *feel* shapes with their hands)...
> Still it's interesting that transformers do that a bit less.
> Nonetheless, my bet is no architecture trained on still images would ever
> focus on shape to the extent humans do unless forced to by some really strong
> inductive biases.

[Understanding Robustness of Transformers for Image Classification](https://arxiv.org/abs/2103.14586)
notes that shape accuracy in transformers is primarily related to patch size:

![Shape accuracy is a function of patch size](https://pbs.twimg.com/media/E1xP7T2WYAMNefM?format=png)

---

TL;DR transformers seem more consistent with humans according to their
experiments. Some interesting ideas for future work:
* comparing between different transformers
* JS to analyze "concept-level" similarity (dogs v cats v knives)
  * humans may be using "concepts" for classification ([ConceptNet](https://arxiv.org/abs/1612.03975))
* more human-like models / neurosci stuff

