import React, {FC} from 'react';
import "./SideMenu.css";
import {Layout, Menu} from "antd";
import Icon from "../Icon/Icon";
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';

interface ISideMenuProps {
}

const SideMenu: FC<ISideMenuProps> = ({}) => {
  return (
    <Layout.Sider theme={"light"} className={"side-menu"} collapsible>
      <Logo/>
      <Menu mode="inline" inlineCollapsed={true}>
        <Menu.Item key="detail" icon={<Icon icon={"icon-zhuye"}/>}>
          <Link to={"/"}>
            明细
          </Link>
        </Menu.Item>
        <Menu.Item key="chart" icon={<Icon icon={"icon-Chart"}/>}>
          <Link to={"/chart"}>
            图表
          </Link>
        </Menu.Item>
        <Menu.Item key="setting" icon={<Icon icon={"icon-shezhi"}/>}>
          <Link to={"/setting"}>
            设置
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default SideMenu;