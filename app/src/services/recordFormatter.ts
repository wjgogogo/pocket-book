import {RecordItem, RecordType} from "../components/Context/reducer";
import {groupBy, map, orderBy, reduce} from "lodash";
import {DateFormat, formatTimeStamp} from "./dateFormatter";
import {Moment} from "moment";

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
  date: string;
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
  const groupedList = groupBy(recordList, (record) => formatTimeStamp(record.timeStamp))
  return map(orderBy(Object.keys(groupedList), "desc"), date => {
    const recordList = groupedList[date];
    const summary = getSummary(recordList)
    return {
      ...summary,
      date: formatTimeStamp(recordList[0].timeStamp, DateFormat.MONTH_DAYOFWEEK),
      recordList: orderBy(recordList, ["timeStamp"], ["desc"])
    }
  });
}