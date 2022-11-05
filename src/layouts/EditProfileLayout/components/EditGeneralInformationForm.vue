<script setup lang="ts">
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import { reactive } from "vue";
import { Form } from "ant-design-vue";
import CommonButton from "@/common/components/CommonButton/CommonButton.vue";

const useForm = Form.useForm;

const rules = reactive({
  firstName: [
    { type: "firstname", message: "Name pls", trigger: "blur" },
    { required: true, message: "Поле Имя должно быть заполнено", trigger: "blur" },
    {
      max: 255,
      message: "must be lower ${max}",
      trigger: "blur"
    },
  ],
  lastName: [
    { type: "lastname", message: "LastName pls", trigger: "blur"},
    { required: true, message: "There must be lastname", trigger: "blur"},
    {
      max: 255,
      message: "must be lower ${max}",
      trigger: "blur"
    },
  ],
  nickName: [
    { type: "nickname", message: "LastName pls", trigger: "blur"},
    { required: true, message: "There must be lastname", trigger: "blur"},
    {
      max: 255,
      message: "must be lower ${max}",
      trigger: "blur"
    },
  ],
});

const form = reactive({
  firstName: "",
  lastName: "",
  nickName: "",
  birthday: "",
  city: "",
  profession: "",
  work: "",
  education: "",
  bio: "",
  telegram: "",
  linkedin: "",
});

const { resetFields, validate, validateInfos } = useForm(form, rules);


const clearForm = () => {
  form.firstName = "";
  form.lastName = "";
  form.nickName = "";
  setTimeout(() => resetFields(), 0);
};

const handleFormSubmission = async () => {
  await validate();
};
</script>

<template>
  <div class="general">
    <div class="general__title">Основная информация</div>
    <div class="general__form">
      <a-form
      :model="form"
      validate-trigger="onBlur"
      layout="vertical"
      @keyup.enter="handleFormSubmission"
      >
      <div class="general__field">
        <div class="general__label">Имя *</div>
        <a-form-item v-bind ="validateInfos.firstname" name="firstname">
          <a-input v-model:value="form.firstName" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Фамилия *</div>
        <a-form-item v-bind ="validateInfos.lastname" name="lastname">
          <a-input v-model:value="form.lastName" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Ник *</div>
        <a-form-item v-bind ="validateInfos.nickname" name="nickname">
          <a-input v-model:value="form.nickName" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Дата рождения</div>
        <a-form-item v-bind ="validateInfos.birthday" name="birthday">
          <a-input v-model:value="form.birthday" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Город</div>
        <a-form-item v-bind ="validateInfos.city" name="city">
          <a-input v-model:value="form.city" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Профессия</div>
        <a-form-item v-bind ="validateInfos.profession" name="profession">
          <a-input v-model:value="form.profession" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Место работы</div>
        <a-form-item v-bind ="validateInfos.work" name="work">
          <a-input v-model:value="form.work" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Место обучения</div>
        <a-form-item v-bind ="validateInfos.education" name="education">
          <a-input v-model:value="form.education" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Био</div>
        <a-form-item v-bind ="validateInfos.bio" name="bio">
          <a-input v-model:value="form.bio" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Telegram ник</div>
        <a-form-item v-bind ="validateInfos.telegram" name="telegram">
          <a-input v-model:value="form.telegram" />
        </a-form-item>
      </div>
      <div class="general__field">
        <div class="general__label">Ссылка на LinkedIn</div>
        <a-form-item v-bind ="validateInfos.linkedin" name="linkedin">
          <a-input v-model:value="form.linkedin" />
        </a-form-item>
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
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
}

.general__field_align-start {
  align-items: flex-start;
}

.general__label {
  min-width: 200px;
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

.ant-form-item {
  margin-bottom: 0;
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
