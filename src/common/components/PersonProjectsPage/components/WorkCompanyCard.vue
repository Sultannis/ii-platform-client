<script setup lang="ts">
import { closePersonModal, selectedPersonId } from '@/common/composables/personModalState';
import { useFetchWorkCompany } from '@/common/composables/fetchWorkCompany';
import { onUpdated } from 'vue';

onUpdated(() => {
    fetchWorkCompany(selectedPersonId.value).catch(closePersonModal)
})

const { workCompany, workCompanyFetchLoading, fetchWorkCompany} = useFetchWorkCompany();

</script>

<template>
    <div class="projects__item">
      <div class="projects__title">
        {{ workCompany.companyName }}
      </div>
      <div class="projects__description">
        {{ workCompany.description }}
      </div>
    </div>
</template>

<style scoped>
.projects__item {
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.projects__title {
  margin-bottom: 5px;
}

.projects__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}
</style>