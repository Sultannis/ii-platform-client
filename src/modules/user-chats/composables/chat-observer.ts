export const useChatObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  rootMargin = "0px 0px 0px 0px",
  threshold = 1
) => {
  return new IntersectionObserver(
    (entries) => {
      callback(entries);
    },
    { rootMargin, threshold }
  );
};
