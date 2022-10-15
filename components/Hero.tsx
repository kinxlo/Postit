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
import GetStartedForm from "./GetStartedForm";

interface props {
  bgImage?: string;
  image?: string;
  children: ReactNode;
}

const Hero = ({ bgImage, image, children }: props) => {
  return (
    <Flex
      alignItems={`center`}
      py={{ base: 40, md: 0 }}
      bgImage={bgImage}
      height={{ base: `fit-content`, md: `39rem` }}
      bgColor={`lightBlue`}
      className={`cc-img-fluid`}
    >
      <Container
        display={`flex`}
        flexDir={{ base: `column`, md: `row` }}
        alignItems={`center`}
        className="cc-container"
      >
        <Box width={{ base: `100%`, md: `50%` }}>
          {children}
          <GetStartedForm size={{ base: `70%` }} />
        </Box>
        <Box display={image ? `block` : `none`}>
          <Image src={image} alt="img" />
        </Box>
      </Container>
    </Flex>
  );
};

export default Hero;
