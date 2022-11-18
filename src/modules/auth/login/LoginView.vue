<script setup lang="ts">
import { useUserLogin } from "@/modules/auth/composables/userLogin";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import CommonButton from "@/common/components/CommonButton/CommonButton.vue";
import { Form } from "ant-design-vue";

const { userLoginLoading, loginUser } = useUserLogin();
const useForm = Form.useForm;

const rules = reactive({
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
  await validate();
  loginUser(form).then(() => {
    navigateToApp();
    clearForm();
  });
};
</script>

<template>
  <div class="login">
    <div class="login__top">
      <div class="login__heading">Войти в аккаунт</div>
      <a-form
        :model="form"
        validate-trigger="onBlur"
        layout="vertical"
        class="login__form"
        @keyup.enter="handleFormSubmission"
      >
        <a-form-item v-bind="validateInfos.email" name="email" label="Почта">
          <a-input v-model:value="form.email" />
        </a-form-item>
        <a-form-item
          v-bind="validateInfos.password"
          name="password"
          label="Пароль"
          class="login__field"
        >
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <CommonButton
          :loading="userLoginLoading"
          @click="handleFormSubmission"
          class="login__button"
        >
          Войти
        </CommonButton>
      </a-form>
    </div>
    <div class="login__bottom">
      <RouterLink to="/auth/register" class="login__link">
        У меня нет аккаунта
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 450px;
  display: flex;
  flex-direction: column;
}

.login__top {
  padding: 30px;
  background: #fff;
  border-radius: 10px;
}

.login__field {
  display: flex;
  flex-direction: column;
}

.login__heading {
  margin-bottom: 10px;
  color: var(--text-color);
  font-size: 20px;
  font-weight: 600;
}

.login__bottom {
  padding: 10px 30px;
  margin-top: 20px;
  background: #fff;
  border-radius: 10px;
}

.login__link {
  font-weight: 400;
  color: var(--primary-color);
}

.login__link:hover {
  color: var(--primary-color-light);
}

.login__button {
  margin-top: 10px;
  cursor: pointer;
  padding: 7px 30px;
  background: #fff;
  border-radius: 10px;
  color: var(--text-color);
  transition: all 0.2s linear;
}

.login__button:hover {
  background: var(--background-highlighted-color);
  color: var(--primary-color);
  transition: all 0.2s linear;
}
</style>
