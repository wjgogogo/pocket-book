import React from "react";
import {Button, Layout} from "antd";

import "antd/dist/antd.css";
// import "./assets/fonts/iconfont.css";
import './App.css';
import {EXPENDITURE_ICON_LIST, INCOME_ICON_LIST} from "./constants";
import SideMenu from "./components/SideMenu/SideMenu";

let div = <>
  <div className="app">
    <Button>Hello World</Button>
    <div>
      {
        INCOME_ICON_LIST.map(item =>

          <svg className={"icon"}>
            <use xlinkHref={`#${item.icon}`}/>
          </svg>
        )
      }
    </div>
    <div>

      {
        EXPENDITURE_ICON_LIST.map(item =>

          <svg className={"icon"}>
            <use xlinkHref={`#${item.icon}`}/>
          </svg>
        )
      }
    </div>


  </div>
</>;

const {Header, Content} = Layout;

function App() {

  return <Layout className={"app"}>
    <SideMenu/>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
    </Layout>
  </Layout>;
}

export default App;
