import type { EducationalInstitutionDao } from "../dao/EducationalInstitution.dao";
import type { EducationalInstitution } from "../entities/EducationalInstitution";

export const mapEducationalInstitutionDaoToEntity = (educationalInstitution: EducationalInstitutionDao): EducationalInstitution => ({
    id: educationalInstitution.id,
    userId: educationalInstitution.user_id,
    institutionName: educationalInstitution.institution_name,
    description: educationalInstitution.description,
    levelOfEducation: educationalInstitution.level_of_education,
    country: educationalInstitution.country,
    startDate: educationalInstitution.start_date,
    endDate: educationalInstitution.end_date,
    createdAt: educationalInstitution.created_at,
})