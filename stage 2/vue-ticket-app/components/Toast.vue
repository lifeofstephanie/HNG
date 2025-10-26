<template>
  <div :class="['toast', `toast-${type}`]">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
  type: {
    type: String,
    default: 'success',
  },
})
</script>
