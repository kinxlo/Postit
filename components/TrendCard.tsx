import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import AvatarDetail from "./AvatarDetail";
import TagLabel from "./TagLabel";

interface Props {
  trendingNews: any;
}

const TrendCard = ({ trendingNews }: Props) => {
  const datePublished = new Date(trendingNews.published);

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
        src={trendingNews.image}
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
        <TagLabel name={trendingNews.secondaryBrands[0]} color={`green`} />
        <Box>
          <AvatarDetail
            date={datePublished.toLocaleDateString()}
            isCard={true}
            name={trendingNews.byline}
            size={`sm`}
          />
          <Text as={`h3`} fontSize={`2xl`} my={5}>
            {trendingNews.title}
          </Text>
          <Text color={`lightgrey`} fontWeight={`thin`} fontSize={`lg`}>
            {/* {datePublished.toLocaleDateString()} */}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TrendCard;
