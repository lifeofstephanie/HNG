<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            :class="{ 'border-red-500': errors.email }"
            aria-invalid="false"
          />
          <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            v-model="form.password" 
            type="password" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            :class="{ 'border-red-500': errors.password }"
            aria-invalid="false"
          />
          <p v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password }}</p>
        </div>
        
        <p v-if="errors.general" class="text-red-600 text-sm">{{ errors.general }}</p>
        
        <button 
          type="submit" 
          class="w-full bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
      
      <p class="text-center text-gray-600 mt-4">
        Don't have an account? 
        <router-link to="/signup" class="text-purple-600 font-bold hover:underline">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ email: '', password: '' })
const errors = ref({})

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleLogin = () => {
  errors.value = {}
  
  if (!form.value.email) {
    errors.value.email = 'Email is required'
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }
  
  if (!form.value.password) {
    errors.value.password = 'Password is required'
  } else if (form.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
  }
  
  if (Object.keys(errors.value).length > 0) return
  
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find(u => u.email === form.value.email && u.password === form.value.password)
  
  if (!user) {
    errors.value.general = 'Invalid email or password'
    return
  }
  
  localStorage.setItem('currentUser', JSON.stringify({ email: user.email }))
  router.push('/dashboard')
}
</script>
