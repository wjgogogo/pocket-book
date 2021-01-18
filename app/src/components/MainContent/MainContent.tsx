import React, {FC} from 'react';
import {Layout} from "antd";
import "./MainContent.css";
import {renderRoutes} from "react-router-config";
import {ROUTES} from "../../services/routes";

interface IContentProps {
}

const MainContent: FC<IContentProps> = ({}) => {
  return (
    <Layout className={"main-content"}>
      {renderRoutes(ROUTES)}
    </Layout>
  );
};

export default MainContent;