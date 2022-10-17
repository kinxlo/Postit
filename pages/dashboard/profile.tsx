import { Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import FollowersSuggestionCard from "../../components/FollowersSuggestionCard";
import ProfileForm from "../../components/forms/ProfileForm";
import ProfileStats from "../../components/ProfileStats";
import DashboardLayout from "../../layout/DashboardLayout";

const Profile = () => {
  return (
    <Container px={{ base: 5, md: 0 }} py={5} className={`cc-container`}>
      <FollowersSuggestionCard
        align="start"
        name={`Mario Davies`}
        nameSize={`4xl`}
        job={`Designer and Blogger`}
        jobSize={`lg`}
        isProfile={true}
        picSize={`2xl`}
        img={`https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
      />
      <Box my={20}>
        <ProfileStats />
      </Box>
      <Box>
        <ProfileForm />
      </Box>
      <Box my={3}>
        <Button size={`lg`} gap={2} color={`red`} variant={`ghost`}>
          <Icon boxSize={`2rem`} as={FaSignOutAlt} /> Sign out
        </Button>
      </Box>
    </Container>
  );
};
Profile.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default Profile;
