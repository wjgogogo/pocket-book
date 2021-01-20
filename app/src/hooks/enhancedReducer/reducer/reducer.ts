import {Action, ActionType} from "./action";
import {Moment} from "moment";
import {getCurrentMonth} from "../../../services/dateFormatter";


export enum RecordType {
  Income = "income",
  Expenditure = "expenditure"
}

export interface RecordItem {
  id?: number;
  timeStamp: number;
  type: RecordType;
  name: string;
  price: number
  remark?: string;
}

export interface State {
  currentMonth: Moment;
  loading?: boolean;
  recordList: RecordItem[];
}

export const defaultState: State = {
  currentMonth: getCurrentMonth(),
  recordList: []
};

export default (state: State, action: ActionType) => {
  switch (action.type) {
    case Action.FETCH_RECORD:
      return {
        ...state,
        recordList: action.recordList
      }

    case Action.CREATE_RECORD:
      action.record.id = action.record.timeStamp;
      return {
        ...state,
        recordList: state.recordList.concat(action.record)
      }
    case Action.UPDATE_RECORD:
      return {
        ...state,
        recordList: state.recordList.map(item => item.id === action.record.id ? action.record : item)
      }

    case Action.DELETE_RECORD:
      return {
        ...state,
        recordList: state.recordList.filter(item => item.id !== action.recordId)
      }

    case Action.UPDATE_CURRENT_MONTH:
      return {
        ...state,
        currentMonth: action.month
      }

    default:
      return state;
  }
};