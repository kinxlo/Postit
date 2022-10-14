import { Box, Flex, Image, ResponsiveValue, Text } from "@chakra-ui/react";
import React from "react";
import AvatarDetail from "./AvatarDetail";
import TagLabel from "./TagLabel";

interface Props {
  //bad type diclearation but neccessary
  dir: any;
  height?: string;
  width?: string;
  fontsize: string;
}

const DetailedCard = ({ dir, height, fontsize, width }: Props) => {
  return (
    <Box mb={10}>
      <Flex justifyContent={`start`} flexDirection={dir} gap={10} mb={{ base: 7 }}>
        <Box bg={`green`} w={width} h={height}>
          <Image
            className={`cc-img-fluid`}
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </Box>
        <Flex
          flexDir={`column`}
          alignItems={`start`}
          justifyContent={`space-between`}
          gap={3}
        >
          <TagLabel color={`green`} name={`Nature`} />
          <Text fontWeight={600} fontSize={fontsize}>
            The 20 Biggest Agro Companies In Nigeria 2022
          </Text>
          <AvatarDetail size={`xs`} name={`Kingsley solomon`} />
        </Flex>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam
        adipiscing massa. Nec ornare leo consequat, sociis. Tellus nisl,
        porttitor eniilisi vel. Velit ornare eget sit condimentum ultricies
        diam. Ultrices leudin commodo et. Commodo eu, vedefrstibulum tincidunt
        ametum vel, arcu.
      </Text>
    </Box>
  );
};

export default DetailedCard;
