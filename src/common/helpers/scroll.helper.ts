export const scrollToBottom = (element: HTMLElement) => {
  setTimeout(() => {
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }, 0);
};
