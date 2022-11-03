<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  speed: {
    type: String as PropType<"normal" | "fast">,
    default: "normal",
  },
});
</script>

<template>
  <transition
    name="transition"
    mode="out-in"
    :leave-active-class="
      speed == 'fast'
        ? 'transition-fast-leave-active'
        : 'transition-leave-active'
    "
  >
    <slot></slot>
  </transition>
</template>

<style scoped>
.transition-enter-active,
.transition-leave-active {
  transition: all var(--normal-speed) ease-in-out;
}

.transition-fast-leave-active {
  transition: all var(--fast-speed) ease-in-out;
}

.transition-enter-from,
.transition-leave-to {
  opacity: 0;
}
</style>
