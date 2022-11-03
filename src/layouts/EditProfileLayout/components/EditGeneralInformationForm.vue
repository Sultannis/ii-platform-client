<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <div class="general">
    <div class="general__title">Основная информация</div>
    <div class="general__form">
      <div class="general__field">
        <div class="general__label">Имя *</div>
        <a-input v-model:value="value" />
      </div>
      <div class="general__field">
        <div class="general__label">Фамилия *</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Ник *</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Дата рождения</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Город</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Профессия</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Место работы</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Место обучения</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Био</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Telegram ник</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field">
        <div class="general__label">Ссылка на LinkedIn</div>
        <a-input v-model:value="value" class="general__input" />
      </div>
      <div class="general__field general__field_align-start">
        <div class="general__label">Описание</div>
        <a-textarea rows="4" class="general__input"></a-textarea>
      </div>
      <div class="general__field general__field_align-start">
        <div class="general__label">Теги</div>
        <div class="general__tags">
          <CommonTag>иновации</CommonTag>
          <CommonTag>роботы</CommonTag>
          <CommonTag>работы</CommonTag>
          <CommonTag>обучения</CommonTag>
          <CommonTag>иновации</CommonTag>
          <CommonTag>иновации</CommonTag>
          <CommonTag>иновации</CommonTag>
          <CommonTag>иновации</CommonTag>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.general__title {
  margin-bottom: 15px;
  padding-left: 40px;
  
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color);
}

.general__form {
  margin-bottom: 40px;
  padding: 20px 40px;
  width: 100%;

  background: #fff;
  border-radius: 10px;
}

.general__field {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
}

.general__field_align-start {
  align-items: flex-start;
}

.general__label {
  min-width: 250px;
}

.general__input {
  width: 100%;
}

.general__tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.ant-input {
  border: none;
  border-radius: 10px;
  background: var(--background-color);
  outline: none;
}

</style>
