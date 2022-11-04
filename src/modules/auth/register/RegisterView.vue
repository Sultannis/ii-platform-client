<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { useUserLogin } from "@/modules/auth/composables/userLogin";
import { reactive } from "vue";
import { useRouter } from "vue-router";

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
  <div class="register">
    <div class="register__top">
      <div class="register__heading">Создать аккаунт</div>
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
  height: 350px;
  background: #fff;
  border-radius: 10px;
}

.register__heading {
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
</style>
