import { Button, Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
import Sidenav from "./Sidenav";

const Navbar = () => {
  return (
    <Container className="cc-container">
      <Flex py={9} justifyContent={`space-between`} alignItems={`center`}>
        <Link href={`/`}>
          <Image
            cursor={`pointer`}
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1665662746/Postit/Postit_1_qwwsh0.png"
            alt="postit"
          />
        </Link>
        <Flex
          display={{ base: `none`, md: `flex` }}
          alignItems={`center`}
          gap={7}
        >
          <Flex fontFamily={`Harmattan`} fontSize={`1.5rem`} gap={10}>
            <Link href={`/stories`}>Stories</Link>
            <Link href={`/`}>Contact</Link>
            <Link href={`/`}>Sign In</Link>
          </Flex>
          <Button size={`sm`} bgColor={`accent`} px={7} py={5} color={`white`}>
            Get Started
          </Button>
        </Flex>
        <Sidenav />
      </Flex>
    </Container>
  );
};

export default Navbar;
