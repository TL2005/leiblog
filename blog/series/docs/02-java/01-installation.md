---
title: 安装与环境
date: 2025-10-21
---

# 安装与环境

- 安装 JDK（推荐使用 `Temurin` 或 `Oracle JDK`），建议版本 `11+` 或 `17` LTS。
- 配置 `JAVA_HOME` 与 `PATH` 环境变量，验证 `java -version` 与 `javac -version`。
- 常用 IDE：`IntelliJ IDEA`、`Eclipse`、`VS Code`（配合 Java 扩展）。
- 包管理与构建：`Maven` 与 `Gradle`，推荐统一在团队内选型并使用 `Wrapper`（`mvnw` / `gradlew`）。
- 多版本管理：macOS 可用 `sdkman` 管理多版本 JDK 与工具。

示例：使用 Maven 创建项目

```bash
mvn -version
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=demo \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DarchetypeVersion=1.4 \
  -DinteractiveMode=false
```