<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style scoped>
.tag {
  margin-bottom: 5px;
  margin-right: 5px;
  background: var(--blue-dimmed-highlight);
  padding: 5px 10px;
  color: var(--blue-highlight);
  border-radius: 10px;
}
</style>
