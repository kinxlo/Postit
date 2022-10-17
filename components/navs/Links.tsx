import { Box, Flex, Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import AuthForm from "../forms/AuthForm";
const AuthModal = dynamic(() => import("../modals/AuthModal"), {
  ssr: false,
});

interface Props {
  isMobile?: boolean;
}

const Links = ({ isMobile }: Props) => {
  return (
    <Flex
      display={{ base: `${isMobile ? `flex` : `none`}`, md: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `white` : `black`}
      alignItems={`center`}
      justifyContent={`space-evenly`}
      fontFamily={`Harmattan`}
      fontSize={{ base: `2rem`, lg: `1.5rem` }}
      gap={10}
      h={`100%`}
    >
      <Box>
        <Link href={`/stories`}>Stories</Link>
      </Box>
      <Box>
        <Link href={`/`}>Contact</Link>
      </Box>
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
  );
};

export default Links;
