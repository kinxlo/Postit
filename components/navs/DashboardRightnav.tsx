import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import DashboardSearchbar from "../forms/DashboardSearchbar";
import DashboardTrendCard from "../DashboardTrendCard";
import FollowersSuggestionCard from "../FollowersSuggestionCard";
import ProfileCrumb from "../ProfileCrumb";
import ProfileStats from "../ProfileStats";

const DashboardRightnav = () => {
  return (
    <Box px={8} py={5} pos={`sticky`} top={0}>
      <Box>
        <ProfileCrumb />
      </Box>
      <Box my={9}>
        <ProfileStats textFZ="md" numFZ="2xl" align="center" />
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
          <FollowersSuggestionCard
            jobSize="xs"
            picSize="md"
            isProfile={false}
            name="Rajash Karim"
            nameSize="2xl"
            job="Photographer, Writer, Frontend Dev"
            img="https://images.unsplash.com/photo-1659535998184-15d6c9f5f873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTIwfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <FollowersSuggestionCard
            jobSize="xs"
            picSize="md"
            isProfile={false}
            name="Sarah Bond"
            nameSize="2xl"
            job="Backend Dev"
            img="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardRightnav;
