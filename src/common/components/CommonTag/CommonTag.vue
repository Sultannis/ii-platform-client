<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style scoped>
.tag {
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 0 15px;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 10px;
}
</style>
