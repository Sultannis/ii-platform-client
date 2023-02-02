import request from '../request';
import type { ContactListDao } from '../dao/ContactList.dao';
import { mapContactListDaoToEntity } from '../mappers/contactListMapper';
import type { ContactList } from '../entities/ContactList';

export const fetchPersonContactList = (
  personId: number
): Promise<ContactList> =>
  request
    .get('/contact-lists/one/', {
      params: {
        user_id: personId,
      },
    })
    .then((response) => {
      const contactListDao = response.data.contact_list as ContactListDao;

      return mapContactListDaoToEntity(contactListDao);
    });
