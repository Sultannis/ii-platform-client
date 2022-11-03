<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
</script>

<template>
  <div class="projects">
    <div class="projects__item">
      <div class="projects__title">
        CRM система для малого и среднего бизнеса
      </div>
      <div class="projects__description">
        Разработал гибкую CRM систему с использованием Vue js и Nest js которой
        пользуются 2400 пользователей ежедневно.
      </div>
      <div class="projects__tags">
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
        <CommonTag> роботы </CommonTag>
      </div>
      <a class="projects__link"> https://www.moysklad.ru/</a>
    </div>
  </div>
</template>

<style scoped>
.projects {
  height: 100%;
  padding: 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}
</style>
