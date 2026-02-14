<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main style="padding: 24px">
    <div>
        <h1>Home</h1>
        <RouterLink to="/login">Go to login</RouterLink>
        <RouterLink to="/dashboard">Go to dashboard</RouterLink>
    </div>
  </main>
</template>
