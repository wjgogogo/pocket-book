import React, {FC} from 'react';
import "./SideMenu.css";
import {Layout, Menu} from "antd";
import Icon from "../Icon/Icon";

interface ISideMenuProps {
}

const SideMenu: FC<ISideMenuProps> = ({}) => {
  return (
    <Layout.Sider theme={"light"} className={"side-menu"} collapsible>
      <div className={"side-menu__logo"}>
        <Icon icon={"icon-bookkeeping"}/>
        <span>一步记账</span>
      </div>
      <Menu mode="inline" inlineCollapsed={true}>
        <Menu.Item key="detail" icon={<Icon icon={"icon-zhuye"}/>}>
          明细
        </Menu.Item>
        <Menu.Item key="chart" icon={<Icon icon={"icon-Chart"}/>}>
          图表
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default SideMenu;