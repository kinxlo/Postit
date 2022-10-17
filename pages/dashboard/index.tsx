import { Box, Container } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import DetailedCard from "../../components/DetailedCard";
import CreateStoryForm from "../../components/forms/CreateStoryForm";
import DashboardLayout from "../../layout/DashboardLayout";

const Index = () => {
  return (
    <Container px={{ base: 5, md: 0 }} py={5} className={`cc-container`}>
      <CreateStoryForm />
      <Box>
        <Box my={10}>
          <hr />
        </Box>
        <DetailedCard
          width={`251px`}
          dir={{ base: `column`, md: `row-reverse` }}
          fontsize={`2xl`}
        />
      </Box>
      <Box>
        <Box my={10}>
          <hr />
        </Box>
        <DetailedCard
          width={`251px`}
          dir={{ base: `column`, md: `row-reverse` }}
          fontsize={`2xl`}
        />
      </Box>
      <Box>
        <Box my={10}>
          <hr />
        </Box>
        <DetailedCard
          width={`251px`}
          dir={{ base: `column`, md: `row-reverse` }}
          fontsize={`2xl`}
        />
      </Box>
    </Container>
  );
};

Index.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default Index;
