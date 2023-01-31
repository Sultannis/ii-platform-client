<template>
  <div class="finished">
    <i class="bx bx-wind finished__icon" />
    <div class="finished__title">Looks like you have seen all ideas...</div>
    <div class="finished__subtitle">
      Refresh the page or go to another section
    </div>
  </div>
</template>

<style scoped>
.finished {
  margin-bottom: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #fff;

  border-radius: 10px;
}

.finished__icon {
  color: var(--primary-color);
  font-size: 25px;
}

.finished__title {
  color: var(--text-color);
  font-size: 16px;
  font-weight: 600;
}
</style>
