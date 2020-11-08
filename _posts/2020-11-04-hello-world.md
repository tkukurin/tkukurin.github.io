---
title: "Pre `C++20` string formatting"
tags:
  - cpp
last_modified_at: 2020-11-04T15:42:00+01:00
published: true
---


Abhorrent.

```cpp
char strbuf[10+1];
int meaning = 42;
std::sprintf(strbuf, "%010d", meaning);
std::string message(strbuf);
```

Soon [21<sup>st</sup> century will catch up](https://en.cppreference.com/w/cpp/utility/format).

```cpp
std::string message = std::format("The answer is {:010d}.", 42);
```
