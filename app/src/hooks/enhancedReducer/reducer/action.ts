import {Moment} from "moment";
import {RecordItem} from "./reducer";

export enum Action {
  FETCH_RECORD = "fetch_record",
  CREATE_RECORD = "create_record",
  UPDATE_RECORD = "update_record",
  DELETE_RECORD = "delete_record",

  UPDATE_CURRENT_MONTH = "update_current_month"
}

export const updateRecordList = (recordList: RecordItem[]) => ({
  type: Action.FETCH_RECORD,
  recordList
} as const)

export const createRecord = (record: RecordItem) => ({
  type: Action.CREATE_RECORD,
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
  | ReturnType<typeof createRecord>
  | ReturnType<typeof updateRecord>
  | ReturnType<typeof deleteRecord>
  | ReturnType<typeof updateCurrentMonth>;
