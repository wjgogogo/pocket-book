import {Action, ActionType} from "./action";
import {Moment} from "moment";
import {getCurrentMonth, isSameMonth} from "../../../services/dateFormatter";


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

const reducer= (state: State, action: ActionType) => {
  switch (action.type) {
    case Action.UPDATE_RECORD_LIST:
      return {
        ...state,
        recordList: action.recordList
      }

    case Action.ADD_RECORD:
      return {
        ...state,
        recordList: isSameMonth(action.record.timeStamp, state.currentMonth) ?
          state.recordList.concat(action.record) : state.recordList
      }
    case Action.UPDATE_RECORD:
      return {
        ...state,
        recordList: isSameMonth(action.record.timeStamp, state.currentMonth) ?
          state.recordList.map(i => i.id === action.record.id ? action.record : i) : state.recordList
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
export default reducer;