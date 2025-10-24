---
layout: doc
title: 模块系统
date: 2025-10-21
---

# 模块系统

## CommonJS（CJS）
```js
// foo.cjs
const fs = require('fs')
module.exports = { read: fs.readFileSync }
```
- 使用 `require` 与 `module.exports`。
- 默认在 `package.json` 不设 `type` 时为 CJS。

## ES Modules（ESM）
```js
// foo.mjs 或在 package.json 设 type: module
import fs from 'node:fs'
export const read = fs.readFileSync
```
- 使用 `import/export`，支持顶层 `await`。

## package.json 的 type 字段
```json
{
  "name": "demo",
  "type": "module"
}
```
- 设为 `module` 时 `.js` 按 ESM 解析；未设置时按 CJS。
- 混合场景：使用 `.cjs` 与 `.mjs` 扩展名区分。

## 互操作与注意事项
- ESM 中使用 CJS：`import pkg from 'cjs-pkg'`，由包导出决定。
- CJS 中使用 ESM：需动态 `import()` 或打包处理。
- 文件路径与扩展名在 ESM 中要求显式 `.js/.mjs`。

---
