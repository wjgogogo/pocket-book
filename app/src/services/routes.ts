import {RouteConfig} from "react-router-config";
import DetailPage from "../pages/DetailPage/DetailPage";

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: DetailPage
  }
];