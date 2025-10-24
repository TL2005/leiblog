---
title: 标签
---

<script setup>
import { data as posts } from '../../.vitepress/content/posts.data.js'

const tagMap = posts.reduce((acc, p) => {
  for (const t of p.tags || []) {
    (acc[t] ||= []).push(p)
  }
  return acc
}, /** @type {Record<string, any[]>} */ ({}))

const tags = Object.entries(tagMap).sort((a, b) => b[1].length - a[1].length)
</script>

# 标签

<div>
  <div v-for="[tag, list] in tags" :key="tag" style="margin-bottom:16px">
    <h3>{{ tag }}（{{ list.length }}）</h3>
    <ul>
      <li v-for="p in list" :key="p.url">
        <a :href="p.url">{{ p.title || p.url }}</a>
      </li>
    </ul>
  </div>
</div>