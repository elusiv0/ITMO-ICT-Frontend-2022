import { defineStore } from 'pinia'
import { userEventsApi } from '@/api'

const useUserEventsStore = defineStore('userEvents', {
  state: () => ({
    userEvents: []
  }),

  actions: {
    async getUserEventsById(id) {
      const response = await userEventsApi.getById(id)

      return response
    },

    async addUserEvents(data) {
      const response = await userEventsApi.createUserEvent(data)

      this.userEvents = response.data

      return response
    }
  }
})

export default useUserEventsStore