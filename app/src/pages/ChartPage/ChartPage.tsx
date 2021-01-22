import React, {FC, useContext} from 'react';
import {Context} from "../../components/ContextProvider/ContextProvider";
import "./ChartPage.css";
import {getEveryDaySummaryOfMonth, getEveryTypeSummary} from "../../services/recordFormatter";
import LineChartSummary from "./LineChartSummary";
import PieChartSummary from "./PieChartSummary";

const ChartPage: FC = () => {
  const {state: {currentMonth, recordList}} = useContext(Context);
  const everyDayPayment = getEveryDaySummaryOfMonth(currentMonth, recordList);
  const {incomeSummary, expenditureSummary} = getEveryTypeSummary(recordList);

  return (
    <div className={"chart-page"}>
      <div className={"chart-page__header"}>
      </div>
      <div className={"chart-page__content"}>
        <LineChartSummary title={"本月收支情况"} data={everyDayPayment}/>
        <PieChartSummary title={"支出情况"} data={expenditureSummary}/>
        <PieChartSummary title={"收入情况"} data={incomeSummary}/>
      </div>
    </div>
  );
};

export default ChartPage;