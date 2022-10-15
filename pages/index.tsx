import React, { ReactElement } from "react";
import Layout from "../layout/Layout";
import Home from "./home";

const Index = () => {
  return <Home />;
};

Index.getLayout = function getLayout(component: ReactElement) {
  return <Layout>{component}</Layout>;
};

export default Index;
