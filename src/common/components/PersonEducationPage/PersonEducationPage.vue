<script setup lang="ts">
import EducationalInstitutionCard from './components/EducationalInstitutionCard.vue';
import { useFetchEducationalInstitution } from './composables/fetchEducationalInstitutions';
import { onBeforeMount } from 'vue';
import { selectedPersonId } from '@/common/composables/personModalState';
import { computed } from 'vue';
import CommonAllFinishedBlock from '../CommonAllFinishedBlock/CommonAllFinishedBlock.vue';

const {
  fetchPersonEducationalInstitutions,
  educationalInstitutions,
  educationalInstitutionsLoading,
} = useFetchEducationalInstitution();
onBeforeMount(() => {
  fetchPersonEducationalInstitutions(selectedPersonId.value);
});

const message = 'There is no education...';

const showNoEducationBlock = computed(() => {
  return educationalInstitutions.length === 0;
});
</script>

<template>
  <div class="institutions">
    <template v-if="!educationalInstitutionsLoading">
      <EducationalInstitutionCard
        v-for="educationalInstitution in educationalInstitutions"
        :institution-name="educationalInstitution.institutionName"
        :level-of-education="educationalInstitution.levelOfEducation"
        :country="educationalInstitution.country"
        :description="educationalInstitution.description"
      />
      <CommonAllFinishedBlock
        v-if="showNoEducationBlock"
        :finished-entity="message"
      />
    </template>
    <template v-else>
      <div class="institutions__item-skeleton">
        <a-skeleton
          active
          :paragraph="{ rows: 2 }"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.institutions {
  display: flex;
  flex-direction: column;
}

.institutions__item-skeleton {
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  font-weight: 600;
  cursor: default;

  border-radius: 10px;
}

.institutions__description {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 13px;
}
</style>
