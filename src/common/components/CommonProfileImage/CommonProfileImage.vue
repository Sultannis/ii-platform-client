<script setup lang="ts">
const emit = defineEmits(['loadError']);

defineProps({
  avatarUrl: {
    type: String,
    required: false,
  },
});

const handleLoadError = () => {
  emit('loadError');
};
</script>

<template>
  <img
    v-if="avatarUrl"
    :src="avatarUrl"
    class="image"
    @error="handleLoadError"
  />
  <img
    v-else
    src="@/assets/images/default-avatar.png"
    class="image"
  />
</template>

<style scoped>
.image {
  margin: auto;
  margin-bottom: 10px;
  width: 260px;
  width: fit-content;
  height: 260px;

  border-radius: 50%;
}
</style>
