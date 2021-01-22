import React, {FC, useContext} from 'react';
import "./Record.css";
import {Popconfirm} from 'antd';
import {RecordItem} from "../../../../hooks/enhancedReducer/reducer/reducer";
import {getIconByName} from "../../../../services/iconSelector";
import Icon from "../../../../components/Icon/Icon";
import IconButton from "../../../../components/IconButton/IconButton";
import {deleteRecordAsync} from "../../../../hooks/enhancedReducer/reducer/asyncAction";
import {Context} from "../../../../components/ContextProvider";

interface RecordProps extends RecordItem {
  handleSetUpdateRecordId: (recordId: number) => void;
}

const Record: FC<RecordProps> = ({id, type, name, price, remark, handleSetUpdateRecordId}) => {

  const {dispatch} = useContext(Context);
  const icon = getIconByName(type, name);

  return (
    <div className={"record"}>
      <Icon className={"record__icon"} icon={icon.icon}/>
      <div className={"record__name"}>{name}</div>
      <div className={"record__remark"}>{remark}</div>
      <div className={"record__price"}>{price}</div>
      <div className={"record__action"}>
        <IconButton icon={"icon-bianji"} onClick={() => handleSetUpdateRecordId(id!)}/>
        <Popconfirm placement="topRight" okText="确认" cancelText="取消" title={"您确认想删除这条记录吗？"} onConfirm={() => {
          dispatch(deleteRecordAsync(id!))
        }}>
          <IconButton icon={"icon-shanchu"}/>
        </Popconfirm>

      </div>
    </div>
  );
};

export default Record;