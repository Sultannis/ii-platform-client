<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";

interface FormState {
  firstname: string;
  lastname: string;
  nickname: string;
  birthdaydate: string;
  city: string;
  profession: string;
  workplace: string;
  educationplace: string;
  bio: string;
  telegram: string;
  linkedin: string;
  description: string;
}

export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      firstname: "",
      lastname: "",
      nickname: "",
      birthdaydate: "",
      city: "",
      profession: "",
      workplace: "",
      educationplace: "",
      bio: "",
      telegram: "",
      linkedin: "",
      description: "",
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
  <div class="edit-form-general">Основная информация</div>
  <div class="edit-form">
      <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      >
      <div class="edit-form__field">
          <div class="edit-form-label">Имя *</div>
          <div class="edit-form-input">
              <a-form-item
              label="Firstname"
              name="firstname"
              :rules="[{ required: true, message: 'Please input your first name!' }]"
              >
                <a-input v-model:value="formState.firstname" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Фамилия *</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
                :rules="[{ required: true, message: 'Please input your last name!' }]"
              >
                <a-input v-model:value="formState.lastname" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Ник *</div>
          <div class="edit-form-input">
              <a-form-item
                label="Nickname"
                name="nickname"
                :rules="[{ required:true, message: 'Please input your nickname!'}]"
              >
              <a-input v-model:value="formState.nickname" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Дата рождения</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.birthdaydate" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Город</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.city" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Профессия</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.profession" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Место работы</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.workplace" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Место обучения</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.educationplace" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Био</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.bio" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Telegram ник</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.telegram" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field">
          <div class="edit-form-label">Ссылка на LinkedIn</div>
          <div class="edit-form-input">
              <a-form-item
                label="Lastname"
                name="lastname"
              >
                <a-input v-model:value="formState.linkedin" />
              </a-form-item>
          </div>
      </div>
      <div class="edit-form__field" style="align-items:flex-start">
          <div class="edit-form-label">Описание</div>
          <div class="edit-form-input">
              <textarea placeholder="Basic usage" rows="4" class="ant-input" style="height: 40px;"></textarea>
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
</template>

<style>

.edit-form {
  width: 100%;
  background: #ffffff;

  margin-bottom: 40px;
  padding: 40px 200px 40px 50px;

  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  position: relative;
}

.edit-form-general {
  margin-bottom: 20px;
  margin-left: 40px;
  font-weight: 600;
  font-size: 23px;
}

.edit-form-label {
  font-size: 18px;
  font-weight: 400;
  width: 350px;
  color: var(--text-color);
  margin-right: 10px;
}

.edit-form__field {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 10px;
  align-items: center;
}

.edit-form-input {
  width: 100%;
}

.edit-form-tags {
  display: flex;
  flex-wrap: wrap;
}

input[type=text] {
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  background-color: var(--background-color);
  border: none;
  outline: none;
  color: var(--text-color);
}

input[type=text]:focus {
  border: none;
  outline: none;
}

.ant-input {
  background-color: var(--background-color);
  font-weight: 600;
  border-radius: 10px;
  color: var(--text-color);
  border: none;
  outline: none;
}

.ant-input:hover {
  outline: none;
}

</style>
