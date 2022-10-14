import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GetStartedForm from "./GetStartedForm";

interface props {
  image: string;
  children: ReactNode;
}

const Hero = ({ image, children }: props) => {
  return (
    <Flex
      alignItems={`center`}
      bgImage={image}
      height={`39em`}
      bgColor={`accent`}
      className={`cc-img-fluid`}
    >
      <Container className="cc-container">
        <Box width={{ base: `100%`, md: `50%` }}>
          {children}
          <GetStartedForm size={`70%`} />
        </Box>
      </Container>
    </Flex>
  );
};

export default Hero;
