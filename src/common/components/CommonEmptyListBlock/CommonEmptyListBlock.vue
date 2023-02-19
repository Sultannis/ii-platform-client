<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
  message: {
    type: String,
  },
  blockHeight: {
    type: Number,
    default: 100,
  },
});

const blockStyle = computed(() => ({
  height: `${props.blockHeight}px`,
}));
</script>
<template>
  <div
    class="empty"
    :style="blockStyle"
  >
    <div>{{ message }}</div>
  </div>
</template>

<style scoped>
.empty {
  width: 100%;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: 600;
  color: var(--primary-color);
  background-color: #fff;
}
</style>
