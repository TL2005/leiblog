---
title: 模块系统
date: 2025-10-21
---

# 模块系统

- 传统 Java 使用 `package` 管理命名空间与访问修饰；自 Java 9 引入 `Java Platform Module System (JPMS)`。
- 模块通过 `module-info.java` 声明导出包与依赖模块，支持显式依赖与封装。

示例：定义模块

```java
module com.example.app {
  requires com.example.lib;
  exports com.example.app.api;
}
```

- 与构建工具集成：Maven/Gradle 可自动处理模块路径（`--module-path`）。
- 与类路径兼容：未模块化依赖仍可在类路径下运行，迁移时注意混用策略。