<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="">
  <body class="bg-yellow-50 min-h-screen">
    <header>
      <div class="">
        <nav class="h-12 flex items-center justify-center gap-6">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/encounters">Encounters</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </body>
</template>