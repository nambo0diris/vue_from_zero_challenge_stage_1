<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {ref} from 'vue'

type TTask = {
  id: number,
  name: string,
  description: string
}
const selectedTask = ref<TTask>();

const setSelectedTask = (task: TTask) => {
  selectedTask.value = task;
}

const tasks = ref<TTask[]>([]);
function addTask () {
  tasks.value.push({id: Date.now(), name: taskName.value, description:taskDescription.value})
  taskName.value = '';
  taskDescription.value = '';
}
const removeTask = (task: TTask) => {
  tasks.value = tasks.value.filter((t) => t.id!==task.id)
}
const taskName = ref('')
const taskDescription = ref('')

</script>

<template>
  <main style="padding: 24px">
    <div>
        <h1>Home</h1>
        <RouterLink to="/login">Go to login</RouterLink>
        <RouterLink to="/dashboard">Go to dashboard</RouterLink>
    </div>
    <button @click="addTask()">добавить задачу</button>
    <div v-if="!tasks.length">
      Нет задач
    </div>
    <input type="text" v-model="taskName">
    <input type="text" v-model="taskDescription">
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.id" v-on:click="setSelectedTask(task)" :style="task.id===selectedTask?.id?'background:green':'background:white'">
        <p><span>{{ task.id }}</span> <span>{{ task.name }}</span></p>
        <p>{{ task.description }}</p>
        <button v-on:click.stop="removeTask(task)">удалить</button>
      </li>
    </ul>

  </main>
</template>
