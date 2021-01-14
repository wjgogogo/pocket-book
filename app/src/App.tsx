import React from "react";
import {Button} from "antd";

import "antd/dist/antd.css";
// import "./assets/fonts/iconfont.css";

import './App.css';
import {EXPENDITURE_ICON_LIST, INCOME_ICON_LIST} from "./constants";

function App() {
  return (
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
  );
}

export default App;
