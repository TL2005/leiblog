---
layout: doc
title: 安装与环境
date: 2025-10-21
---

# 安装与环境

## 版本管理与 nvm
- 推荐使用 `nvm` 管理 Node 版本：
```bash
# 安装 nvm（Mac/Linux）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 载入 nvm
aource ~/.nvm/nvm.sh
# 安装并使用 LTS 版本
nvm install --lts
nvm use --lts
```

## 包管理器：npm 与 pnpm
- 初始化项目：
```bash
npm init -y
# 或
pnpm init
```
- 安装依赖：
```bash
npm i express
pnpm add express
```
- 全局安装（尽量减少使用）：
```bash
npm i -g http-server
pnpm add -g http-server
```

## 设置默认 Node 版本
- 在 shell 启动文件加入：
```bash
# ~/.zshrc 或 ~/.bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use --lts > /dev/null
```

## LTS 与 Current
- LTS（长期支持）适合生产环境；Current 用于尝鲜。
- 发布周期参考 Node 官方文档。

---
