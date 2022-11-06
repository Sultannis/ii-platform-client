<script setup lang="ts">
import EditGeneralInformationForm from "./components/EditGeneralInformationForm.vue";
import EditProjectInformationForm from "./components/EditProjectInformationForm.vue";
import EditActionButtonsForm from "./components/EditActionButtonsForm.vue";
</script>

<template>
  <div class="edit-layout">
    <RouterLink to="/feed/new" class="cancel-changes">
      <i class="bx bxs-chevron-left" />
      На главную без сохранения
    </RouterLink>
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
  width: 560px;
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

@media screen and (max-width: 992px) {
  .edit-layout {
    width: 90%;
  }
}

@media screen and (max-width: 768px) {
  .edit-layout {
    padding: 20px 0;
  }

  .cancel-changes {
    margin-bottom: 0;
  }
}
</style>
