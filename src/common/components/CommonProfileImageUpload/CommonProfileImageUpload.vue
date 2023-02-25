<script setup lang="ts">
import { reactive, ref } from 'vue';

defineProps({
  avatarUrl: {
    type: String,
    required: false,
  },
});

const fileList = reactive(['']);
const imageUrl = ref('/url');
const loading = ref(false);

const beforeUpload = () => {
  console.log('Upload');
};
const handleChange = () => {
  console.log('Change');
};
</script>

<template>
  <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    class="uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img
      v-if="imageUrl"
      :src="avatarUrl"
      alt="avatar"
      class="uploader__image"
    />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload image</div>
    </div>
  </a-upload>
</template>

<style>
.uploader {
  width: 260px !important;
  width: fit-content;
}

.uploader__image {
  height: 100%;
  object-fit: cover;
}

.ant-upload {
  margin: auto;
  overflow: hidden !important;
  width: 260px !important;
  height: 260px !important;

  border-radius: 50% !important;
}

.ant-upload.ant-upload-select-picture-card:hover {
  border-color: var(--primary-color) !important;
}
</style>
