import React, {FC, useEffect, useState} from 'react';
import {Input, message, Modal, Tabs,} from "antd";
import "./RecordModal.css";
import IconButton from "../IconButton/IconButton";
import {EXPENDITURE_ICON_LIST, INCOME_ICON_LIST} from "../../constants";
import LocaleDatePicker from "../LocaleDatePicker/LocaleDatePicker";
import classNames from "classnames";
import {Moment} from "moment";
import {normalizeDate} from "../../services/dateFormatter";
import {normalizeRecord, RecordWithMomentTimStamp} from "../../services/recordFormatter";
import {RecordItem, RecordType} from "../../hooks/enhancedReducer/reducer/reducer";

interface RecordModalProps {
  visible: boolean;
  handleToggleModal: () => void;
  handleUpdateRecord: (record: RecordItem) => void;
  data?: RecordItem;
}

const RecordModal: FC<RecordModalProps> = ({visible, handleToggleModal, handleUpdateRecord, data = {}}) => {
  const [state, setState] = useState<Partial<RecordWithMomentTimStamp>>({});

  function handleTypeSelect(type?: RecordType, name?: string) {
    setState({...state, type, name})
  }

  function handleDateChange(timeStamp: Moment) {
    setState({...state, timeStamp})
  }

  function handlePriceChange(price: number) {
    setState({...state, price})
  }

  function handleRemarkChange(remark: string) {
    setState({...state, remark})
  }

  function handleSubmit() {
    if (!state.name) {
      message.error("请选择类型");
      return
    }

    if (!state.timeStamp) {
      message.error("请选择日期");
      return
    }

    if (!state.price) {
      message.error("请输入金额");
      return
    }
    message.success("创建成功")

    handleUpdateRecord(normalizeRecord(state as RecordWithMomentTimStamp));
    handleToggleModal();
  }

  useEffect(() => {
    if (visible) {
      setState({
        ...data,
        timeStamp: normalizeDate(data?.timeStamp)
      })
    }
  }, [visible]);

  return <Modal okText={"确认"} cancelText={"取消"} destroyOnClose={true} visible={visible}
                onCancel={handleToggleModal}
                onOk={handleSubmit}>
    <div className={"record-modal"}>
      <Tabs activeKey={state.type || RecordType.Expenditure} centered size={"middle"}
            onChange={(activeKey) => {
              handleTypeSelect(activeKey as RecordType, undefined);
            }}>
        <Tabs.TabPane tab="支出" key={RecordType.Expenditure}>
          {EXPENDITURE_ICON_LIST.map(item =>
            <div key={item.name} className={"record-item"}>
              <IconButton icon={item.icon}
                          className={classNames({"active": state.name === item.name})}
                          onClick={() => handleTypeSelect(RecordType.Expenditure, item.name)}/>
              <span>{item.name}</span>
            </div>
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="收 入" key={RecordType.Income}>
          {INCOME_ICON_LIST.map(item =>
            <div key={item.name} className={"record-item"}>
              <IconButton icon={item.icon}
                          className={classNames({"active": state.name === item.name})}
                          onClick={() => handleTypeSelect(RecordType.Income, item.name)}/>
              <span>{item.name}</span>
            </div>
          )}
        </Tabs.TabPane>
      </Tabs>

      <div className={"record-modal__list"}>
        <div className={"record-modal__list__item"}>
          <span>日期：</span> <LocaleDatePicker value={state.timeStamp} onChange={handleDateChange}/>
        </div>
        <div className={"record-modal__list__item"}>
          <span>金额：</span> <Input type={"number"}
                                  value={state.price}
                                  onChange={(e) => handlePriceChange(parseInt(e.target.value))}/>
        </div>
        <div className={"record-modal__list__item"}>
          <span>备注：</span> <Input maxLength={20}
                                  value={state.remark}
                                  onChange={(e) => handleRemarkChange(e.target.value)}
        />
        </div>
      </div>

    </div>
  </Modal>
};

export default RecordModal;