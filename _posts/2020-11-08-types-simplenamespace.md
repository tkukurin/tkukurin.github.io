---
title: "Ad-hoc objects for free"
tags:
  - py
last_modified_at: 2020-11-08T10:42:00+01:00
published: true
---

Sometimes you need a semantically meaningful tuple, but succumb to laziness.
For that truly ad-hoc object creation.

```python
from types import SimpleNamespace
ad_hoc = SimpleNamespace(
  i='can',
  attach='anything',
  meaning=42)
```

Or a more principled immutable approach.

```python
from typing import NamedTuple

ClassicNt = NamedTuple(
  'ClassicNt', 
  [('i', str), ('attach', str), ('meaning', int)])
  
class NewNt(NamedTuple):
  i: str
  attach: str
  meaning: int = 42  # since 3.6.1.
```

Or maybe this [mutable namedtuple with defaults](https://www.python.org/dev/peps/pep-0557/) since 3.7.

```python
from dataclasses import dataclass

@dataclass
class AutoGenerateMembers:
  __slots__ = ('i', 'attach', 'meaning')
  i: str
  attach: str
  meaning: int = 42  # since 3.6.1.
```
