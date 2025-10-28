<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button 
          @click="showCreateDialog = true"
          class="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
        >
          New Ticket
        </button>
      </div>
      
      <!-- Stats -->
      <div class="grid md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p class="text-gray-600 text-sm font-medium">Total Tickets</p>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ tickets.length }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p class="text-gray-600 text-sm font-medium">Open</p>
          <p class="text-3xl font-bold text-green-600 mt-2">{{ openCount }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p class="text-gray-600 text-sm font-medium">In Progress</p>
          <p class="text-3xl font-bold text-amber-600 mt-2">{{ inProgressCount }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p class="text-gray-600 text-sm font-medium">Closed</p>
          <p class="text-3xl font-bold text-gray-600 mt-2">{{ closedCount }}</p>
        </div>
      </div>
      
      <!-- Tickets List -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Priority</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id" class="border-b border-gray-200 hover:bg-gray-50">
              <td class="px-6 py-4 text-sm text-gray-900">{{ ticket.title }}</td>
              <td class="px-6 py-4 text-sm">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="getStatusClass(ticket.status)"
                >
                  {{ ticket.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="getPriorityClass(ticket.priority)"
                >
                  {{ ticket.priority }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm flex gap-2">
                <button 
                  @click="editTicket(ticket)"
                  class="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Edit
                </button>
                <button 
                  @click="deleteTicket(ticket.id)"
                  class="text-red-600 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Create Ticket Dialog -->
    <CreateTicketDialog 
      v-if="showCreateDialog"
      @close="showCreateDialog = false"
      @save="addTicket"
    />
    
    <!-- Edit Ticket Dialog -->
    <EditTicketDialog 
      v-if="showEditDialog && editingTicket"
      :ticket="editingTicket"
      @close="showEditDialog = false"
      @save="updateTicket"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CreateTicketDialog from '../components/CreateTicketDialog.vue'
import EditTicketDialog from '../components/EditTicketDialog.vue'

const router = useRouter()
const tickets = ref([])
const showCreateDialog = ref(false)
const showEditDialog = ref(false)
const editingTicket = ref(null)

const openCount = computed(() => tickets.value.filter(t => t.status === 'Open').length)
const inProgressCount = computed(() => tickets.value.filter(t => t.status === 'In Progress').length)
const closedCount = computed(() => tickets.value.filter(t => t.status === 'Closed').length)

const loadTickets = () => {
  const stored = localStorage.getItem('tickets')
  tickets.value = stored ? JSON.parse(stored) : []
}

const saveTickets = () => {
  localStorage.setItem('tickets', JSON.stringify(tickets.value))
}

const addTicket = (ticket) => {
  ticket.id = Date.now()
  tickets.value.push(ticket)
  saveTickets()
  showCreateDialog.value = false
}

const editTicket = (ticket) => {
  editingTicket.value = { ...ticket }
  showEditDialog.value = true
}

const updateTicket = (updatedTicket) => {
  const index = tickets.value.findIndex(t => t.id === updatedTicket.id)
  if (index !== -1) {
    tickets.value[index] = updatedTicket
    saveTickets()
  }
  showEditDialog.value = false
}

const deleteTicket = (id) => {
  tickets.value = tickets.value.filter(t => t.id !== id)
  saveTickets()
}

const getStatusClass = (status) => {
  const classes = {
    'Open': 'bg-green-100 text-green-800',
    'In Progress': 'bg-amber-100 text-amber-800',
    'Closed': 'bg-gray-100 text-gray-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const getPriorityClass = (priority) => {
  const classes = {
    'Low': 'bg-blue-100 text-blue-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'High': 'bg-red-100 text-red-800'
  }
  return classes[priority] || 'bg-gray-100 text-gray-800'
}

onMounted(() => {
  const currentUser = localStorage.getItem('currentUser')
  if (!currentUser) {
    router.push('/login')
    return
  }
  loadTickets()
})
</script>
