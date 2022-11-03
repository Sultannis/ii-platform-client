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
      </div>
      <a class="projects__link" target="_blank"> https://www.moysklad.ru/</a>
    </div>
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
      </div>
      <a class="projects__link" target="_blank"> https://www.moysklad.ru/</a>
    </div>
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
      </div>
      <a class="projects__link" target="_blank"> https://www.moysklad.ru/</a>
    </div>
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
      </div>
      <a class="projects__link" target="_blank"> https://www.moysklad.ru/</a>
    </div>
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
      </div>
      <a class="projects__link" target="_blank"> https://www.moysklad.ru/</a>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}

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
  margin-bottom: 5px;
}

.projects__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}

.projects__tags {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
}

.projects__link {
  text-decoration: underline;
  font-weight: 400;
  color: var(--primary-color);
}
</style>
