import React, {FC, useContext, useState} from 'react';
import ChartModeSelect, {ChartMode} from "../../components/ChartModeSelect/ChartModeSelect";
import {Context} from "../../components/ContextProvider/ContextProvider";
import LineChartDetail from "./LineChartDetail/LineChartDetail";
import PieChartDetail from "./PieChartDetail/PieChartDetail";
import "./ChartPage.css";

const ChartPage: FC = () => {
  const [mode, setMode] = useState(ChartMode.PIE_CHART);
  const {state} = useContext(Context);

  console.log("mode", mode);
  return (
    <div className={"chart-page"}>
      <div className={"chart-page__header"}>
        <ChartModeSelect mode={mode} onChange={setMode}/>
      </div>
      <div className={"chart-page__content"}>
        {mode === ChartMode.LINE_CHART ?
          <LineChartDetail currentMonth={state.currentMonth} recordList={state.recordList}/> :
          <PieChartDetail currentMonth={state.currentMonth} recordList={state.recordList}/>
        }
      </div>
    </div>
  );
};

export default ChartPage;