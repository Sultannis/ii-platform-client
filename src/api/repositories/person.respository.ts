import type { QueryParamsDto } from "../converters/query-params/QueryParams.dto";
import { mapQueryParamsForRequest } from "../converters/query-params/queryParamsRequestMapper";
import type { MetaDao } from "../dao/Meta.dao";
import type { PersonDao } from "../dao/Person.dao";
import type { Meta } from "../entities/Meta";
import type { Person } from "../entities/Person";
import { mapMetaDaoToEntity } from "../mappers/metaMapper";
import { mapPersonDaoToEntity } from "../mappers/personMapper";
import request from "../request";

export const fetchPerson = (personId: number) =>
  request.get(`/users/${personId}`).then((response) => {
    const personDao = response.data.user as PersonDao;

    return mapPersonDaoToEntity(personDao);
  });

export const fetchPeopleRequest = (
  queryParams: QueryParamsDto,
  fetchStartTimestamp: String
): Promise<[Person[], Meta]> => {
  console.log("request method started");
  return request
    .get("/users", {
      params: {
        start_timestamp: fetchStartTimestamp,
        ...mapQueryParamsForRequest(queryParams),
      },
    })
    .then((response) => {
      const peopleDao = response.data.users as PersonDao[];
      const meta = response.data.meta as MetaDao;

      return [peopleDao.map(mapPersonDaoToEntity), mapMetaDaoToEntity(meta)];
    });
};
