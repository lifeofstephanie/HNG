<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">T</span>
          </div>
          <span class="font-bold text-lg text-gray-900">TicketHub</span>
        </router-link>
        
        <div class="flex items-center gap-4">
          <router-link 
            v-if="!isAuthenticated" 
            to="/login" 
            class="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            Login
          </router-link>
          <router-link 
            v-if="!isAuthenticated" 
            to="/signup" 
            class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
          >
            Sign Up
          </router-link>
          <router-link 
            v-if="isAuthenticated" 
            to="/dashboard" 
            class="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            Dashboard
          </router-link>
          <button 
            v-if="isAuthenticated" 
            @click="logout"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isAuthenticated = computed(() => {
  return !!localStorage.getItem('currentUser')
})

const logout = () => {
  localStorage.removeItem('currentUser')
  router.push('/')
}
</script>
