import type { ContactListDao } from "../dao/ContactList.dao";
import type { ContactList } from "../entities/ContactList";

export const mapContactListDaoToEntity = (contactList: ContactListDao): ContactList => ({
    id: contactList.id,
    userId: contactList.user_id,
    email: contactList.email,
    phoneNumber: contactList.phone_number,
    linkedinLink: contactList.linkedin_link,
    githubLink: contactList.github_link,
    telegramNickname: contactList.telegram_nickname,
    createdAt: contactList.created_at,
    updatedAt: contactList.updated_at,
})