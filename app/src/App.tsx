import React from "react";
import {Layout} from "antd";
import {BrowserRouter} from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import MainContent from "./components/MainContent/MainContent";

import "antd/dist/antd.css";
import './App.css';
import ContextProvider from "./components/ContextProvider";

function App() {
  return <BrowserRouter>
    <ContextProvider>
      <Layout className={"app"}>
        <SideMenu/>
        <MainContent/>
      </Layout>
    </ContextProvider>
  </BrowserRouter>
}

export default App;
