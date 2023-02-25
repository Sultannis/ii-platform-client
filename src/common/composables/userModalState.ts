import { ref } from 'vue';
import {
  setBodyOverflowOvelay,
  setBodyOverflowHidden,
} from '../helpers/body-overflow-switchers';

const userModalVisible = ref(false);

const openUserModal = () => {
  userModalVisible.value = true;
  setBodyOverflowHidden();
};

const closeUserModal = () => {
  userModalVisible.value = false;
  setBodyOverflowOvelay();
};

export { userModalVisible, openUserModal, closeUserModal };
