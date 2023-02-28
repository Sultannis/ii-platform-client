<script setup lang="ts">
import defaultAvatar from '@/assets/images/default-avatar.png';
import { onMounted, ref } from 'vue';

onMounted(() => {
  if (!localAvatarUrl.value) {
    localAvatarUrl.value = defaultAvatar;
  }
});

const props = defineProps({
  avatarUrl: {
    type: String,
    required: false,
  },
});

const localAvatarUrl = ref(props.avatarUrl);
const handleImageLoadingError = () => {
  localAvatarUrl.value = defaultAvatar;
};
</script>

<template>
  <img
    :src="localAvatarUrl"
    class="image"
    @error="handleImageLoadingError"
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
