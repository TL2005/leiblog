<template>
  <div class="not-found-page" :style="{ backgroundImage: `url(${bgUrl})` }">
    <div class="actions">
      <button @click="goHome" class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        返回首页
      </button>
      <button @click="goBack" class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        返回上页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, withBase } from 'vitepress'
import { computed } from 'vue'

const router = useRouter()
const bgUrl = computed(() => withBase('https://pic.imgdd.cc/item/68fc5bcb45440b5a919bea16.png'))

const goHome = () => {
  router.go('/')
}

const goBack = () => {
  if (typeof window !== 'undefined') {
    window.history.back()
  }
}
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .not-found-page {
    background-size: 60%;
  }
}

@media (max-width: 768px) {
  .not-found-page {
    background-size: 80%;
  }
  
  .actions {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .not-found-page {
    background-size: 100%;
  }
}
</style>
