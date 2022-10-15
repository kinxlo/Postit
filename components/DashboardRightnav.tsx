import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import DashboardSearchbar from "./DashboardSearchbar";
import DashboardTrendCard from "./DashboardTrendCard";
import FollowersSuggestionCard from "./FollowersSuggestionCard";
import ProfileCrumb from "./ProfileCrumb";
import ProfileStats from "./ProfileStats";

const DashboardRightnav = () => {
  return (
    <Box>
      <Box>
        <ProfileCrumb />
      </Box>
      <Box my={9}>
        <ProfileStats />
      </Box>
      <Box my={12}>
        <DashboardSearchbar />
      </Box>
      <Box my={12}>
        <Flex justifyContent={`space-between`} alignItems={`start`}>
          <Heading mb={3.5} fontSize={`3xl`}>
            What’s Trending
          </Heading>
          <Link href={`/`}>
            <Heading
              fontWeight={400}
              color={`accent`}
              lineHeight={`29px`}
              fontSize={`md`}
            >
              See full list
            </Heading>
          </Link>
        </Flex>
        <Flex flexDir={`column`} gap={8}>
          <DashboardTrendCard />
          <DashboardTrendCard />
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent={`space-between`} alignItems={`start`}>
          <Heading mb={3.5} fontSize={`3xl`}>
            Who to follow
          </Heading>
          <Link href={`/`}>
            <Heading
              fontWeight={400}
              color={`accent`}
              lineHeight={`29px`}
              fontSize={`md`}
            >
              See Suggestions
            </Heading>
          </Link>
        </Flex>
        <Flex flexDir={`column`} gap={5}>
          <FollowersSuggestionCard />
          <FollowersSuggestionCard />
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardRightnav;
