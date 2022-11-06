import dayjs from "./dayjs";

export const formatToTimeDate = (value: string) => dayjs(value).format("HH:mm");

export const formatToChatDate = (value: string) => {
  const currentDate = dayjs();
  const formatedDate = dayjs(value);
  const difference = +currentDate.diff(formatedDate, "d", true).toFixed();

  switch (true) {
    case difference === 0:
      return formatedDate.format("HH:mm");

    case difference === 1:
      return "вчера";

    case difference < 3:
      return formatedDate.format("dd");

    default:
      return formatedDate.format("DD.MM.YYYY");
  }
};
