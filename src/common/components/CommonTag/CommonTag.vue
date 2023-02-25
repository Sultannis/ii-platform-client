<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="tag"
    v-if="tag"
  >
    {{ tag }}
  </div>
</template>

<style scoped>
.tag {
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 0 25px;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 10px;
}
.empty {
  font-size: 10;
  color: var(--primary-color);
}
</style>
