<script setup lang="ts">
import {ref} from 'vue'
import BaseButton from "../ui/BaseButton.vue"
import BaseInput from "../ui/BaseInput.vue"

const name = ref<string>("");

const click = () => {
   console.log("pushed")
}
</script>


<template>
    <section> 
        <p>{{ name }}</p>
        <BaseButton label="Button" variant="primary" :disabled="false" @click="click" />
        <BaseInput type="text" placeholder="Введите" v-model="name"/>
    </section>
</template>