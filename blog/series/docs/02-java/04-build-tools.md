---
title: 构建与依赖管理
date: 2025-10-21
---

# 构建与依赖管理

- Maven：以 `pom.xml` 描述依赖与构建生命周期；中央仓库与私服（Nexus）。
- Gradle：以 `build.gradle(.kts)` 进行声明式构建；插件生态丰富、性能优于 Maven。
- 推荐使用 `Wrapper` 固定构建工具版本，确保可重复构建。

示例：Maven 依赖

```xml
<dependencies>
  <dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.13</version>
  </dependency>
</dependencies>
```

示例：Gradle 依赖（Kotlin DSL）

```kotlin
dependencies {
  implementation("org.slf4j:slf4j-api:2.0.13")
}
```

- 多模块工程：Maven 的 `<modules>` 与 Gradle 的 `settings.gradle`；统一版本与公共约束（BOM）。