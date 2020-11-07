---
title: "Pre `c++20` string formatting"
tags:
  - irreverent
last_modified_at: 2020-11-04T15:42:00+01:00
published: true
---


Abhorrent.

```cpp
char strbuf[10+1];
int meaning = 42;
sprintf(strbuf, "%010d", meaning);
string s(strbuf);
```
