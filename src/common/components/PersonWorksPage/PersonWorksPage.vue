<script setup lang="ts">
import WorkCompanyCard from './components/WorkCompanyCard.vue'
import { useFetchWorkCompany } from './composables/fetchWorkCompanies'
import { onBeforeMount } from 'vue'
import { selectedPersonId } from '@/common/composables/personModalState'

const { fetchPersonWorkCompanies, workCompanies, workCompaniesLoading } =
  useFetchWorkCompany()
onBeforeMount(() => {
  fetchPersonWorkCompanies(selectedPersonId.value)
})
</script>

<template>
  <div class="works">
    <template v-if="!workCompaniesLoading">
      <WorkCompanyCard
        v-for="workcompany in workCompanies"
        :company-name="workcompany.companyName"
        :position="workcompany.position"
        :description="workcompany.description"
      />
    </template>
    <template v-else>
      <div class="works__item-skeleton">
        <div class="works__title-skeleton">
          <a-skeleton
            active
            :paragraph="{ rows: 1 }"
          />
        </div>
        <div class="works__description-skeleton">
          <a-skeleton
            active
            :paragraph="{ rows: 2 }"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.works {
  display: flex;
  flex-direction: column;
}

.works__item-skeleton {
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.works__title {
  margin-bottom: 5px;
}

.works__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}
</style>
