import type { EducationalInstitutionDao } from '../dao/EducationalInstitution.dao';
import type { EducationalInstitution } from '../entities/EducationalInstitution';

export const mapEducationalInstitutionDaoToEntity = (
  educationalInstitutionDao: EducationalInstitutionDao
): EducationalInstitution => ({
  id: educationalInstitutionDao.id,
  userId: educationalInstitutionDao.user_id,
  institutionName: educationalInstitutionDao.institution_name,
  description: educationalInstitutionDao.description,
  levelOfEducation: educationalInstitutionDao.level_of_education,
  country: educationalInstitutionDao.country,
  startDate: educationalInstitutionDao.start_date,
  endDate: educationalInstitutionDao.end_date,
  createdAt: educationalInstitutionDao.created_at,
  updatedAt: educationalInstitutionDao.updated_at,
  user: educationalInstitutionDao.user,
});
