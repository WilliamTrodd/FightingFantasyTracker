import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', () => {
  const backpack = ref<string[]>(['Sword', 'Leather Armour'])
  const gold = ref(0)
  const treasure = ref<string[]>([])
  const provisions = ref<string[]>([]) //make this into a special provisions object?

  const setBackpack = (value: string[]) => {
    backpack.value = value
  }
  const setGold = (value: number) => {
    gold.value = value
  }
  const setTreasure = (value: string[]) => {
    treasure.value = value
  }
  const setProvisions = (value: string[]) => {
    provisions.value = value
  }

  return {
    backpack,
    gold,
    treasure,
    provisions,
    setBackpack,
    setGold,
    setTreasure,
    setProvisions
  }
})
