import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import GetStartedForm from "./GetStartedForm";

const Banner = () => {
  return (
    <Flex
    p={10}
      gap={7}
      flexDir={`column`}
      alignItems={`center`}
      justifyContent={`center`}
      borderRadius={5}
      bgImage={`url(https://res.cloudinary.com/kingsleysolomon/image/upload/v1665754009/Postit/Rectangle_38_drr60f.png)`}
      w={`100%`}
      h={`15.6rem`}
    >
      <Text fontSize={`xl`} fontWeight={700} textTransform={`capitalize`}>
        Try post
        <Text as={`span`} color={`accent`}>
          it
        </Text>
      </Text>
      <Text textAlign={`center`} fontSize={`xl`}>
        Do you want to write or discover stories from writers on any topic?
      </Text>
      <GetStartedForm size={{ base: `100%`, md: `35%` }} />
    </Flex>
  );
};

export default Banner;
