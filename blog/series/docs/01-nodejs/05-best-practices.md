---
layout: doc
title: 最佳实践
date: 2025-10-21
---

# 最佳实践

## 配置与环境
- 使用 `.env` 与环境变量注入配置。
- 区分 `development`、`test`、`production` 三种环境。

## 日志与监控
- 使用 `pino` 或 `winston` 记录结构化日志。
- 结合 APM/metrics（如 Prometheus + Grafana）。

## 错误处理
- 全局未捕获错误：
```js
process.on('uncaughtException', (err) => {
  console.error(err)
})
process.on('unhandledRejection', (err) => {
  console.error(err)
})
```
- 对外返回统一错误响应格式与错误码。

## 安全
- 使用 `helmet` 强化 HTTP 头部。
- 依赖检查：`npm audit` / `pnpm audit`。

## 性能
- 使用 Cluster 或 PM2 启动多进程。
- 适时启用缓存（内存/LRU 或 Redis）。

---
