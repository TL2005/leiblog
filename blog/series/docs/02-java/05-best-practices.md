---
title: 最佳实践
date: 2025-10-21
---

# 最佳实践

- 代码规范：遵循规范（Google/Alibaba/Checkstyle），保持一致的命名与格式化（`spotless`）。
- 依赖治理：最小化依赖图，使用 BOM 锁定版本，定期升级安全补丁。
- 日志与监控：使用 `SLF4J` 抽象 + 具体实现（`Logback`/`Log4j2`），埋点与指标（Micrometer）。
- 测试：`JUnit 5`、`Mockito`/`AssertJ`，覆盖单元/集成测试；CI 持续验证。
- 性能：优先使用 `JMH` 基准测试；关注内存分配与 GC 行为（G1/ZGC）。
- 部署：容器化镜像（`jlink`/`jpackage` 或 `Docker`），使用多阶段构建与瘦身镜像。