<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue"

const count = ref(0)
const savedCount = localStorage.getItem('count')
if (savedCount) count.value = +savedCount
watch(count, (val) => {
    localStorage.setItem('count', String(val))
})

const setting = reactive({step: 1, min: 0, max: 13})
const status = computed(() => {
    if (count.value <= setting.min) {
        return "MIN"
    }
    if (count.value >= setting.max) {
        return "MAX"
    }
    return "OK"
})
const progress = computed(() => {
    return Math.floor(( count.value * 100) / setting.max)
})
const isEven = computed(() => {
    return count.value % 2 === 0
})
const inc = () => {
    if (count.value>=setting.max) return
    count.value+=setting.step
}
const dec = () => {
    if (count.value<=setting.min) return
    count.value-=setting.step
}

</script>


<template>
    <section>
        <div>{{ count }}</div>
        <div>{{ status }}</div>
        <div>{{ progress }}</div>
        <div>{{ isEven }}</div>
        <div>
            <button v-on:click="dec">-</button>
            <button v-on:click="inc">+</button>
        </div>
    </section>
</template>