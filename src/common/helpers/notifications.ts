import { notification, message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import 'ant-design-vue/es/notification/style/css';

const showErrorNotification = (title: string, description: string) => {
  notification.error({
    message: title,
    description,
    duration: 8,
  });
};

const showServerErrorNotification = () => {
  notification.error({
    message: 'Что-то пошло не так',
    description:
      'Произошла непредвиденная ошибка. Обратитесь в службу технической поддержки.',
    duration: 8,
  });
};

const showWarningNotification = (title: string, description: string) => {
  notification.warning({
    message: title,
    description,
    duration: 8,
  });
};

const showSuccessMessage = (content: string) => {
  message.success(content);
};

const showWarningMessage = (content: string) => {
  message.warning(content);
};

const showErrorMessage = (content: string) => {
  message.error(content);
};

export {
  showErrorNotification,
  showServerErrorNotification,
  showWarningNotification,
  showSuccessMessage,
  showWarningMessage,
  showErrorMessage,
};
