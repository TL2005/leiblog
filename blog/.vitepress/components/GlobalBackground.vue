<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 在客户端挂载后添加背景样式
  const style = document.createElement('style')
  style.id = 'global-background'
  style.textContent = `
    html, body {
      background-image: url('/bg.svg') !important;
      background-repeat: no-repeat !important;
      background-position: center center !important;
      background-size: 50% !important;
      background-attachment: fixed !important;
      min-height: 100vh;
    }
    .VPDoc, .VPHome, #app, .Layout {
      background: transparent !important;
    }
    @media (max-width: 1200px) {
      html, body { background-size: 60% !important; }
    }
    @media (max-width: 768px) {
      html, body { background-size: 80% !important; }
    }
    @media (max-width: 480px) {
      html, body { background-size: 100% !important; }
    }
  `
  
  // 避免重复添加
  const existing = document.getElementById('global-background')
  if (!existing) {
    document.head.appendChild(style)
  }
})
</script>

<template>
  <div></div>
</template>
