import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import dynamic from "next/dynamic";

import React from "react";
import Sidenav from "./Sidenav";
import Links from "./Links";

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
        <Links />
        <Sidenav />
      </Flex>
    </Container>
  );
};

export default Navbar;
