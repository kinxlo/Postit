import {
  Box,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Feedback from "../../components/Feedback";
import DashboardLayout from "../../layout/DashboardLayout";

const Notification = () => {
  return (
    <Container px={{base: 5, md: 0}} py={5} className={`cc-container`}>
      <Heading mb={3.5}>Notifications</Heading>
      <Tabs>
        <TabList>
          <Tab fontSize={`xl`}>All</Tab>
          <Tab fontSize={`xl`}>Responses</Tab>
        </TabList>

        <TabPanels my={12}>
          <TabPanel>
            <Feedback
              btnTitle={`Post A Story`}
              text={`You’re all caught up.
No notifications yet, why not post a story.`}
            />
          </TabPanel>
          <TabPanel>
            <Feedback
              btnTitle={`Post A Story`}
              text={`You’re all caught up.
No notifications yet, why not post a story.`}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

Notification.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default Notification;
