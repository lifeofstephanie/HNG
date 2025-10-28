<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>
      
      <form @submit.prevent="handleSignup" class="space-y-4">
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
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input 
            v-model="form.confirmPassword" 
            type="password" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            :class="{ 'border-red-500': errors.confirmPassword }"
            aria-invalid="false"
          />
          <p v-if="errors.confirmPassword" class="text-red-600 text-sm mt-1">{{ errors.confirmPassword }}</p>
        </div>
        
        <p v-if="errors.general" class="text-red-600 text-sm">{{ errors.general }}</p>
        
        <button 
          type="submit" 
          class="w-full bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
      </form>
      
      <p class="text-center text-gray-600 mt-4">
        Already have an account? 
        <router-link to="/login" class="text-purple-600 font-bold hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ email: '', password: '', confirmPassword: '' })
const errors = ref({})

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSignup = () => {
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
  
  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match'
  }
  
  if (Object.keys(errors.value).length > 0) return
  
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (users.some(u => u.email === form.value.email)) {
    errors.value.general = 'Email already registered'
    return
  }
  
  users.push({ email: form.value.email, password: form.value.password })
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('currentUser', JSON.stringify({ email: form.value.email }))
  router.push('/dashboard')
}
</script>
