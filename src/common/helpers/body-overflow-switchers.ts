export const setBodyOverflowHidden = () => {
  const body = document.querySelector('body');
  if (body) {
    body.style.overflow = 'hidden';
  }
};

export const setBodyOverflowOvelay = () => {
  const body = document.querySelector('body');
  if (body) {
    body.style.overflow = 'overlay';
  }
};
