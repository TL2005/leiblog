<template>
  <div class="not-found">
    <img class="not-found__image" :src="svgSrc" alt="404 Not Found" />
    <p class="not-found__text">抱歉，未找到该页面</p>
    <a class="not-found__link" href="/">返回首页</a>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
const svgSrc = withBase('/not-found.svg')
</script>

<style scoped>

</style>