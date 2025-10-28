<template>
  <div class="min-h-screen bg-background">
    <!-- <Navigation /> -->
    <HeroSection />

    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Why Choose TicketFlow?
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Streamline your workflow with powerful ticket management
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 rounded-lg border border-border bg-card">
          <div
            class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
          >
            <span class="text-2xl">📋</span>
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">
            Easy Management
          </h3>
          <p class="text-muted-foreground">
            Create, update, and organize tickets with an intuitive interface
          </p>
        </div>

        <div
          class="p-6 rounded-lg border border-border bg-card hover:shadow-md transition"
        >
          <div
            class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
          >
            <span class="text-2xl">📊</span>
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">
            Real-time Stats
          </h3>
          <p class="text-muted-foreground">
            Track progress with live statistics and status updates
          </p>
        </div>

        <div
          class="p-6 rounded-lg border border-border bg-card hover:shadow-md transition"
        >
          <div
            class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
          >
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">
            Secure & Private
          </h3>
          <p class="text-muted-foreground">
            Your data is protected with secure authentication
          </p>
        </div>
      </div>
    </section>

    <footer class="border-t border-border py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div class="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
        <p>&copy; 2025 TicketFlow. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
// import Navigation from "../components/Navigation.vue";
</script>
