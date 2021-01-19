import React, {FC} from 'react';
import {Layout} from "antd";
import {renderRoutes} from "react-router-config";
import {ROUTES} from "../../services/routes";
import "./MainContent.css";

interface ContentProps {
}

const MainContent: FC<ContentProps> = ({}) => {
  return (
    <Layout className={"main-content"}>
      {renderRoutes(ROUTES)}
    </Layout>
  );
};

export default MainContent;