import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import dynamic from "next/dynamic";

import React from "react";
import Sidenav from "./Sidenav";
import AuthForm from "./forms/AuthForm";
const AuthModal = dynamic(() => import("../components/modals/AuthModal"), {
  ssr: false,
});

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
          <Flex
            alignItems={`center`}
            fontFamily={`Harmattan`}
            fontSize={`1.5rem`}
            gap={10}
          >
            <Link href={`/stories`}>Stories</Link>
            <Link href={`/`}>Contact</Link>
            <AuthModal
              title="Welcome Back"
              subtitle="Enter the email address associated with your account, and we’ll send a magic link to your inbox."
              isSignedIn={true}
            >
              <AuthForm isGetStarted={true} />
            </AuthModal>
            <AuthModal
              title="Join Postit."
              subtitle="Enter your email address to create an account on Postit."
              isSignedIn={false}
            >
              <AuthForm isGetStarted={false} />
            </AuthModal>
          </Flex>
        </Flex>
        <Sidenav />
      </Flex>
    </Container>
  );
};

export default Navbar;
