import React, {FC, useContext} from 'react';
import {Layout, Statistic} from "antd";
import {renderRoutes} from "react-router-config";
import {ROUTES} from "../../services/routes";
import "./MainContent.css";
import Logo from "../Logo/Logo";
import LocaleDatePicker from "../LocaleDatePicker/LocaleDatePicker";
import {Context} from "../ContextProvider/ContextProvider";
import {getSummary} from "../../services/recordFormatter";
import {updateCurrentMonth} from "../../hooks/enhancedReducer/reducer/action";


const MainContent: FC = () => {

  const {state, dispatch} = useContext(Context);
  const summary = getSummary(state.recordList);

  function handleChangeCurrentMonth(moment: any) {
    dispatch(updateCurrentMonth(moment));
  }

  return (
    <Layout className={"main-content"}>
      <div className={"main-content__header"}>
        <Logo size={"large"}/>
        <div className={"main-content__header__category"}>
          <Statistic title={"请选择月份"}
                     valueRender={() => <LocaleDatePicker picker={"month"}
                                                          value={state.currentMonth}
                                                          onChange={handleChangeCurrentMonth}/>}/>
          <Statistic title={"总收入"} value={summary.totalIncome}/>
          <Statistic title={"总支出"} value={summary.totalExpenditure}/>
        </div>
      </div>
      {renderRoutes(ROUTES)}
    </Layout>
  );
};

export default MainContent;