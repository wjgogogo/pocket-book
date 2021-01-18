import {Statistic} from 'antd';
import React, {FC} from 'react';
import Icon from '../../components/Icon/Icon';
import Logo from '../../components/Logo/Logo';
import MonthPicker from '../../components/MonthPicker/MonthPicker';
import "./DetailPage.css";

interface IDetailPageProps {
}

const DetailPage: FC<IDetailPageProps> = ({}) => {
  return (
    <div className={"detail-page"}>
      <div className={"detail-page__header"}>
        <Logo size={"large"}/>
        <div className={"detail-page__header__category"}>
          <MonthPicker/>
          <Statistic title={"总收入"} value={100}/>
          <Statistic title={"总支出"} value={100}/>
          <Icon icon={"icon-rili"} className={"detail-page__header__category__calendar"}/>
        </div>
      </div>
      {/*<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"您还没有开始记账"}/>*/}
    </div>
  );
};

export default DetailPage;