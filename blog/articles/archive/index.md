---
title: 归档
---

<script setup>
import { data as posts } from '../../.vitepress/content/posts.data.js'

function ymKey(dStr) {
  if (!dStr) return '未知时间'
  const d = new Date(dStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  return `${y}-${m}`
}

const byYearMonth = posts.reduce((acc, p) => {
  const key = ymKey(p.date)
  ;(acc[key] ||= []).push(p)
  return acc
}, /** @type {Record<string, any[]>} */ ({}))

const groups = Object.entries(byYearMonth).sort((a, b) => (a[0] < b[0] ? 1 : -1))
</script>

# 归档

<div>
  <div v-for="[ym, list] in groups" :key="ym" style="margin-bottom:16px">
    <h3>{{ ym }}（{{ list.length }}）</h3>
    <ul>
      <li v-for="p in list" :key="p.url">
        <a :href="p.url">{{ p.title || p.url }}</a>
      </li>
    </ul>
  </div>
</div>