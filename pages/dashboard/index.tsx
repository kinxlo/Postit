import React, { ReactElement } from "react";
import DashboardLayout from "../../layout/DashboardLayout";

const Index = () => {
  return <div>Index</div>;
};

Index.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default Index;
