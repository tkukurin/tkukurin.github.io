---
title: "Lists of NumPy arrays"
tags:
  - impedimenta
last_modified_at: 2020-11-09T15:42:00+01:00
published: true
---

Are, of course, a stack.

```py
import numpy as np

xs = [
  np.array([1,2]),
  np.array([3,4])
]

xs_asnp = np.stack(xs)
```
