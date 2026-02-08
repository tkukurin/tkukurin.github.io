---
title: "The dark ages of `C++20` string formatting"
tags:
  - impedimenta
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

In the meantime, [Abseil](https://abseil.io/docs/cpp/guides/format).

```cpp
#include "absl/strings/str_format.h"
std::string message = absl::StrFormat("The answer is %010d.", 42);
```

And don't forget to include `str_format` in your `BUILD` [Bazel file](https://abseil.io/docs/cpp/quickstart).

```python
cc_binary(
  name="hello_world",
  deps=["@com_google_absl//absl/strings:str_format",],
  srcs=["hello_world.cc"]
)
```