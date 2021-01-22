import React, {FC} from 'react';
import Record from '../Record/Record';
import "./RecordByDay.css";
import {RecordListByDay} from "../../../../services/recordFormatter";
import {DateFormat, formatTimeStamp} from "../../../../services/dateFormatter";

interface RecordByDayProps extends RecordListByDay {
  handleSetUpdateRecordId: (recordId: number) => void;
}


const RecordByDay: FC<RecordByDayProps> = ({
                                             timeStamp,
                                             totalIncome,
                                             totalExpenditure,
                                             recordList,
                                             handleSetUpdateRecordId
                                           }) => {
  return (
    <div className={"record-by-day"}>
      <div className={"record-by-day__summary"}>
        <div className={"record-by-day__summary__date"}>{formatTimeStamp(timeStamp,DateFormat.MONTH_DAYOFWEEK)}</div>
        {Boolean(totalExpenditure) && <div className={"record-by-day__summary__detail"}>支出：{totalExpenditure}</div>}
        {Boolean(totalIncome) && <div className={"record-by-day__summary__detail"}>收入：{totalIncome}</div>}
      </div>
      <div className={"record-by-day__list"}>
        {recordList.map(record => <Record key={record.timeStamp}
                                          handleSetUpdateRecordId={handleSetUpdateRecordId} {...record}/>)}
      </div>
    </div>
  );
};

export default RecordByDay;