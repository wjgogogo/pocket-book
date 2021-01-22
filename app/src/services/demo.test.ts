import {formatTimeStamp} from "./dateFormatter";
import {getEveryDaySummaryOfMonth, groupRecordListByDay} from "./recordFormatter";
import {RecordType} from "../hooks/enhancedReducer/reducer/reducer";
import moment from "moment";

describe("test", () => {
  it('should test timeStamp', () => {
    expect(formatTimeStamp(1611825300868)).toEqual("1月28日 星期四")
  });

  it('should test group', () => {
    expect(groupRecordListByDay([
      {
        timeStamp:1622225400868,
        type: RecordType.Income,
        name: "工资",
        price: 1000,
        remark:"这是我的血汗钱啊"

      },
      {
        timeStamp:1611825300668,
        type: RecordType.Income,
        name: "工资",
        price: 1000,
        remark:"这是我的血汗钱啊"

      },
      {
        timeStamp:1611825300868,
        type: RecordType.Income,
        name: "工资",
        price: 1000,
        remark:"这是我的血汗钱啊"
      }
    ])).toEqual([])
  });

  it('should test group123', () => {
    expect(getEveryDaySummaryOfMonth(moment(),[
      {
        timeStamp:1622225400868,
        type: RecordType.Income,
        name: "工资",
        price: 1000,
        remark:"这是我的血汗钱啊"

      },
      {
        timeStamp:1611825300668,
        type: RecordType.Income,
        name: "工资",
        price: 1000,
        remark:"这是我的血汗钱啊"

      },
      {
        timeStamp:1611825300868,
        type: RecordType.Income,
        name: "工资",
        price: 1000,
        remark:"这是我的血汗钱啊"
      }
    ])).toEqual([])
  });
})