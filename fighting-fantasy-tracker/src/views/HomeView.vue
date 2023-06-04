<script setup lang="ts">
import { ref } from 'vue';
import StatBox from '@/components/StatBox.vue';
import { useStatsStore } from '@/stores/statsStore';
import { useItemsStore } from '@/stores/itemsStore';
import { useStateStore } from '@/stores/state';
import ProvisionBox from '@/components/ProvisionBox.vue';
import TreasureBox from '@/components/TreasureBox.vue';
import BackpackBox from '@/components/BackpackBox.vue';

const statsStore = useStatsStore();
const itemsStore = useItemsStore();
const state = useStateStore();

const newItem = ref('')
const newTreasure = ref('')
const newProvision = ref('')

const rollStats = () => {
  statsStore.initialiseSkills()
}

const startPlaythrough = () => {
  rollStats()
  state.setStarted(true)
}

</script>

<template>
  <main class="min-h-[100%]">
    <h1 class='text-6xl text-center font-serif font-bold tracking-wide'>
      Adventure Sheet
    </h1>
    <div class="">
      <div v-if="!state.started">
        <button class="border-2 border-black" @click="startPlaythrough">Start</button>
      </div>
      <div v-else class="flex flex-col gap-4">
        <div class="grid grid-cols-3 grid-rows-5 mx-auto px-1 w-fit gap-3 h-full justify-items-stretch">
          <StatBox statName="Skill" :statValue="statsStore.skill" />
          <StatBox statName="Stamina" :statValue="statsStore.stamina" />
          <StatBox statName="Luck" :statValue="statsStore.luck" />
          <BackpackBox />
          <TreasureBox />
          <ProvisionBox />
        </div>
        <button class="w-fit bg-slate-300 p-5 mx-auto">New Encounter!</button>
      </div>
    </div>
  </main>
</template>
