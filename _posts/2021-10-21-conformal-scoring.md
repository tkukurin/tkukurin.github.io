---
title: "Conformal Classification of Neural Networks"
tags:
  - ml
last_modified_at: 2021-10-21T19:42:00+01:00
published: true
---

In deep learning, we train a classifier $$\pi$$ to approximate a posterior on
classes $$y_i \in [K] = \{1,\ldots K\}$$ given input: $$\pi(x) \approx P(y|x)$$.

Conformal Prediction (CP) methods output a set $$C(x) \subseteq [K]$$ instead.
CP guarantees *coverage* at $$1-\alpha$$; intuitively, $$C(x)$$ is supposed to
resize based on uncertainty levels.
Output quality is, however, strongly tied to the underlying model $$\pi$$.

Current conformal methods are post-hoc, preventing $$\pi$$ from adapting to
minimize score *inefficiency* (output set size). Metrics:

$$
\begin{aligned}
\textrm{Cover} &= \frac{1}{|I_{\textrm{test}}|}
  \sum_{i \in I_{\textrm{test}}} \delta [ y_i \in C(x_i) ] \\
\textrm{Ineff} &= \frac{1}{|I_{\textrm{test}}|}
  \sum_{i \in I_{\textrm{test}}} |C(x_i)|
\end{aligned}
$$

Ideally, we would like to:
1. Reduce size of $$C(x)$$ whenever possible
2. Make it possible to trade-off per-class performance
   (the more difficult classes usually achieve lower coverage).

[Learning Optimal Conformal Classifiers](https://arxiv.org/pdf/2110.09192.pdf)
addresses these issues by incorporating conformal scoring into model training.


