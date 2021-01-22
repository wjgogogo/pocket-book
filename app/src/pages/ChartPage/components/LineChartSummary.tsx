import React, {FC} from 'react';
import {Card} from "antd";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {EverydaySummary} from "../../../services/recordFormatter";
import {COLOR_PALETTE} from "../../../constants";


interface LineChartSummaryProps {
  title: string;
  data: EverydaySummary[]
}

const LineChartSummary: FC<LineChartSummaryProps> = ({title, data}) => {
  return (
    <Card title={`${title}:`}>
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey={"date"}/>
          <YAxis/>
          <Line dataKey="totalIncome" name={"收入"} stroke={COLOR_PALETTE[0]}/>
          <Line dataKey="totalExpenditure" name={"支出"} stroke={COLOR_PALETTE[1]}/>
          <Tooltip labelFormatter={label => <span>{label}日明细：</span>}/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default LineChartSummary;