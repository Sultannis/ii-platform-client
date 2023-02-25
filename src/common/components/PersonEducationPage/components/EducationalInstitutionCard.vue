<script setup lang="ts">
defineProps({
  institutionName: {
    type: String,
    required: true,
  },
  levelOfEducation: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="institutions">
    <div class="institutions__title">{{ institutionName }} | {{ country }}</div>
    <div class="institutions__degree">
      {{ levelOfEducation }}
    </div>
    <div class="institutions__description">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.institutions {
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.institutions__title {
  color: var(--primary-color);
  font-size: 17px;
}

.institutions__degree {
  font-size: 15px;
}

.institutions__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}
</style>
