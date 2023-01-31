<script setup lang="ts">

defineProps({
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="works__item">
    <div class="works__title">
      {{ companyName }}
    </div>
    <div class="works__position">
      {{ position }}
    </div>
    <div class="works__description">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.works__item {
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.works__title {
  color: var(--primary-color);
  font-size: 17px;
}

.works__position {
  font-size: 15px;
}
.works__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}
</style>
