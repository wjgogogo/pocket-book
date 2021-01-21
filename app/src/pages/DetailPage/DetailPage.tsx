import {Empty} from 'antd';
import React, {FC, useContext, useState} from 'react';
import RecordByDay from '../../components/RecordByDay/RecordByDay';
import RecordModal from "../../components/RecordModal/RecordModal";
import {groupRecordListByDay} from '../../services/recordFormatter';
import IconButton from "../../components/IconButton/IconButton";
import {RecordItem} from "../../hooks/enhancedReducer/reducer/reducer";
import {createNewRecordAsync, updateRecordAsync} from "../../hooks/enhancedReducer/reducer/asyncAction";
import {Context} from "../../components/ContextProvider/ContextProvider";

import "./DetailPage.css";

const DetailPage: FC = () => {
  const [visible, setVisible] = useState(false);
  const [updateRecordId, setUpdateRecordId] = useState<number | undefined>();

  const {state, dispatch} = useContext(Context);
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
      dispatch(updateRecordAsync(record))
    } else {
      dispatch(createNewRecordAsync(record))
    }
  }

  return (
    <div className={"detail-page"}>
      <div className={"detail-page__header"}>
        <IconButton icon={"icon-huabanfuben"}
                    className={"detail-page__header__category__add"}
                    onClick={handleToggleModal}
        />
      </div>

      <div className={"detail-page__content"}>
        {
          recordByDay.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"您本月还没有开始记账"}/> :
            recordByDay.map(item => <RecordByDay key={item.timeStamp} {...item}
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