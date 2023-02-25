<script setup lang="ts">
defineProps({
  modelValue: {
    type: String || Number,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const emitInputValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :value="modelValue"
    type="text"
    class="input"
    @input="emitInputValue($event)"
  />
</template>

<style scoped>
.input {
  height: 30px;
  width: 100%;

  background-color: #ffffff;
  border: none;
  border-radius: 5px;
}
</style>
