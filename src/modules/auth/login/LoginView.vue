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
  <a-form ref="formRef" name="custom-validation" :model="form" :rules="rules">
    <a-form-item has-feedback name="email">
      <a-input v-model:value="form.email" type="email" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback name="password">
      <a-input
        v-model:value="form.password"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
