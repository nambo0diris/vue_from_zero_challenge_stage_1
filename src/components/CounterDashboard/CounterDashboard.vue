<script setup lang="ts">
import {ref} from 'vue'
import BaseButton from "../ui/BaseButton.vue"
import BaseInput from "../ui/BaseInput.vue"
import BaseCard from '../BaseCard/BaseCard.vue';

const name = ref<string>("");
const dashes = ref<string[]>([])
const click = () => {
   if (name.value) {
    dashes.value = [...dashes.value, name.value]
    name.value = ""
   }
}
</script>


<template>
    <section> 
        <div v-if="dashes.length">
            <div v-for="dash in dashes" :key="dash">
                {{ dash }}
            </div>
        </div>
        <div v-else>Пока нет бордов</div>
        <BaseCard>
            <template #title>
                <h1>Тайтл</h1>
            </template>
            <template #body>
                <div>Боди</div>
            </template>
            <template #actions>
                <BaseInput type="text" placeholder="Введите название дэшборда" v-model="name"/>
                <BaseButton label="Создать дэшборд" variant="primary" :disabled="false" @click="click" />
            </template>
        </BaseCard>
        <p>{{ name }}</p>
    </section>
</template>