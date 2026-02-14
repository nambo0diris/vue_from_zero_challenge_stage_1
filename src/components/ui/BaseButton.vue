<script setup lang="ts">
import { computed } from 'vue';

type PropsType = {
    label: string
    variant?: 'primary' | 'secondary'
    disabled?: boolean
}
const props = defineProps<PropsType>()
const emit = defineEmits<{ (e: 'click'): void }>()
const classes = computed(()=>[
    'btn',
    `btn--${props.variant ?? 'primary'}`,
    props.disabled && 'btn--disabled'
    
])
</script>

<template>
  <button :class="classes" @click="emit('click')">{{ props.label }}</button>
</template>

<style lang="css" scoped>
    .btn { padding: 8px 12px; border-radius: 6px; }
    .btn--primary { background: #2563eb; color: white; }
    .btn--secondary { background: #e5e7eb; color: #111827; }
    .btn--disabled { opacity: 0.5; pointer-events: none; }
</style>