<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import { reactive } from "vue";
import { Form } from "ant-design-vue";

const useForm = Form.useForm;

const rules = reactive({
  firstName: [
    { required: true, message: "Имя должно быть заполнено", trigger: "blur" },
    {
      min: 2,
      max: 255,
      message: "Имя должно быть не меньше ${min} символов и не больше ${max} символов",
      trigger: "blur"
    },
  ],
  lastName: [
    { required: true, message: "Фамилия должна быть заполнена", trigger: "blur"},
    {
      min: 2,
      max: 255,
      message: "Фамилия должна быть не меньше ${min} символов и не больше ${max} символов",
      trigger: "blur"
    },
  ],
  nickname: [
    { required: true, message: "Ник должен быть заполнен", trigger: "blur"},
    {
      min:2,
      max: 255,
      message: "Ник должен быть не меньше ${min} символов и не больше ${max} символов",
      trigger: "blur"
    },
  ],
});

const form = reactive({
  firstName: "",
  lastName: "",
  nickname: "",
  birthday: "",
  city: "",
  profession: "",
  work: "",
  education: "",
  bio: "",
  telegram: "",
  linkedin: "",
  description: "",
});

const { validate, validateInfos } = useForm(form, rules);

const handleFormSubmission = () => {
  validate();
};
</script>

<template>
  <div class="general">
    <div class="general__title">Основная информация</div>
    <div class="general__form">
      <a-form
      :model="form"
      layout="vertical"
      validate-trigger="onBlur"
      >
      <a-form-item v-bind="validateInfos.firstName" name="firstName" label="Имя*">
        <a-input v-model:value="form.firstName" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.lastName" name="lastName" label="Фамилия*">
        <a-input v-model:value="form.lastName" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.nickname" name="nickname" label="Ник*">
        <a-input v-model:value="form.nickname" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.birthday" name="birthday" label="Дата рождения">
        <a-input v-model:value="form.birthday" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.city" name="city" label="Город">
        <a-input v-model:value="form.city" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.profession" name="profession" label="Профессия">
        <a-input v-model:value="form.profession" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.work" name="work" label="Место работы">
        <a-input v-model:value="form.work" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.education" name="education" label="Место обучения">
        <a-input v-model:value="form.education" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.bio" name="bio" label="Био">
        <a-input v-model:value="form.bio" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.telegram" name="telegram" label="Telegram ник">
        <a-input v-model:value="form.telegram" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.linkedin" name="linkedin" label="Ссылка на LinkedIn">
        <a-input v-model:value="form.linkedin" />
      </a-form-item>
      <a-form-item v-bind="validateInfos.description" name="description" label="Описание">
        <a-textarea v-model:value="form.nickname" rows="4"></a-textarea>
      </a-form-item>
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
      </a-form>
    </div>
  </div>
</template>
       
<style scoped>

.general__title {
  margin-top: 80px;
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
  margin-bottom: 24px;
  width: 100%;
  align-items: center;
}

.general__field_align-start {
  align-items: flex-start;
}

.general__label {
  display: block;
  min-width: 200px;
  margin-bottom: 8px;
}

.general__tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.ant-input {
  border: 1px solid var(--text-color-grey);
  border-radius: 10px;
  outline: none;
  width: 100%;
}

@media screen and (max-width: 768px) {
.general {
  padding: none;
}
.general__form {
  padding: 20px 20px;
  margin-bottom: 20px;
}

.general__title {
  margin-top: 60px;
  margin-bottom: 5px;
  padding: 0;
  text-align: center;
}

.general__field {
  align-items: flex-start;
  flex-direction: column;
}
.general__label {
  margin-bottom: 10px;
}

}
</style>

