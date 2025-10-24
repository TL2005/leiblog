<template>
  <div ref="walineRef" class="waline-container"></div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'
import { init } from '@waline/client'
import '@waline/client/style'

const props = defineProps({
  serverURL: {
    type: String,
    required: true
  },
  path: {
    type: String,
    default: ''
  },
  lang: {
    type: String,
    default: 'zh-CN'
  }
})

const walineRef = ref()
const route = useRoute()
const { isDark } = useData()
let walineInstance = null

const initWaline = async () => {
  if (!walineRef.value) return
  
  // 销毁之前的实例
  if (walineInstance) {
    walineInstance.destroy()
    walineInstance = null
  }
  
  await nextTick()
  
  walineInstance = init({
    el: walineRef.value,
    serverURL: props.serverURL,
    path: props.path || route.path,
    lang: props.lang,
    meta: ['nick', 'mail', 'link'],
    requiredMeta: ['nick'],
    pageSize: 10,
    copyright: false,
    // 同步 VitePress 深色主题
    dark: isDark.value
  })
}

onMounted(() => {
  initWaline()
})

// 监听路由变化，重新初始化评论
watch(() => route.path, () => {
  initWaline()
}, { flush: 'post' })

// 监听 serverURL 变化
watch(() => props.serverURL, () => {
  initWaline()
})

// 监听主题切换，更新 Waline 暗色模式
watch(() => isDark.value, (val) => {
  if (walineInstance) {
    try {
      walineInstance.update({ dark: val })
    } catch (e) {
      // 某些版本不支持 update，回退为重新初始化
      initWaline()
    }
  }
})
</script>

<style scoped>
.waline-container {
  margin-top: 2rem;
  padding: 1rem 0;
}
</style>