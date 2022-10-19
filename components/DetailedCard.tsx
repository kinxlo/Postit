import {
  Box,
  Flex,
  Image,
  Link,
  ResponsiveValue,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AvatarDetail from "./AvatarDetail";
import TagLabel from "./TagLabel";

interface Props {
  //bad type diclearation but neccessary
  dir: any;
  height?: string;
  width?: string;
  fontsize: string;
  isStories?: boolean;
  data: any;
}

const DetailedCard = ({
  dir,
  height,
  fontsize,
  width,
  isStories,
  data,
}: Props) => {
  const datePublished = new Date(data.published);

  return (
    <Flex flexDir={`column`} justifyContent={`space-between`} mb={10}>
      <Flex
        justifyContent={`space-between`}
        flexDirection={dir}
        gap={isStories ? 5 : 10}
        mb={{ base: 7 }}
      >
        <Box
          borderRadius={5}
          pos={`relative`}
          overflow={`hidden`}
          bg={`green`}
          w={width}
          h={height}
        >
          <Image className={`cc-img-fluid`} src={data.image} alt="img" />
          <Box
            p={5}
            pos={`absolute`}
            bottom={0}
            left={0}
            display={isStories ? `block` : `none`}
          >
            <TagLabel color={`green`} name={data.secondaryBrands[0]} />
          </Box>
        </Box>
        <Flex
          flexDir={`column`}
          alignItems={`start`}
          justifyContent={`space-between`}
          gap={3}
        >
          <Box display={isStories ? `none` : `block`}>
            <TagLabel color={`green`} name={data.secondaryBrands[0]} />
          </Box>
          <Text fontWeight={600} fontSize={fontsize}>
            {data.title}
          </Text>
          <AvatarDetail
            date={datePublished.toLocaleDateString()}
            size={`xs`}
            name={data.byline}
          />
        </Flex>
      </Flex>

      <Flex
        h={`10rem`}
        justifyContent={`space-between`}
        flexDir={`column`}
      >
        <Text mb={2} color={`#787878`}>
          {data.autoGeneratedSummary.slice(0, 200)}...
        </Text>
        <Link color={isStories ? `accent` : `red`}>Read More...</Link>
      </Flex>
    </Flex>
  );
};

export default DetailedCard;
