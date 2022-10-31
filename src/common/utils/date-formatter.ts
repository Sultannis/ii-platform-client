import dayjs from "dayjs";

export const formatToTimeDate = (value: string) => dayjs(value).format("HH:mm");
