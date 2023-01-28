import type { EducationalInstitution } from "@/api/entities/EducationalInstitution";
import { fetchPersonEducationalInstitutionsRequest } from "@/api/repositories/educational-institutions.repository";
import { reactive, ref, type Ref } from "vue";
import { showServerErrorNotification } from "@/common/helpers/notifications";

let educationalInstitutions: EducationalInstitution[] = reactive([]);
let educationalInstitutionsLoading: Ref<Boolean> = ref(false);

const startEducationalInstitutionsLoading = () => {
    educationalInstitutionsLoading.value = true;
  };
  const finishEducationalInstitutionsLoading = () => {
    educationalInstitutionsLoading.value = false;
  };
  
  const clearEducationalInstitutionsArray = () => {
    educationalInstitutions.length = 0;
  };
  
  const fetchPersonEducationalInstitutions = async (personId: number) => {
    clearEducationalInstitutionsArray();
    startEducationalInstitutionsLoading();
  
    try {
      const educationalInstitutionsEntities = await fetchPersonEducationalInstitutionsRequest(
        personId
      );
  
      educationalInstitutions.push(...educationalInstitutionsEntities);
    } catch (error) {
      showServerErrorNotification();
    } finally {
      finishEducationalInstitutionsLoading();
    }
  };
  
  export const useFetchEducationalInstitution = () => ({ 
    educationalInstitutionsLoading, 
    educationalInstitutions, 
    fetchPersonEducationalInstitutions, 
  });
  