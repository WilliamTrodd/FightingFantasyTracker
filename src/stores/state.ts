import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const started = ref(false)

  const setStarted = (value: boolean) => {
    started.value = value
  }

  return { started, setStarted }
})
