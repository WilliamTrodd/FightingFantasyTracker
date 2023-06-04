<script setup lang="ts">
import EnemyEncounter from '@/components/EnemyEncounter.vue';


</script>

<template>
  <div class="grid grid-cols-4 grid-rows-6 w-fit gap-3 mx-auto">
    <EnemyEncounter v-for="index in 20" :key="index" />
  </div>
</template>