import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import DashboardRightnav from "../components/DashboardRightnav";
import DashboardSidenav from "../components/DashboarSidenav";

interface iProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: iProps) => {
  return (
    <Grid bgColor={`dashboardBg`} templateColumns={{ base: `repeat(12, 1fr)` }}>
      <GridItem colSpan={{ base: 12, md: 1 }}>
        <DashboardSidenav />
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 7 }}>{children}</GridItem>
      <GridItem
        borderLeft={`1px solid lightGrey`}
        colSpan={{ base: 12, md: 4 }}
      >
        <DashboardRightnav />
      </GridItem>
    </Grid>
  );
};

export default DashboardLayout;
