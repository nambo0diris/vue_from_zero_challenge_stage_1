<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CounterDashboard from '../../components/CounterDashboard/CounterDashboard.vue';
</script>

<template>
  <main style="padding: 24px">
    <h1>Dashboard</h1>
    <RouterLink to="/login">Go to login</RouterLink>
    <div>
      <CounterDashboard/>
    </div>
  </main>
</template>
