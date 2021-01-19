import {Action, ActionType} from "./action";


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
  currentMonth?: string;
  recordList: RecordItem[];
}

export const defaultState: State = {
  currentMonth: undefined, recordList: [
    {
      id: 1611825300868,
      timeStamp: 1611825300868,
      type: RecordType.Income,
      name: "工资",
      price: 1000,
      remark: "这是我的血汗钱啊"

    },
    {
      id: 1611825300168,
      timeStamp: 1611825300168,
      type: RecordType.Income,
      name: "工资",
      price: 1000,
      remark: "这是我的血汗钱啊"

    },
    {
      id: 1611825300268,
      timeStamp: 1611825300268,
      type: RecordType.Expenditure,
      name: "购物",
      price: 200,
      remark: "这是我的血汗钱啊"
    }
  ]
};

export default (state: State = defaultState, action: ActionType) => {
  switch (action.type) {
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
    default:
      return state;
  }
};