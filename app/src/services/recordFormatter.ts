import {groupBy, map, orderBy, reduce} from "lodash";
import {DateFormat, formatTimeStamp} from "./dateFormatter";
import {Moment} from "moment";
import {RecordItem, RecordType} from "../hooks/enhancedReducer/reducer/reducer";

export type RecordWithMomentTimStamp = Omit<RecordItem, "timeStamp"> & { timeStamp: Moment }

export const normalizeRecord = (record: RecordWithMomentTimStamp): RecordItem => {
  const timeStamp = record.timeStamp!.valueOf();
  const price = record.type === RecordType.Income ? Math.abs(record.price) : -Math.abs(record.price);
  return {...record, timeStamp, price}
}


export interface Summary {
  totalIncome: number;
  totalExpenditure: number;
}

export interface RecordListByDay extends Summary {
  timeStamp: number;
  recordList: RecordItem[]
}

export const getSummary = (recordList: RecordItem[]): Summary => {
  return reduce(recordList, (summary, record) => {
    if (record.type === RecordType.Income) {
      summary.totalIncome += record.price
    } else {
      summary.totalExpenditure += record.price
    }
    return summary;
  }, {totalIncome: 0, totalExpenditure: 0});
}

export const groupRecordListByDay = (recordList: RecordItem[]): RecordListByDay[] => {
  const groupedDayList = groupBy(recordList, (record) => formatTimeStamp(record.timeStamp))
  return orderBy(map(Object.keys(groupedDayList), day => {
    const recordList = groupedDayList[day];
    const summary = getSummary(recordList)
    return {
      ...summary,
      timeStamp: recordList[0].timeStamp,
      recordList: orderBy(recordList, ["timeStamp"], ["desc"])
    }
  }), ["timeStamp"], ["desc"]);
}


export const getEveryDaySummaryOfMonth = (month: Moment, recordList: RecordItem[]): Array<Summary & { date: number }> => {
  const daysOfMonth = month.daysInMonth();
  const resultOfPayment = groupRecordListByDay(recordList)
    .map(d => ({
      date: parseInt(formatTimeStamp(d.timeStamp, DateFormat.Day)),
      totalExpenditure: Math.abs(d.totalExpenditure),
      totalIncome: d.totalIncome
    }));

  const result = [];
  for (let i = 1; i <= daysOfMonth; i++) {
    const payment = resultOfPayment.find(d => d.date === i)
    result.push(payment || {date: i, totalExpenditure: 0, totalIncome: 0})
  }
  return result
}