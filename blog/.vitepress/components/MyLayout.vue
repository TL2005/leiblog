<!-- .vitepress/components/MyLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import NotFound from '../components/NotFound.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <!-- 传递所有插槽内容 -->
    <template #nav-bar-content-after>
      <slot name="nav-bar-content-after" />
    </template>
    <template #nav-screen-content-after>
      <slot name="nav-screen-content-after" />
    </template>
    <template #doc-footer-before>
      <slot name="doc-footer-before" />
    </template>
    <template #doc-after>
      <slot name="doc-after" />
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </DefaultTheme.Layout>
</template>