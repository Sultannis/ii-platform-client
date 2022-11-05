import type { PersonDao } from "../dao/Person.dao";
import { mapPersonDaoToEntity } from "../mappers/user/personMapper";
import request from "../request";

export const fetchPerson = (personId: number) =>
  request.get(`/users/${personId}`).then((response) => {
    const personDao = response.data.user as PersonDao;

    return mapPersonDaoToEntity(personDao);
  });
