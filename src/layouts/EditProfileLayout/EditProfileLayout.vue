<script setup lang="ts">
import EditGeneralInformationForm from './components/EditGeneralInformationForm.vue';
import EditProjectInformationForm from './components/EditProjectInformationForm.vue';
import EditActionButtonsForm from './components/EditActionButtonsForm.vue';
</script>

<template>
  <div class="container">
    <div class="block">
      <EditGeneralInformationForm/>
      <EditProjectInformationForm/>
      <EditActionButtonsForm/>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 60%;
  max-width: 1668px;

  display: flex;
  flex-direction: column;
}

.block {
  margin-top: 40px;
  width: 100%;
  height: 1000px;
}
</style>
