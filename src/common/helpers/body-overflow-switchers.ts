export const setBodyOverflowHidden = () => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }
};

export const setBodyOverflowAuto = () => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "auto";
  }
};
