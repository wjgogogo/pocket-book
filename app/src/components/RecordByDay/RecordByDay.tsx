import React, {FC} from 'react';
import {RecordListByDay} from '../../services/recordFormatter';
import Record from '../Record/Record';
import "./RecordByDay.css";

interface RecordByDayProps extends RecordListByDay {
  handleSetUpdateRecordId: (recordId: number) => void;
}


const RecordByDay: FC<RecordByDayProps> = ({
                                             date,
                                             totalIncome,
                                             totalExpenditure,
                                             recordList,
                                             handleSetUpdateRecordId
                                           }) => {
  return (
    <div className={"record-by-day"}>
      <div className={"record-by-day__summary"}>
        <div className={"record-by-day__summary__date"}>{date}</div>
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