<script setup lang="ts">
import WorkCompanyCard from "./components/WorkCompanyCard.vue";
import { useFetchWorkCompany } from "./composables/fetchWorkCompanies";
import { onBeforeMount } from "vue";
import { selectedPersonId } from "@/common/composables/personModalState";

const { fetchPersonWorkCompanies, workCompanies, workCompaniesLoading } = useFetchWorkCompany();
onBeforeMount(() => {
  fetchPersonWorkCompanies(selectedPersonId.value);
});


</script>

<template>
  <div class="projects" v-if="!workCompaniesLoading">
    <WorkCompanyCard
      v-for="workcompany in workCompanies"
      :company-name="workcompany.companyName"
      :description="workcompany.description"
    />
  </div>
  <div class="projects" v-else>
    <div class="projects__item-skeleton">
      <div class="projects__title-skeleton">
        <a-skeleton active :paragraph="{ rows: 1 } "/>
      </div>
      <div class="projects__description-skeleton">
        <a-skeleton active :paragraph="{ rows: 2 } "/>
      </div>
    </div>
    <div class="projects__item-skeleton">
      <div class="projects__title-skeleton">
        <a-skeleton active :paragraph="{ rows: 1 } "/>
      </div>
      <div class="projects__description-skeleton">
        <a-skeleton active :paragraph="{ rows: 3 } "/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}

.projects__item-skeleton {
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
