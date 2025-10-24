---
title: 列表
---

<script setup>
import { data as posts } from '../../.vitepress/content/posts.data.js'
</script>

# 所有文章

<ul>
  <li v-for="p in posts" :key="p.url">
    <a :href="p.url">{{ p.title || p.url }}</a>
    <span v-if="p.date" style="margin-left:8px;color:var(--vp-c-text-2)">
      {{ new Date(p.date).toLocaleDateString('zh-CN', { year:'numeric', month:'2-digit', day:'2-digit' }) }}
    </span>
    <span v-if="p.category" style="margin-left:8px;color:var(--vp-c-text-2)">[{{ p.category }}]</span>
  </li>
</ul>
