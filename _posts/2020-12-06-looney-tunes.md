---
title: "Autonomous navigation of stratospheric looney tunes using RL"
tags:
  - marginalia
last_modified_at: 2021-02-01T14:42:00+01:00
published: true
---

[Nature article by Google Brain and Loon](https://www.nature.com/articles/s41586-020-2939-8?fbclid=IwAR2BtsAuFw3GyKj-lhASiQCZmw_EZns1PmsiJNaAa3q9qMJjMJN3OqnZ83Y).
The problem they are solving is stratospheric superpressure baloon navigation.
Balloons can navigate vertically by pumping air, while horizontal motion is
achieved by wind currents. RL model is in production at Loon (update:
I guess [not anymore](https://spacenews.com/google-to-shut-down-loon/) :().

Balloons should be maintained within 50km of a given *station*.
Problems: partial observability (sparse wind measurements), errors in prediction
(short-term forecasts vs actual measurements), battery-movement tradeoff.

Actions: ascend, descend, stay.
Reward: 1 if within 50km of station.
Long-term objective from starting state $$s$$:

$$R_s = \mathbb E \left [ \sum_{t=0}^\infty \gamma^t r(s_t,a_t)|s_0=s \right ]$$

They use some soft decay the further this balloon is from its station.
Also have an additional component mixed in for power efficiency.


## Dataset, augmentation, simulation

**Gaussian Processes** (GPs) to blend European Centre for Medium-Range Weather
Forecast (ECMWF, used as prior mean) weather data with balloon's measurements.

Their ~10 years of data are inadequate for large deviations in behavior. Thus
construct *plausible* wind data from ECMWF's ERA5 global reanalysis datset -
which reinterprets weather using numerical models, whatever that means.


## Model

Wind is always centered around the balloon's altitude (i.e. relative, not
absolute coordinates). Uncertainty incorporated in input.

7-layer, 600-unit ReLU NN, learned using a [Quantile Regression DQN](https://arxiv.org/pdf/1710.10044.pdf)
(QR-DQN, also cf. some [PyTorch reimplementation](https://github.com/BY571/QR-DQN/blob/master/QR-DQN.ipynb)).
In QR-DQN, the distribution over returns is modeled explicitly instead of only
estimating the mean.


## Deployment

> Real conditions differ due to modelling discrepancies in flight dynamics and
> power consumption, making this experiment a major challenge for RL.

Offloading the training offline seems to have helped (longer decision-making
horizon, lower computational cost). IRL performs better than eval, because eval
contains an artificially high proportion of difficult conditions. They don't
mention how well it performs IRL difficult conditions.

Outside range (50-100km) spends more energy (55W vs 39W) to more quickly (3.3h
vs 5.0h) return within range (50km). In range spends less energy (29W vs 33W) to
stay in range a longer time (79% vs. 72%).

In between bouts of cognition, scripted behaviors and engineers take over from
the agent to reset the system to its initial configuration.


