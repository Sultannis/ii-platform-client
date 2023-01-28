import request from "../request";
import type { ContactListDao } from "../dao/ContactList.dao";
import { mapContactListDaoToEntity } from "../mappers/contactListMapper";

export const fetchPersonContactList = (personId: number) =>
    request.get("/contact-lists/one/", {
        params: {
            user_id: personId,
        }
    }).then((response) => {
        const contactListDao = response.data.contact_list as ContactListDao;

        return mapContactListDaoToEntity(contactListDao);
    });