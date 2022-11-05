<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import { ref } from "vue";

const value = ref("");
</script>

<template>
    <div class="project">
        <div class="project__title">Проекты</div>
        <div class="project__form">
            <div class="project__field">
                <div class="project__label">Заголовок</div>
                <a-input v-model:value="value" class="project__input" />
            </div>
            <div class="project__field project__field_align-start">
                <div class="project__label">Описание *</div>
                <a-textarea rows="4" class="project__input"></a-textarea>
            </div>
            <div class="project__field">
                <div class="project__label">Ссылка</div>
                <a-input v-model:value="value" class="project__input" />
            </div>
            <div class="project__field project__field_align-start">
                <div class="project__label">Теги</div>
                <div class="project__tags">
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
            <button class="project__delete">
              <i class='bx bx-trash'></i>
            </button>
        </div>
        <button class="project__add">
            <i class='bx bx-plus'></i>
            Добавить проект
        </button>
    </div>
</template>

<style scoped>

.project__title{
    margin-bottom: 15px;
    padding-left: 40px;
    
    font-weight: 600;
    font-size: 20px;
    color: var(--text-color);
}

.project__form {
    margin-bottom: 20px;
    padding: 20px 40px;
    width: 100%;
    position: relative;

    background: #ffffff;
    border-radius: 10px;    
}

.project__field {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
}

.project__field_align-start {
  align-items: flex-start;
}

.project__label {
  min-width: 250px;
}

.project__input {
  width: 100%;
}

.project__tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.ant-input {
  border: none;
  border-radius: 10px;
  background: var(--background-color);
}

.project__add {
    width: 260px;
    height: 40px;
    margin-left: 40px;
    margin-bottom: 40px;
    
    border: none;
    border-radius: 10px;

    background: #ffffff;
    color: var(--primary-color);

    font-size: 18px;
    cursor: pointer;
    transition-duration: 0.2s;
}

.project__add:hover {
  background: #4338CA21;
}

.bx {
  font-size: 18px;
}

.project__delete {
  width: 30px;
  height: 30px;
  
  position: absolute;
  bottom: 10px;
  right: 10px;

  border: none;
  background: #ffffff;
  color: var(--text-color);
  cursor: pointer;
}
</style>