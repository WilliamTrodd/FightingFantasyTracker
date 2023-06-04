<script setup lang="ts">
import { ref } from 'vue'
import { useItemsStore } from '@/stores/itemsStore'

const newItem = ref('')
const itemsStore = useItemsStore()

const addItem = () => {
  if (newItem.value !== '') {
    itemsStore.setTreasure(itemsStore.treasure.concat(newItem.value))
    newItem.value = ''
  }
}
// need to refactor so items have an id number so only 1 is removed if there are duplicate names
const removeItem = (item: string) => {
  itemsStore.setTreasure(itemsStore.treasure.filter(i => i !== item))
}
</script>

<template>
  <div class="row-span-2 border-2 border-black p-3">
    <h2 class="font-serif font-bold uppercase mb-2">Treasure: </h2>
    <ul class="">
      <div v-if="itemsStore.treasure.length === 0" class="flex justify-between mb-2 italic font-light font-serif">
        Empty</div>

      <li v-else v-for="item in itemsStore.treasure" :key="item"
        class="flex justify-between mb-2 italic font-light font-serif">
        <span>{{ item }}</span>
        <button class="bg-red-300 w-6 h-6" @click="removeItem(item)">-</button>
      </li>
    </ul>
    <div class="flex">
      <input v-model="newItem" type="text" class="outline-none bg-yellow-500 w-full p-2 " />
      <button class="w-12 h-10 bg-green-300 aspect-square" @click="addItem">+</button>
    </div>
  </div>
</template>