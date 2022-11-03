<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { customRules } from "@/common/helpers/vuelidateCustom";
import { useAdminLogin } from "../composables/useAdminLogin";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import CommonInput from "@/common/components/CommonInput/CommonInput.vue";
import CommonButton from "@/common/components/CommonButton/CommonButton.vue";

const { loginAdminLoading, loginAdmin } = useAdminLogin();

const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: {
    required: customRules.required,
    email: customRules.email,
    max: customRules.maxLength(255),
  },
  password: {
    required: customRules.required,
    min: customRules.minLength(8),
    max: customRules.maxLength(255),
  },
};

const v$ = useVuelidate(rules, form);

const router = useRouter();
const navigateToApp = () => {
  router.push({ name: "receipts" });
};

const clearForm = () => {
  form.email = "";
  form.password = "";
  setTimeout(() => v$.value.$reset(), 0);
};

const handleFormSubmission = () => {
  v$.value.$touch();

  if (!v$.value.$invalid) {
    loginAdmin(form).then(() => {
      navigateToApp();
      clearForm();
    });
  }
};
</script>

<template>
  <div class="form-container">
    <form class="form" @submit.prevent="handleFormSubmission">
      <h1 class="form__title">С возвращением</h1>
      <h3 class="form__subtitle">Войдите в аккаунт, чтобы продолжить</h3>
      <div class="form__inputs-container">
        <CommonInput
          v-model="form.email"
          :errors="v$.email.$errors"
          title="Email"
          type="text"
          placeholder="Введите вашу почту"
          class="form__input"
        />
        <CommonInput
          v-model="form.password"
          :errors="v$.password.$errors"
          title="Пароль"
          placeholder="Введите ваш пароль"
          type="password"
          class="form__input"
        />
      </div>
      <CommonButton
        :loading="loginAdminLoading"
        submit
        full-width
        content="Войти"
        class="form__button"
      />
      <h3 class="form__reset-label">
        Забыли пароль?
        <span class="form__reset-link">Восстановите его</span>
      </h3>
    </form>
  </div>
</template>

<style scoped>
@import "../styles/auth-form.css";
</style>
