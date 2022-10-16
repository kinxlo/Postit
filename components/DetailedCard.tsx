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
}

const DetailedCard = ({ dir, height, fontsize, width, isStories }: Props) => {
  return (
    <Box mb={10}>
      <Flex
        justifyContent={`space-between`}
        flexDirection={dir}
        gap={isStories ? 5 : 10}
        mb={{ base: 7 }}
      >
        <Box pos={`relative`} bg={`green`} w={width} h={height}>
          <Image
            borderRadius={5}
            className={`cc-img-fluid`}
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
          <Box
            p={5}
            pos={`absolute`}
            bottom={0}
            left={0}
            display={isStories ? `block` : `none`}
          >
            <TagLabel color={`green`} name={`Nature`} />
          </Box>
        </Box>
        <Flex
          flexDir={`column`}
          alignItems={`start`}
          justifyContent={`space-between`}
          gap={3}
        >
          <Box display={isStories ? `none` : `block`}>
            <TagLabel color={`green`} name={`Nature`} />
          </Box>
          <Text fontWeight={600} fontSize={fontsize}>
            The 20 Biggest Agro Companies In Nigeria 2022
          </Text>
          <AvatarDetail size={`xs`} name={`Kingsley solomon`} />
        </Flex>
      </Flex>
      <Text mb={2} color={`#787878`}>
        Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam
        adipiscing massa. Nec ornare leo consequat, sociis. Tellus nisl,
        porttitor eniilisi vel. Velit ornare eget sit condimentum ultricies
        diam. Ultrices leudin commodo et. Commodo eu, vedefrstibulum tincidunt
        ametum vel, arcu.
      </Text>
      <Link color={isStories ? `accent` : `red`}>Read More...</Link>
    </Box>
  );
};

export default DetailedCard;
