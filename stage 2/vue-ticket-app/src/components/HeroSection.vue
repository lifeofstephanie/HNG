<template>
  <section class="relative overflow-hidden bg-white pt-20 pb-32">
    <!-- Wavy SVG Background -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M0,200 Q360,100 720,200 T1440,200 L1440,600 L0,600 Z" fill="url(#waveGradient)" />
    </svg>
    
    <!-- Decorative Circles -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
    <div class="absolute bottom-0 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Manage Your Tickets with <span class="text-purple-600">Ease</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            TicketHub is your all-in-one solution for ticket management. Create, track, and resolve tickets efficiently with our intuitive platform.
          </p>
          <div class="flex gap-4">
            <router-link 
              to="/signup" 
              class="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition"
            >
              Get Started
            </router-link>
            <router-link 
              to="/login" 
              class="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition"
            >
              Sign In
            </router-link>
          </div>
        </div>
        
        <div class="relative">
          <div class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-lg">
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-700">Open Tickets: 12</span>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-700">In Progress: 8</span>
                </div>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span class="text-sm font-medium text-gray-700">Closed: 45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
