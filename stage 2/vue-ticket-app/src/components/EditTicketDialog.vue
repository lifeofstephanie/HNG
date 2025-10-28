<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Edit Ticket</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input 
            v-model="form.title" 
            type="text" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            :class="{ 'border-red-500': errors.title }"
          />
          <p v-if="errors.title" class="text-red-600 text-sm mt-1">{{ errors.title }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea 
            v-model="form.description" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows="4"
            :class="{ 'border-red-500': errors.description }"
          ></textarea>
          <p v-if="errors.description" class="text-red-600 text-sm mt-1">{{ errors.description }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select 
            v-model="form.status" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Priority</label>
          <select 
            v-model="form.priority" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        
        <div class="flex gap-4 pt-4">
          <button 
            type="submit" 
            class="flex-1 bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700"
          >
            Save
          </button>
          <button 
            type="button" 
            @click="$emit('close')"
            class="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg font-bold hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  ticket: Object
})

const form = ref({ ...props.ticket })
const errors = ref({})

const emit = defineEmits(['close', 'save'])

watch(() => props.ticket, (newTicket) => {
  form.value = { ...newTicket }
}, { deep: true })

const handleSubmit = () => {
  errors.value = {}
  
  if (!form.value.title.trim()) {
    errors.value.title = 'Title is required'
  }
  
  if (!form.value.description.trim()) {
    errors.value.description = 'Description is required'
  }
  
  if (Object.keys(errors.value).length > 0) return
  
  emit('save', { ...form.value })
}
</script>
