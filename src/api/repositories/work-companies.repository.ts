import request from "../request";
import type { WorkCompanyDao } from "../dao/WorkCompany.dao";
import type { WorkCompany } from "../entities/WorkCompany";
import type { MetaDao } from "../dao/Meta.dao";
import type { Meta } from "../entities/Meta";
import type { QueryParamsDto } from "../converters/query-params/QueryParams.dto";
import { mapQueryParamsForRequest } from "../converters/query-params/queryParamsRequestMapper";
import { mapWorkCompanyDaoToEntity } from "../mappers/workCompanyMapper";
import { mapMetaDaoToEntity } from "../mappers/metaMapper"; 

export const fetchWorkCompany = (personId: number) =>
  request.get(`/users/${personId}`).then((response) => {
    const workCompanyDao = response.data.user as WorkCompanyDao;

    return mapWorkCompanyDaoToEntity(workCompanyDao);
  });


export const fetchWorkCompaniesRequest = (
    personId: number
): Promise<[WorkCompany[], Meta]> => {
    return request
        .get("/work-companies", {
            params: {
                user_id: personId
            },
        })
        .then((response) => {
            const workCompaniesDao = response.data.workcompanies as WorkCompanyDao[];
            const meta = response.data.meta as MetaDao;

            return [workCompaniesDao.map(mapWorkCompanyDaoToEntity), mapMetaDaoToEntity(meta)]
        });
};