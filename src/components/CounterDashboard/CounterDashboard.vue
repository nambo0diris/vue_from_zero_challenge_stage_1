<script setup lang="ts">
import {ref} from 'vue'
import BaseButton from "../ui/BaseButton.vue"
import BaseInput from "../ui/BaseInput.vue"
import BaseCard from '../BaseCard/BaseCard.vue';

const name = ref<string>("");

const click = () => {
   console.log("pushed")
}
</script>


<template>
    <section> 
        <BaseCard>
            <template #title>
                <h1>Тайтл</h1>
            </template>
            <template #body>
                <div>Боди</div>
            </template>
            <template #actions>
                <BaseButton label="Button" variant="primary" :disabled="false" @click="click" />
            </template>
        </BaseCard>
        <p>{{ name }}</p>
        <BaseButton label="Button" variant="primary" :disabled="false" @click="click" />
        <BaseInput type="text" placeholder="Введите" v-model="name"/>
    </section>
</template>