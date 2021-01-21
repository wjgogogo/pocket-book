import moment, {Moment} from "moment";

moment.locale('zh-CN');

export const normalizeDate = (timeStamp?: number) => {
  return moment(timeStamp);
}

export enum DateFormat {
  MONTH_DAYOFWEEK = "MMMDo dddd",
  YEAR_MONTH_DAY = "YYYY-MM-DD",
  Day = "D",
}

export const formatTimeStamp = (timeStamp: number, format = DateFormat.YEAR_MONTH_DAY) => {
  return moment(timeStamp).format(format);
}

export const getCurrentMonth = () => {
  return moment()
}

export const getMonthRange = (month: Moment) => {
  const start = moment(month).startOf("month").valueOf();
  const end = moment(month).endOf("month").valueOf();
  return [start, end]
}


export const isSameMonth = (timeStamp: number, currentMonth: Moment) => {
  const month = moment(timeStamp);
  return month.isSame(currentMonth, "year") && month.isSame(currentMonth, "month")
}
