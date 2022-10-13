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
          <InputGroup my={12} w={`70%`} size="md">
            <Input
              type={`email`}
              borderRadius={`5px 0 0 5px`}
              border={`1px solid white!`}
              bgColor={`white`}
              placeholder="Email address"
            />
            <Button
              borderRadius={`0 5px 5px 0`}
              size={`sm`}
              bgColor={`accent`}
              px={7}
              py={5}
              color={`white`}
            >
              Get Started
            </Button>
          </InputGroup>
        </Box>
      </Container>
    </Flex>
  );
};

export default Hero;
