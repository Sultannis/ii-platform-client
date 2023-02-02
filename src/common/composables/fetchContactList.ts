import type { ContactList } from '@/api/entities/ContactList';
import { fetchPersonContactList as fetchPersonContactListRequest } from '@/api/repositories/contact-lists.repository';
import { ref } from 'vue';
import { showServerErrorNotification } from '@/common/helpers/notifications';
import { InternalServerError } from '@/api/request';

let contactList = ref({} as ContactList);
const contactListLoading = ref(false);
const startContactListLoading = () => {
  contactListLoading.value = true;
};
const finishContactListLoading = () => {
  contactListLoading.value = false;
};
const fetchPersonContactList = async (personId: number) => {
  startContactListLoading();

  try {
    contactList.value = await fetchPersonContactListRequest(personId);
  } catch (error) {
    if (error instanceof InternalServerError) {
      showServerErrorNotification();
    }
    throw error;
  } finally {
    finishContactListLoading();
  }
};

export const useFetchPersonContactList = () => ({
  fetchPersonContactList,
  contactListLoading,
  contactList,
});
