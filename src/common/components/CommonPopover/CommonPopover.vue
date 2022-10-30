<script setup lang="ts">
import CommonInput from "@/common/components/CommonInput/CommonInput.vue";
import { reactive } from "vue";

const form = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="popover">
    <div class="popover__arrow" />
    <form class="popover__form popover__login">
      <h5 class="popover__heading">Войти в аккаунт</h5>
      <CommonInput v-model="form.email" />
      <CommonInput v-model="form.password" />
    </form>
  </div>
</template>

<style scoped>
.popover {
  color: var(--text-dark-color);
  padding: 20px;
  width: 250px;
  height: 200px;
  background: #ffffff;

  border-radius: 10px;

  z-index: 1;
  position: absolute;
  top: 35px;
  right: -10px;
}

.popover__arrow {
  width: 0;
  height: 0;

  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #ffffff;

  position: absolute;
  top: -8px;
  right: 15px;
}
</style>
