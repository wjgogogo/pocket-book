import {Moment} from "moment";
import {Dispatch} from "react";
import {ActionType, addRecord, deleteRecord, updateRecord, updateRecordList} from "./action";
import {RecordItem} from "./reducer";
import {getMonthRange} from "../../../services/dateFormatter";
import axiosInstance from "../../../services/request";

export const fetchRecordListAsync = (month: Moment) => async (dispatch: Dispatch<ActionType>) => {
  const [start, end] = getMonthRange(month);
  const recordList = await axiosInstance.get<any, RecordItem[]>(`/records?timeStamp_gte=${start}&timeStamp_lte=${end}`)
  dispatch(updateRecordList(recordList))
}

export const createNewRecordAsync = (record: RecordItem) => async (dispatch: Dispatch<ActionType>) => {
  const newRecord = await axiosInstance.post<any, RecordItem>(`/records`, record)
  dispatch(addRecord(newRecord))
}

export const updateRecordAsync = (record: RecordItem) => async (dispatch: Dispatch<ActionType>) => {
  const updated = await axiosInstance.put<any, RecordItem>(`/records/${record.id}`, record)
  dispatch(updateRecord(updated))
}

export const deleteRecordAsync = (recordId: number) => async (dispatch: Dispatch<ActionType>) => {
  await axiosInstance.delete<any, RecordItem>(`/records/${recordId}`)
  dispatch(deleteRecord(recordId))
}
