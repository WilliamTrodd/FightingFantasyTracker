<script setup lang="ts">
import { ref } from 'vue'
import { useItemsStore } from '@/stores/itemsStore'
import GoldBox from './GoldBox.vue';

const newItem = ref('')

const itemsStore = useItemsStore()

const addItem = () => {
  if (newItem.value !== '') {
    itemsStore.setBackpack(itemsStore.backpack.concat(newItem.value))
    newItem.value = ''
  }
}
const removeItem = (item: string) => {
  itemsStore.setBackpack(itemsStore.backpack.filter(i => i !== item))
}

</script>

<template>
  <div class="row-span-4 col-span-2 border-2 border-black p-3 h-full">
    <div class="flex justify-between items-center mb-2">
      <h2 class="font-serif font-bold uppercase grow text-lg text-center">Backpack </h2>
      <GoldBox />
    </div>
    <ul class="">
      <div v-if="itemsStore.backpack.length === 0" class="flex justify-between mb-2 italic font-light font-serif">
        Empty</div>
      <li v-else v-for="item in itemsStore.backpack" :key="item"
        class="flex justify-between mb-2 font-serif italic font-thin">
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