<script setup lang="ts">
import EducationalInstitutionCard from './components/EducationalInstitutionCard.vue';
import { useFetchEducationalInstitution } from './composables/fetchEducationalInstitutions';
import { onBeforeMount } from 'vue';
import { selectedPersonId } from '@/common/composables/personModalState';

const { fetchPersonEducationalInstitutions, educationalInstitutions, educationalInstitutionsLoading } = useFetchEducationalInstitution();
onBeforeMount(() => {
    fetchPersonEducationalInstitutions(selectedPersonId.value);
});

</script>

<template>
    <div class="institutions" v-if="!educationalInstitutionsLoading">
    <EducationalInstitutionCard
        v-for="educationalInstitution in educationalInstitutions"
        :institution-name="educationalInstitution.institutionName"
        :description="educationalInstitution.description"
    />
    </div>
</template>