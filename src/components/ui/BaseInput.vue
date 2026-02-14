<script setup lang="ts">
type PropsType = {
    placeholder?: string
    modelValue: string
    type: "text" | "email" | "number"
}
type EmitType = {
    (e:'update:modelValue', value:string):void
}
const props = defineProps<PropsType>()
const emit = defineEmits<EmitType>()
const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <input 
        @input="onInput"
        :value="props.modelValue" 
        :type="props.type"
        :placeholder="props.placeholder"
    >
</template>