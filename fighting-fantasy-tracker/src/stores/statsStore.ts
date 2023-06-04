import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStatsStore = defineStore('stats', () => {
  const skill = ref(0)
  const stamina = ref(0)
  const luck = ref(0)

  const initialiseSkills = () => {
    skill.value = Math.floor(Math.random() * 6) + 6
    stamina.value = Math.floor(Math.random() * 6) + 12
    luck.value = Math.floor(Math.random() * 6) + 6
  }

  const setStat = (value: number, stat: string) => {
    switch (stat) {
      case 'skill':
        skill.value += value
        break
      case 'stamina':
        stamina.value += value
        break
      case 'luck':
        luck.value += value
        break
      default:
        console.log('Invalid stat')
        break
    }
  }

  return { skill, stamina, luck, setStat, initialiseSkills }
})
