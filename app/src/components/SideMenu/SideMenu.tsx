import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import Icon from "../Icon/Icon";
import {Link, useLocation} from 'react-router-dom';
import Logo from '../Logo/Logo';

import "./SideMenu.css";

const SideMenu: FC = () => {
  const {pathname} = useLocation()
  return (
    <Layout.Sider theme={"light"} className={"side-menu"} collapsible>
      <Logo/>
      <Menu mode="inline" defaultSelectedKeys={[pathname]} siderCollapsed={true}>
        <Menu.Item key="/" icon={<Icon icon={"icon-zhuye"}/>}>
          <Link to={"/"}>
            明细
          </Link>
        </Menu.Item>
        <Menu.Item key="/chart" icon={<Icon icon={"icon-Chart"}/>}>
          <Link to={"/chart"}>
            图表
          </Link>
        </Menu.Item>
        {/*<Menu.Item key="setting" icon={<Icon icon={"icon-shezhi"}/>}>*/}
        {/*  <Link to={"/setting"}>*/}
        {/*    设置*/}
        {/*  </Link>*/}
        {/*</Menu.Item>*/}
      </Menu>
    </Layout.Sider>
  );
};

export default SideMenu;