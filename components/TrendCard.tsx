import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import AvatarDetail from "./AvatarDetail";
import TagLabel from "./TagLabel";

const TrendCard = () => {
  return (
    <Box
      bg={`linear-gradient(0deg, rgba(41, 41, 41, 0.65), rgba(41, 41, 41, 0.65))`}
      borderRadius={5}
      w={`100%`}
      h={`100%`}
      pos={`relative`}
      overflow={`hidden`}
    
    >
      <Image
        mixBlendMode={`multiply`}
        src={`https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
        alt="trending-stories"
        className={`cc-img-fluid`}
      />
      <Flex
        flexDir={`column`}
        alignItems={`start`}
        justifyContent={`space-between`}
        color={`white`}
        p={6}
        pos={`absolute`}
        top={0}
        left={0}
        w={`100%`}
        h={`100%`}
      >
        <TagLabel name={`Nature`} color={`green`} />
        <Box>
          <AvatarDetail name={`kingsley solomon`} size={`sm`} />
          <Text as={`h3`} fontSize={`2xl`} my={5}>
            The 20 Biggest Agro Companies In Nigeria 2022
          </Text>
          <Text color={`lightgrey`} fontWeight={`thin`} fontSize={`lg`}>
            May 21, 2022
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TrendCard;
