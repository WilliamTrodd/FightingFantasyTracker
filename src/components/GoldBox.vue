<script setup lang="ts">
import { useItemsStore } from '@/stores/itemsStore'
const itemsStore = useItemsStore()


</script>

<template>
  <div class="border-2 border-black p-3 flex w-64">
    <div class="grid grid-rows-2 grid-cols-3">
      <h2 class="font-serif font-bold uppercase row-span-2 self-center">Gold Pieces:</h2>
      <input v-model="itemsStore.gold" type="number"
        class="outline-none bg-yellow-500 w-full p-2 col-span-2 text-right" />
      <button @click="() => itemsStore.setGold(itemsStore.gold + 1)" class="bg-green-300 ">+</button>
      <button @click="() => itemsStore.setGold(itemsStore.gold - 1)" class="bg-red-300">-</button>
    </div>
  </div>
</template>