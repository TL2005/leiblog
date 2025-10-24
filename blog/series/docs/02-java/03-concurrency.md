---
title: 并发与线程
date: 2025-10-21
---

# 并发与线程

- Java 并发基础：`Thread`、`Runnable`、`Executor` 框架。
- 同步原语：`synchronized`、`Lock`、`volatile` 与原子类（`Atomic*`）。
- 高层工具：`CompletableFuture`、`ForkJoinPool`，以及并行流 `Stream#parallel()`。

示例：使用 CompletableFuture

```java
CompletableFuture<String> f = CompletableFuture.supplyAsync(() -> heavyCalc());
String result = f.thenApply(r -> transform(r)).join();
```

- 线程安全集合与并发工具包位于 `java.util.concurrent.*`。
- 现代选择：虚拟线程（Project Loom，在新版本 JDK 中预览/逐步稳定），简化高并发场景。