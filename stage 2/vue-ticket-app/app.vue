<template>
  <div class="min-h-screen bg-background text-foreground">
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  const session = localStorage.getItem('ticketapp_session')
  const currentPath = router.currentRoute.value.path
  
  // Redirect to login if accessing protected routes without session
  if (!session && ['/dashboard', '/tickets'].includes(currentPath)) {
    router.push('/auth/login')
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
