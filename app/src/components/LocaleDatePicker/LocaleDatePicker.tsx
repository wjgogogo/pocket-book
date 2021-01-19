import React, {FC} from 'react';
import "./LocaleDatePicker.css";
import {DatePicker} from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import 'moment/locale/zh-cn';
import moment, {Moment} from "moment";

interface MonthPickerProps {
  picker?: "month" | "date";
  value?: Moment | null;
  onChange?: (timeStamp: Moment | null, dateString: string) => void;
}

const LocaleDatePicker: FC<MonthPickerProps> = ({picker = "date", value, onChange}) => {
  return <DatePicker locale={locale} picker={picker} inputReadOnly={true}
                     disabledDate={time => time.isAfter(moment())}
                     value={value}
                     onChange={onChange}/>;
}

export default LocaleDatePicker;