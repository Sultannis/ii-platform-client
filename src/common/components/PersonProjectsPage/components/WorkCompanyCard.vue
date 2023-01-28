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
    required: true,
  },
});

</script>

<template>
  <div class="projects__item">
    <div class="projects__title">
      {{ companyName }}
    </div>
    <div class="projects__position">
      {{ position }}
    </div>
    <div class="projects__description">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.projects__item {
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.projects__title {
  color: var(--primary-color);
  font-size: 17px;
}

.projects__position {
  font-size: 15px;
}
.projects__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}
</style>
