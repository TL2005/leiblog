---
layout: doc
title: 包管理与工作空间
date: 2025-10-21
---

# 包管理与工作空间

## npm 基础
```bash
npm init -y
npm i lodash
npm run build
```
- `scripts` 配置常见命令：`dev`、`build`、`test`。

## pnpm 与 Workspace
```bash
pnpm init
pnpm add lodash
pnpm -w add typescript -D
```
- 使用 `pnpm-workspace.yaml` 管理多包：
```yaml
packages:
  - packages/*
  - apps/*
```

## Monorepo 常见结构
```
root
├─ apps/
│  ├─ web/
│  └─ api/
├─ packages/
│  ├─ ui/
│  └─ utils/
└─ pnpm-workspace.yaml
```
- 顶层安装共享依赖（`-w`），并在子包内互相引用。

---
