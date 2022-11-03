<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { validationRules } from "@/common/validation/customValidation";
import { useUserLogin } from "@/modules/auth/composables/userLogin";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import CommonInput from "@/common/components/CommonInput/CommonInput.vue";

const { userLoginLoading, loginUser } = useUserLogin();

const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: {
    required: true,
    email: true,
    max: 255,
  },
  password: {
    required: true,
    min: 8,
    max: 255,
  },
};

const v$ = useVuelidate(rules, form);

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
  height: 250px;
  background: #fff;
  border-radius: 10px;
}

.login__heading {
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
</style>
