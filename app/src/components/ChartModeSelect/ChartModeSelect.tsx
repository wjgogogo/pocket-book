import React, {FC} from 'react';
import {Select} from "antd";

export enum ChartMode {
  PIE_CHART = "pie_chart",
  LINE_CHART = "line_chart"
}

interface ChartModeSelectProps {
  mode: ChartMode
  onChange?: (value: ChartMode) => void;
}


const ChartModeSelect: FC<ChartModeSelectProps> = ({mode, onChange}) => {
  return <Select value={mode} onChange={onChange}>
    <Select.Option value={ChartMode.PIE_CHART}>饼状图</Select.Option>
    <Select.Option value={ChartMode.LINE_CHART}>线状图</Select.Option>
  </Select>;
};

export default ChartModeSelect;