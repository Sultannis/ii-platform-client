<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
</script>

<template>
  <div class="common">
    <div class="common__item">
      <div class="common__title">Профессия</div>
      <div class="common__occupation">UI-UX дизайнер</div>
    </div>
    <div class="common__item">
      <div class="common__title">Теги</div>
      <div class="common__tags">
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
      </div>
    </div>
    <div class="common__item">
      <div class="common__title">Контакты</div>
      <div class="common__contact">
        <i class="bx bxl-telegram common__icon" /> Sultan_Mus
      </div>
      <div class="common__contact">
        <i class="bx bxl-linkedin-square common__icon" />
        https://www.linkedin.com/in/sultan-mustafin-44382b1a6/
      </div>
      <div class="common__contact">
        <i class="bx bxs-envelope common__icon" /> sultan.fb29@gmail.com
      </div>
    </div>
  </div>
</template>

<style scoped>
.common {
  height: 100%;
  padding: 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.common__item {
  margin-bottom: 10px;
}

.common__occupation {
  color: var(--primary-color);
}

.common__tags {
  font-weight: 400;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
}

.common__title {
  margin-bottom: 3px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--text-color-grey);
  font-size: 11px;
}

.common__contact {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}

.common__icon {
  margin-right: 8px;
  font-size: 20px;
  color: var(--primary-color);
}
</style>
