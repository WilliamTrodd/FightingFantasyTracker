<script setup lang="ts">
import { useStatsStore } from '@/stores/statsStore'

const props = defineProps({
  statName: { type: String, required: true },
  statValue: { type: Number, required: true },
})

const statsStore = useStatsStore()

const changeStat = (value: number) => {
  statsStore.setStat(value, props.statName.toLowerCase())
}

</script>

<template>
  <div class="border-2 border-black p-3 flex justify-between h-fit items-center">
    <h2 class="text-2xl  font-serif font-bold tracking-wider">{{ statName }}</h2>
    <div class="flex">
      <div class="flex flex-col">
        <button @click="changeStat(1)" class="w-6 h-6 bg-green-300 aspect-square">+</button>
        <button @click="changeStat(-1)" class="w-6 h-6 bg-red-300 aspect-square">-</button>
      </div>
      <p class="text-2xl font-serif font-bold tracking-wider border-2 border-black w-12 h-12 text-right p-1">{{ statValue
      }}</p>
    </div>
  </div>
</template>