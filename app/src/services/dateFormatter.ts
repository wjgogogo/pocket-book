import moment from "moment";

moment.locale('zh-CN');

export const normalizeDate = (timeStamp?: number) => {
  return moment(timeStamp);
}

export enum DateFormat {
  MONTH_DAYOFWEEK = "MMMDo dddd",
  YEAR_MONTH_DAY = "YYYY-MM-DD"
}

export const formatTimeStamp = (timeStamp: number, format = DateFormat.YEAR_MONTH_DAY) => {
  return moment(timeStamp).format(format);
}