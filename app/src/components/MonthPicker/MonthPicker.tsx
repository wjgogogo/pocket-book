import React, {FC} from 'react';
import "./MonthPicker.css";
import {DatePicker} from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import 'moment/locale/zh-cn';

interface IMonthPickerProps {
}

const MonthPicker: FC<IMonthPickerProps> = ({}) => {
  return (
    <div className={"month-picker"}>
      <div className={"text"}> 选择月份：</div>
      <DatePicker locale={locale} picker={"month"} inputReadOnly/>
    </div>
  );
};

export default MonthPicker;