import {RouteConfig} from "react-router-config";
import DetailPage from "../pages/DetailPage/DetailPage";
import ChartPage from "../pages/ChartPage/ChartPage";
import {Redirect} from "react-router-dom";
import React from "react";

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: DetailPage
  }, {
    path: "/chart",
    exact: true,
    component: ChartPage
  },
  {
    render: () => <Redirect to={"/"}/>
  }
];