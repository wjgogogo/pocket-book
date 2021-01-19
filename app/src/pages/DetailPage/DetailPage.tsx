import {Empty, Statistic} from 'antd';
import React, {FC, useContext, useState} from 'react';
import Logo from '../../components/Logo/Logo';
import LocaleDatePicker from '../../components/LocaleDatePicker/LocaleDatePicker';
import RecordByDay from '../../components/RecordByDay/RecordByDay';
import "./DetailPage.css";
import RecordModal from "../../components/RecordModal/RecordModal";
import Context from "../../components/Context/Context";
import {getSummary, groupRecordListByDay} from '../../services/recordFormatter';
import IconButton from "../../components/IconButton/IconButton";
import {RecordItem} from "../../components/Context/reducer";
import {createRecord, updateCurrentMonth, updateRecord} from "../../components/Context/action";

interface DetailPageProps {
}

const DetailPage: FC<DetailPageProps> = ({}) => {
  const [visible, setVisible] = useState(false);

  const {state, dispatch} = useContext(Context);
  const [updateRecordId, setUpdateRecordId] = useState<number | undefined>();

  const summary = getSummary(state.recordList);
  const recordByDay = groupRecordListByDay(state.recordList);

  function handleToggleModal() {
    if (updateRecordId && !visible) {
      setUpdateRecordId(undefined);
    }
    setVisible(!visible)
  }

  function handleSetUpdateRecordId(recordId: number) {
    setUpdateRecordId(recordId);
    setVisible(true)
  }


  function handleUpdateRecord(record: RecordItem) {
    if (record.id) {
      dispatch(updateRecord(record))
    } else {
      dispatch(createRecord(record))
    }
  }

  function handleChangeCurrentMonth(moment: any) {
    dispatch(updateCurrentMonth(moment));
  }

  return (
    <div className={"detail-page"}>
      <div className={"detail-page__header"}>
        <Logo size={"large"}/>
        <div className={"detail-page__header__category"}>
          <Statistic title={"请选择月份"}
                     valueRender={() => <LocaleDatePicker picker={"month"}
                                                          value={state.currentMonth}
                                                          onChange={handleChangeCurrentMonth}/>}/>
          <Statistic title={"总收入"} value={summary.totalIncome}/>
          <Statistic title={"总支出"} value={summary.totalExpenditure}/>
          <IconButton icon={"icon-huabanfuben"}
                      className={"detail-page__header__category__add"}
                      onClick={handleToggleModal}
          />
        </div>
      </div>

      <div className={"detail-page__content"}>
        {
          recordByDay.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"您本月还没有开始记账"}/> :
            recordByDay.map(item => <RecordByDay key={item.date} {...item}
                                                 handleSetUpdateRecordId={handleSetUpdateRecordId}
            />)
        }
      </div>

      <RecordModal visible={visible}
                   data={updateRecordId ? state.recordList.find(item => item.id === updateRecordId) : undefined}
                   handleToggleModal={handleToggleModal}
                   handleUpdateRecord={handleUpdateRecord}
      />
    </div>
  );
};

export default DetailPage;