<script setup lang="ts">
import EditGeneralInformationForm from "./components/EditGeneralInformationForm.vue";
import EditProjectInformationForm from "./components/EditProjectInformationForm.vue";
import EditActionButtonsForm from "./components/EditActionButtonsForm.vue";
</script>

<template>
  <div class="edit-layout">
    <button class="cancel-changes">
      <i class='bx bxs-chevron-left' ></i>
      На главную без сохранения
    </button>
    <EditGeneralInformationForm />
    <EditProjectInformationForm />
    <EditActionButtonsForm />
  </div>
</template>

<style scoped>
.edit-layout {
  padding: 50px 0;
  margin: auto;
  width: 60%;
  max-width: 1668px;

  display: flex;
  flex-direction: column;
}

.cancel-changes {
  width: 360px;
  height: 50px;
  
  margin-bottom: 40px;
  position: absolute;
  border: none;
  
  background: var(--background-color);
  color: var(--primary-color);
  cursor: pointer;
  
  font-size: 18px;
  font-weight: 600;
  transition-duration: 0.2s;
}

.cancel-changes:hover {
  transform: scale(1.01);
}

.bx {
  font-size: 30px;
  position: absolute;
  left: 0px;
}
</style>
