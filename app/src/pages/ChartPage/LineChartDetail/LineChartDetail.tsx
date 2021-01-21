import React, {FC} from 'react';
import {Typography} from "antd";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Moment} from "moment";
import {RecordItem} from "../../../hooks/enhancedReducer/reducer/reducer";
import {getEveryDaySummaryOfMonth} from "../../../services/recordFormatter";

import "./LineChartDetail.css";

interface LineChartDetailProps {
  currentMonth: Moment;
  recordList: RecordItem[]
}

const LineChartDetail: FC<LineChartDetailProps> = ({currentMonth, recordList}) => {
  const everyDayPayment = getEveryDaySummaryOfMonth(currentMonth, recordList);
  return (
    <div className={"line-chart-detail"}>
      <Typography.Title level={4}>本月收支情况：</Typography.Title>
      <ResponsiveContainer height={300}>
        <LineChart data={everyDayPayment}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey={"date"}/>
          <YAxis/>
          <Tooltip labelFormatter={label => <div>{label}日明细：</div>}/>
          <Legend/>
          <Line dataKey="totalIncome" name={"收入"} stroke="#8884d8"/>
          <Line dataKey="totalExpenditure" name={"支出"} stroke="#82ca9d"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartDetail;