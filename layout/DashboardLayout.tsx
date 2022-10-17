import { Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import DashboardRightnav from "../components/navs/DashboardRightnav";
import DashboardSidenav from "../components/navs/DashboardSidenav";

interface iProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: iProps) => {
  return (
    <Container className={`cc-container`}>
      <Grid templateColumns={{ base: `repeat(12, 1fr)` }}>
        <GridItem colSpan={{ base: 12, md: 1 }}>
          <DashboardSidenav />
        </GridItem>
        <GridItem mb={`45px`} px={{md: 12}} colSpan={{ base: 12, md: 7 }}>
          {children}
        </GridItem>
        <GridItem
          display={{ base: `none`, md: `initial` }}
          borderLeft={`1px solid lightGrey`}
          colSpan={{ base: 12, md: 4 }}
        >
          <DashboardRightnav />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default DashboardLayout;
