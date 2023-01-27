<script setup lang="ts">
import WorkCompanyCard from "./components/WorkCompanyCard.vue";
import CommonTag from "@/common/components/CommonTag/CommonTag.vue";
import {
  fetchInitialWorkCompaniesChunk,
  fetchNextWorkCompaniesChunkAndConcat,
  fetchWorkCompaniesQueryParams,
  initialChunkLoaded,
  workCompanies,
} from "@/common/components/PersonProjectsPage/composables/fetchWorkCompanies"
import { onBeforeMount, ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";
import { fetchWorkCompany } from "@/api/repositories/work-companies.repository";
import { closePersonModal, selectedPersonId } from "@/common/composables/personModalState";

const feedLoadingTrigger = ref(null);
const feedLoadingTriggerVisible = useElementVisibility(feedLoadingTrigger);

onBeforeMount(fetchInitialWorkCompaniesChunk);

watch(feedLoadingTrigger, () => {
  if (
    feedLoadingTriggerVisible.value &&
    initialChunkLoaded.value &&
    workCompanies.length < fetchWorkCompaniesQueryParams.total
  ) {
    fetchNextWorkCompaniesChunkAndConcat();
  }
});

</script>


<template>
  <div class="projects">
    <WorkCompanyCard
      v-for="workcompany in workCompanies"
      :company-name="workcompany.companyName"
      :description="workcompany.description" 
    />
  </div>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}

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

.projects__tags {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
}

.projects__link {
  text-decoration: underline;
  font-weight: 400;
  color: var(--primary-color);
}
</style>
