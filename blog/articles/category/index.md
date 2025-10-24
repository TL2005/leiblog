---
title: 分类
---

<script setup>
import { data as posts } from '../../.vitepress/content/posts.data.js'

const catMap = posts.reduce((acc, p) => {
  const c = p.category || '未分类'
  ;(acc[c] ||= []).push(p)
  return acc
}, /** @type {Record<string, any[]>} */ ({}))

const categories = Object.entries(catMap).sort((a, b) => b[1].length - a[1].length)
</script>

# 分类

<div>
  <div v-for="[cat, list] in categories" :key="cat" style="margin-bottom:16px">
    <h3>{{ cat }}（{{ list.length }}）</h3>
    <ul>
      <li v-for="p in list" :key="p.url">
        <a :href="p.url">{{ p.title || p.url }}</a>
      </li>
    </ul>
  </div>
</div>