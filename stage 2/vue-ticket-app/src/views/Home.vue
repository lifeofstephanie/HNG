<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <HeroSection />
    
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose TicketHub?</h2>
        <p class="text-xl text-gray-600">Streamline your workflow with powerful ticket management</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">📋</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Easy Management</h3>
          <p class="text-gray-600">Create, edit, and organize tickets with an intuitive interface</p>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">📊</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Real-time Stats</h3>
          <p class="text-gray-600">Track ticket status and progress with live statistics</p>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Secure & Private</h3>
          <p class="text-gray-600">Your data is protected with secure authentication</p>
        </div>
      </div>
    </section>
    
    <section class="bg-purple-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-lg mb-8 text-purple-100">Join thousands of teams managing tickets efficiently</p>
        <router-link 
          to="/signup" 
          class="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Create Your Account
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
</script>
