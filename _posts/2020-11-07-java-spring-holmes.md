---
title: "Catching a main class"
tags:
  - java
last_modified_at: 2020-11-06T21:00:00+01:00
published: true
---

Tidbit. 
[Spring raises project entry point issue to the JVM](https://github.com/spring-projects/spring-boot/blob/dfe3058dffeabb00de553ae25791e84f663bc3de/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/SpringApplication.java#L289).
Stack trace is always iterated from topmost element, though.
Call multiple main methods in different classes for misery and loss.

```java
private Class<?> deduceMainApplicationClass() {
  try {
    StackTraceElement[] stackTrace = new RuntimeException().getStackTrace();
    for (StackTraceElement stackTraceElement : stackTrace) {
      if ("main".equals(stackTraceElement.getMethodName())) {
        return Class.forName(stackTraceElement.getClassName());
      }
    }
  } catch (ClassNotFoundException ignore) { }
  return null;
}
```
