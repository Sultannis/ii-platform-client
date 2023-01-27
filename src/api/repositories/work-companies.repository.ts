import request from "../request";
import type { WorkCompanyDao } from "../dao/WorkCompany.dao";
import type { WorkCompany } from "../entities/WorkCompany";
import { mapWorkCompanyDaoToEntity } from "../mappers/workCompanyMapper";

export const fetchPersonWorkCompaniesRequest = (
  personId: number
): Promise<WorkCompany[]> => {
  return request
    .get("/work-companies", {
      params: {
        user_id: personId,
      },
    })
    .then((response) => {
      const workCompaniesDaos = response.data
        .work_companies as WorkCompanyDao[];

      return workCompaniesDaos.map(mapWorkCompanyDaoToEntity);
    });
};
