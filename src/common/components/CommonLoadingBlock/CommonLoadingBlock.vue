<template>
  <div class="loading">
    <div class="loading__indicator"></div>
  </div>
</template>

<style scoped>
.loading {
  height: 80px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.loading__indicator {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}

.loading__indicator::after,
.loading__indicator::before {
  content: "";
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-color);
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}

.loading__indicator::after {
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
