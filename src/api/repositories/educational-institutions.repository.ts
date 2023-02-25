import request from '../request';
import type { EducationalInstitutionDao } from '../dao/EducationalInstitution.dao';
import type { EducationalInstitution } from '../entities/EducationalInstitution';
import { mapEducationalInstitutionDaoToEntity } from '../mappers/educationalInstitutionMapper';

export const fetchPersonEducationalInstitutionsRequest = (
  personId: number
): Promise<EducationalInstitution[]> => {
  return request
    .get('/educational-institutions', {
      params: {
        user_id: personId,
      },
    })
    .then((response) => {
      const educationalInstitutionDaos = response.data
        .educational_institutions as EducationalInstitutionDao[];

      return educationalInstitutionDaos.map(
        mapEducationalInstitutionDaoToEntity
      );
    });
};
