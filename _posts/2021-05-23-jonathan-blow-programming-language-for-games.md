---
title: Ideas about a new programming language for games
tags:
  - eng
last_modified_at: 2021-05-24T00:42:00+01:00
published: true
---


[Jonathan Blow's 2014 talk](https://youtu.be/TH9VCN6UkyQ).
He's by now advanced to a beta for the language he started designing way back.
Focuses on applications for gaming (i.e. efficiency).

Alternatives to C++:
Go is good, but GC'd and wrong concurrency model for games.
D has optional GC, but too close to C++? Maybe some other reasons.
Rust is new, no GC but too concerned with safety (not a primary for games).

Making a language (parsing/converting to bytecode) is "easy".
Optimizing and generating machine code for multiple target platforms is hard.
Apparently can leverage [LLVM](https://llvm.org/) for that.

> LLVM is a collection of modular and reusable compiler and toolchain
> technologies.

His philosophy: don't optimize for bad programmers.
Start with C, design for 85% of cases.
Software is expensive; optimize for completion *cost*.


## Memory-focused language

RAII was created to deal with exceptions, but it's crap because "resource" is a
bad abstraction. Memory is the only resource that matters.
File handles, textures, etc. rarely an issue.

> What does my program do besides fill memory? I don't even know. That's its
> main purpose. [@36:34](https://youtu.be/TH9VCN6UkyQ?t=36m34s)

[Exceptions and RAII make your job harder](https://youtu.be/TH9VCN6UkyQ?t=42m31s).
["Go does it right: error codes, multiple return values"](https://youtu.be/TH9VCN6UkyQ?t=45m06s).
\[I kinda agree with that. Just pattern match, no?\]

Use pointers within `unsafe` blocks.


## Ideas

Suggestion: C++11 but enhanced.

```cpp
struct PartyMember {
  char *! name = NULL; // "I own this memory"
  int health_max = 4;
  int current_level = 1;
}
```

Compiler can statically reason about where double frees occur.
Why not `std::unique_ptr`? Biggest complaint seems to be: ugly.

Dereferencing freed memory: `0xfeeefeee` up until now,
but debugger can also reason about this (similar: `0xcdcdcdcd`, `0xcccccccc`).
[@59m19s](https://youtu.be/TH9VCN6UkyQ?t=59m19s)

Meshes are usually allocated on the heap.
Implicit destructor and `joint` makes construction part of the type system:

```cpp
struct Mesh {
  Vector3 []! positions;
  // Belongs to the same block of memory as vec3
  int []! indices; @joint positions
}
```

In C this code is scary. Not anymore. [@1h13m19s](https://youtu.be/TH9VCN6UkyQ?t=01h13m19s)


## List of other features

* No goddamn header files.
* Refactorability - no more `->` vs. `.`, follow Go's syntax
* Haha, criticisms about C++ lambda syntax: "don't get me started"
* Optionals, e.g. `Entity ?a`. Doesn't think Swift's `a?.x` is necessary.
* Make concurrency less crazy [@1h21m02s](https://youtu.be/TH9VCN6UkyQ?t=01h21m02s)
> The older the code is, the more likely it is that it calls some function that
> calls some function that calls a macro that uses some piece of global state.
* Fewer / no implicit type conversions? (Go's model)
* Named argument passing
* Introspection and serialization, maybe w/ version syntax:
```cpp
struct Entity_Substance { @version 37
  Vector4 scale_color = Vector4(1,1,1,1); @15
}
```
* The program specifies how to build it.
Language spec says the compiler just does everything: compiling, linking, etc.
* Better preprocessor (use same lang for compile-time and runtime statements)
  * metaprogramming?


## Q&A [@1h34m28s](https://youtu.be/TH9VCN6UkyQ?t=01h34m28s)

Also some interesting things, didn't follow that much.


