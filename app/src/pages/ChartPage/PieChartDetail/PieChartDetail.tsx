import React, {FC} from 'react';
import {Typography} from "antd";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Moment} from "moment";
import {RecordItem} from "../../../hooks/enhancedReducer/reducer/reducer";

import "./PieChartDetail.css";

interface PieChartDetailProps {
  currentMonth: Moment;
  recordList: RecordItem[]
}

const PieChartDetail: FC<PieChartDetailProps> = ({currentMonth, recordList}) => {
  return (
    <div className={"pie-chart-detail"}>

    </div>
  );
};

export default PieChartDetail;