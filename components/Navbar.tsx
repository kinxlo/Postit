import { Button, Container, Flex, Image, Link } from "@chakra-ui/react";

import React from "react";
import Sidenav from "./Sidenav";

const Navbar = () => {
  return (
    <Container className="cc-container">
      <Flex py={9} justifyContent={`space-between`} alignItems={`center`}>
        <Link href={`/`}>
          <Image
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1665662746/Postit/Postit_1_qwwsh0.png"
            alt="postit"
          />
        </Link>
        <Flex
          display={{ base: `none`, md: `flex` }}
          alignItems={`center`}
          gap={7}
        >
          <Flex fontFamily={`Harmattan`} fontSize={`1.5rem`}>
            <Link href={`/`}>Stories</Link>
            <Link href={`/`} mx={7}>
              Contact
            </Link>
            <Link href={`/`}>Sign In</Link>
          </Flex>
          <Button size={`sm`} bgColor={`assent`} px={7} py={5} color={`white`}>
            Get Started
          </Button>
        </Flex>
        <Sidenav />
      </Flex>
    </Container>
  );
};

export default Navbar;
