<script setup lang="ts">
defineProps({
  avatarUrl: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <img
    :src="avatarUrl"
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
