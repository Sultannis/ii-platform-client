<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { validationRules } from "@/common/validation/customValidation";
import { useUserLogin } from "@/modules/auth/composables/userLogin";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import CommonInput from "@/common/components/CommonInput/CommonInput.vue";

const { userLoginLoading, loginUser } = useUserLogin();

const validateMessages = {
  required: "${label} должен быть заполнен!",
  types: {
    email: "Почта не валидна!",
  },
  string: {
    min: "${label} должна быть длиннее ${min} символов",
    max: "${label} должен быть короче ${max} символов",
    range: "${label} должен быть длиннее ${min} и короче ${max}",
  },
};

const form = reactive({
  email: "",
  password: "",
});

const v$ = useVuelidate();

const router = useRouter();
const navigateToApp = () => {
  router.push({ path: "/feed/new" });
};

const clearForm = () => {
  form.email = "";
  form.password = "";
  setTimeout(() => v$.value.$reset(), 0);
};

const handleFormSubmission = () => {
  v$.value.$touch();
  console.log(v$.value.$invalid);

  if (!v$.value.$invalid) {
    loginUser(form).then(() => {
      navigateToApp();
      clearForm();
    });
  }
};
</script>

<template>
  <div class="login">
    <div class="login__top">
      <div class="login__heading">Войти в аккаунт</div>
      <a-form
        :model="form"
        :validate-messages="validateMessages"
        layout="vertical"
        class="login__form"
      >
        <a-form-item
          :rules="[{ type: 'email', required: true, max: 255 }]"
          name="email"
          label="Почта"
        >
          <a-input v-model:value="form.email" />
        </a-form-item>
        <a-form-item
          :rules="[{ type: 'string', required: true, min: 6, max: 255 }]"
          name="password"
          label="Пароль"
          class="login__field"
        >
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <button class="login__button" @click="handleFormSubmission">
          Войти
        </button>
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
  width: 500px;
  display: flex;
  flex-direction: column;
}

.login__top {
  padding: 20px 30px;
  background: #fff;
  border-radius: 10px;
}

.login__filed {
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
  cursor: pointer;
  padding: 7px 30px;
  background: var(--background-color);
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
