<script setup lang="ts">
import EditGeneralInformationForm from "./components/EditGeneralInformationForm.vue";
import EditProjectInformationForm from "./components/EditProjectInformationForm.vue";
import EditActionButtonsForm from "./components/EditActionButtonsForm.vue";
</script>

<template>
  <div class="edit-layout">
    <EditGeneralInformationForm />
  </div>
</template>

<style scoped>
.edit-layout {
  padding: 70px 0;
  margin: auto;
  width: 60%;
  max-width: 1668px;

  display: flex;
  flex-direction: column;
}
</style>
