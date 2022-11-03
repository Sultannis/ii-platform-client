<script lang="ts">
import { defineComponent, reactive } from "vue";
import CommonTag from "@/common/components/CommonTag/CommonTag.vue"
import type { message } from "ant-design-vue";

interface FormState {
    title: string,
    description: string,
    link: string,
}

export default defineComponent({
    setup() {
        const formState = reactive<FormState>({
            title:"",
            description:"",
            link:"",
        });
        const onFinish = (values: any) => {
            console.log("Success:", values);
        };
        const onFinishFailed = (errorInfo: any) => {
            console.log("Failed:", errorInfo);
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },
    components: { CommonTag }    
});
</script>

<template>
    <div class="edit-form-project">Проекты</div>
    <div class="edit-form">
        <button class="delete-project">
            <i class='bx bx-trash' ></i>
        </button>
        <a-form
        :model="formState"
        name="basic"
        :label-col="{ span:8 }"
        :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      >
      <div class="edit-form__field">
        <div class="edit-form-label">Заголовок</div>
        <div class="edit-form-input">
            <a-form-item
            label="Title"
            name="title"
            :rules="[{ required:true, message: 'Please input your title'}]"
            >
            <a-input v-model:value="formState.title" />
        </a-form-item>
        </div>
    </div>
    <div class="edit-form__field" style="align-items:flex-start">
          <div class="edit-form-label">Описание</div>
          <div class="edit-form-input">
              <textarea placeholder="Basic usage" rows="4" class="ant-input" style="height: 40px;"></textarea>
          </div>
      </div>
    <div class="edit-form__field">
        <div class="edit-form-label">Ссылка</div>
        <div class="edit-form-input">
            <a-form-item
            label="Link"
            name="link"
            >
            <a-input v-model:value="formState.link" />
        </a-form-item>
        </div>
    </div>
    <div class="edit-form__field" style="align-items:flex-start">
          <div class="edit-form-label">Теги</div>
          <div class="edit-form-tags">
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
        </a-form>
    </div>
    <button class="add-project">
        <i class='bx bx-plus'></i>
        Добавить проект
    </button>
</template>

<style>
.edit-form-project{
    font-size: 23px;
    font-weight: 600;

    margin-bottom: 20px;
    margin-left: 40px;
}

.add-project {
    border: none;
    border-radius: 10px;
    
    margin-bottom: 100px;
    margin-left: 40px;

    width: 300px;
    height: 50px;
    background-color: #4338CA21;

    font-size: 20px;
    font-weight: 400;

    color: var(--primary-color);
    position: relative;
    cursor: pointer;
}

.delete-project {
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 30px;
    top: 20px;
    font-size: 20px;
    border: none;
    background-color: #ffffff;
    color: var(--text-color-light);
    cursor: pointer;
}
</style>