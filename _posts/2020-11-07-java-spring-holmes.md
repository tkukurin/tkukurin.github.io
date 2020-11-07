---
title: "Try to catch the main in Java"
tags:
  - tidbit
last_modified_at: 2020-11-06T21:00:00+01:00
published: true
---

How do you determine the application entry class?
[Raise the issue to your JVM](https://github.com/spring-projects/spring-boot/blob/dfe3058dffeabb00de553ae25791e84f663bc3de/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/SpringApplication.java#L289), of course.
Stack trace is always iterated from topmost element, though.
Nothing's really stopping you from deceiving this algorithm by calling multiple main methods in different classes.

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
}
```
