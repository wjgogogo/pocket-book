import {Moment} from "moment";
import {RecordItem} from "./reducer";

export enum Action {
  ADD_RECORD = "add_record",
  DELETE_RECORD = "delete_record",
  UPDATE_RECORD = "update_record",
  UPDATE_RECORD_LIST = "update_record_list",

  UPDATE_CURRENT_MONTH = "update_current_month"
}

export const updateRecordList = (recordList: RecordItem[]) => ({
  type: Action.UPDATE_RECORD_LIST,
  recordList
} as const)

export const addRecord = (record: RecordItem) => ({
  type: Action.ADD_RECORD,
  record
} as const)

export const updateRecord = (record: RecordItem) => ({
  type: Action.UPDATE_RECORD,
  record
} as const)

export const deleteRecord = (recordId: number) => ({
  type: Action.DELETE_RECORD,
  recordId
} as const)


export const updateCurrentMonth = (month: Moment) => ({
  type: Action.UPDATE_CURRENT_MONTH,
  month
} as const)

export type ActionType =
  | ReturnType<typeof updateRecordList>
  | ReturnType<typeof addRecord>
  | ReturnType<typeof updateRecord>
  | ReturnType<typeof deleteRecord>
  | ReturnType<typeof updateCurrentMonth>;
