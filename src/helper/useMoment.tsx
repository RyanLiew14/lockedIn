import moment from "moment/moment";

export const getCurrentTimeStamp = (timeFormat: string) => {
  return moment().format(timeFormat);
};
