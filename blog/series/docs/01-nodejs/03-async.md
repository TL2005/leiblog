---
layout: doc
title: 异步与事件循环
date: 2025-10-21
---

# 异步与事件循环

## 事件循环概览
- 宏任务队列：`setTimeout`、`setInterval`、I/O。
- 微任务队列：Promise then/catch、`queueMicrotask`。
- Node 特有：`process.nextTick` 与 `setImmediate`。

## Promise 与 async/await
```js
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
```
- 错误处理：使用 `try/catch` 或在链式操作中 `.catch()`。

## nextTick 与 setImmediate
```js
process.nextTick(() => console.log('microtask'))
setImmediate(() => console.log('macrotask'))
```
- `nextTick` 在本轮事件循环末尾、优先于微任务队列执行。

## Streams（流）
```js
import fs from 'node:fs'
fs.createReadStream('a.txt').pipe(fs.createWriteStream('b.txt'))
```
- 流适合处理大文件与网络数据，避免一次性加载内存。

---
