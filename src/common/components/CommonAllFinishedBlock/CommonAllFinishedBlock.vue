<template>
  <div class="finished">
    <i class="bx bx-wind finished__icon" />
    <div class="finished__title">Похоже вы посмотрели все идеи...</div>
    <div class="finished__subtitle">
      Обновите страницу или перейдите в другую секцию
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
