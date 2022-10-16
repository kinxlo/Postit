import {
  Button,
  Container,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Feedback from "../../../components/Feedback";
import StoriesCard from "../../../components/StoriesCard";
import DashboardLayout from "../../../layout/DashboardLayout";

const Index = () => {
  return (
    <Container px={12} py={5} className={`cc-container`}>
      <Flex mb={10} justifyContent={`space-between`} alignItems={`center`}>
        <Heading>Your Stories</Heading>
        <Button px={10} bg={`black`} color={`white`}>
          Write a Story
        </Button>
      </Flex>
      <Box>
        <Tabs>
          <TabList>
            <Tab color={`lightGrey`} fontSize={`xl`}>
              All
            </Tab>
            <Tab color={`lightGrey`} fontSize={`xl`}>
              Drafts
            </Tab>
            <Tab color={`lightGrey`} fontSize={`xl`}>
              Published
            </Tab>
          </TabList>

          <TabPanels my={12}>
            <TabPanel>
              <StoriesCard
                isAll={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
              <StoriesCard
                isAll={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
              <StoriesCard
                isAll={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
              <StoriesCard
                isAll={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
            </TabPanel>
            <TabPanel>
              {/* <Feedback
                btnTitle={`Write A Story`}
                text={`You’re all caught up.
No draft yet, why not post a story.`}
              /> */}
              <StoriesCard
                isDraft={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
            </TabPanel>
            <TabPanel>
              <StoriesCard
                isPublished={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
              <StoriesCard
                isPublished={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
              <StoriesCard
                isPublished={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
              <StoriesCard
                isPublished={true}
                title={`The 20 Biggest Fintech Companies In Nigeria 2022`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....`}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

Index.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default Index;
