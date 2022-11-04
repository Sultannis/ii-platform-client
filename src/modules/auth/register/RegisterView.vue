<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Form } from "ant-design-vue";
import { useUserRegister } from "../composables/userRegister";

const { userRegisterLoading, registerUser } = useUserRegister();

const useForm = Form.useForm;

const rules = reactive({
  firstName: [
    { required: true, message: "Имя должно быть заполнено", trigger: "blur" },
    {
      max: 255,
      message: "Имя должно быть короче ${max} символов",
      trigger: "blur",
    },
  ],
  lastName: [
    { required: true, message: "Имя должно быть заполнено", trigger: "blur" },
    {
      max: 255,
      message: "Имя должно быть короче ${max} символов",
      trigger: "blur",
    },
  ],
  email: [
    { type: "email", message: "Почта не валидна", trigger: "blur" },
    { required: true, message: "Почта должна быть заполнена", trigger: "blur" },
    {
      max: 255,
      message: "Почта должна быть короче ${max} символов",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "Пароль должно быть заполнен", trigger: "blur" },
    {
      min: 6,
      max: 255,
      message: "Пароль должен быть длиннее ${min} и короче ${max}",
      trigger: "blur",
    },
  ],
});

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const { resetFields, validate, validateInfos } = useForm(form, rules);

const router = useRouter();
const navigateToApp = () => {
  router.push({ path: "/feed/new" });
};

const clearForm = () => {
  form.email = "";
  form.password = "";
  setTimeout(() => resetFields(), 0);
};

const handleFormSubmission = async () => {
  validate().then(() => {
    registerUser(form).then(() => {
      navigateToApp();
      clearForm();
    });
  });
};
</script>

<template>
  <div class="register">
    <div class="register__top">
      <div class="register__heading">Создать аккаунт</div>
      <a-form
        :model="form"
        validate-trigger="onBlur"
        layout="vertical"
        class="register__form"
      >
        <a-form-item v-bind="validateInfos.firstName" label="Имя">
          <a-input v-model:value="form.firstName" />
        </a-form-item>
        <a-form-item v-bind="validateInfos.lastName" label="Фамилия">
          <a-input v-model:value="form.lastName" />
        </a-form-item>
        <a-form-item v-bind="validateInfos.email" label="Почта">
          <a-input v-model:value="form.email" />
        </a-form-item>
        <a-form-item
          v-bind="validateInfos.password"
          label="Пароль"
          class="register__field"
        >
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <CommonButton
          :loading="userRegisterLoading"
          @click="handleFormSubmission"
          class="register__button"
        >
          Создать
        </CommonButton>
      </a-form>
    </div>
    <div class="register__bottom">
      <RouterLink to="/auth/login" class="register__link">
        У меня уже есть аккаунт
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.register {
  width: 500px;
  display: flex;
  flex-direction: column;
}

.register__top {
  padding: 20px 30px;
  background: #fff;
  border-radius: 10px;
}

.register__heading {
  margin-bottom: 10px;
  color: var(--text-color);
  font-size: 20px;
  font-weight: 600;
}

.register__bottom {
  padding: 10px 30px;
  margin-top: 20px;
  background: #fff;
  border-radius: 10px;
}
.register__link {
  font-weight: 400;
  color: var(--primary-color);
}

.register__link:hover {
  color: var(--primary-color-light);
}

.register__button {
  margin-top: 10px;
  cursor: pointer;
  padding: 7px 30px;
  background: var(--background-color);
  border-radius: 10px;
  color: var(--text-color);
  transition: all 0.2s linear;
}

.register__button:hover {
  background: var(--background-highlighted-color);
  color: var(--primary-color);
  transition: all 0.2s linear;
}
</style>
