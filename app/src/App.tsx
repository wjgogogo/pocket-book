import React from "react";
import {Button, Layout} from "antd";
import {BrowserRouter} from "react-router-dom";
import {EXPENDITURE_ICON_LIST, INCOME_ICON_LIST} from "./constants";
import SideMenu from "./components/SideMenu/SideMenu";
import MainContent from "./components/MainContent/MainContent";

import "antd/dist/antd.css";
import './App.css';

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


function App() {
  return <BrowserRouter>
    <Layout className={"app"}>
      <SideMenu/>
      <MainContent/>
    </Layout>;
  </BrowserRouter>
}

export default App;
