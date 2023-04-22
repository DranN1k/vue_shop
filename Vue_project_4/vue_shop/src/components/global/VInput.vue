<script setup>
import { defineEmits, defineProps, watch, ref } from 'vue';
const emits = defineEmits(['update:modelValue']);
const { modelValue } = defineProps({
    modelValue: String,
    placeholder: String,
})
const value = ref(modelValue);
watch(value, () => {
    emits('update:modelValue', value)
})
</script>

<template>
    <input v-model="value" type="text" class="form-control" :placeholder="placeholder">
</template>

<style scoped></style>
