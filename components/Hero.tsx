import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GetStartedForm from "./forms/GetStartedForm";

interface props {
  bgImage?: string;
  image?: string;
  children: ReactNode;
  isHome?: boolean;
}

const Hero = ({ isHome, bgImage, image, children }: props) => {
  return (
    <Flex
      alignItems={`center`}
      py={{ base: 40, md: 0 }}
      bgImage={bgImage}
      height={{ base: `fit-content`, md: `39rem` }}
      bgColor={isHome ? `rgba(0,0,0,0.4)` : `lightBlue`}
      className={`cc-img-fluid`}
      backgroundBlendMode={`multiply`}
    >
      <Container
        display={`flex`}
        flexDir={{ base: `column`, md: `row` }}
        alignItems={`center`}
        className="cc-container"
        gap={5}
      >
        <Box flex={isHome ? `initial` : 1} width={{ base: `100%`, md: `50%` }}>
          {children}
          <GetStartedForm size={{ base: `90%`, md: `100%`, lg: `70%` }} />
        </Box>
        <Box flex={isHome ? 0 : 1} display={image ? `block` : `none`}>
          <Image src={image} alt="img" />
        </Box>
      </Container>
    </Flex>
  );
};

export default Hero;
