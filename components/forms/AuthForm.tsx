import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  isGetStarted: boolean;
}

const AuthForm = ({ isGetStarted }: Props) => {
  const toast = useToast({
    title: "Check your inbox.",
    description: "Check your email address to complete your account set-up.",
    status: `success`,
    duration: 5000,
    isClosable: true,
    position: `bottom-left`,
    containerStyle: {
      borderRadius: `10px`,
      fontSize: `sm`,
    },
  });

  return (
    <Box>
      <FormControl>
        <Input
          mb={6}
          fontSize={`sm`}
          type={`email`}
          variant={`flushed`}
          placeholder={`Your email address`}
          _placeholder={{ textAlign: `center` }}
        />
        <Link href={`/dashboard`}>
          <Button py={3} size={`lg`} bg={`accent`} w={`100%`} color={`white`}>
            Continue
          </Button>
        </Link>
        <Box px={10} my={10} pos={`relative`}>
          <hr />
          <Text
            fontFamily={`Harmattan`}
            fontSize={`2xl`}
            pos={`absolute`}
            top={`50%`}
            left={`50%`}
            px={5}
            borderRadius={`100%`}
            transform={`translate(-50%, -50%)`}
            bg={`white`}
          >
            or
          </Text>
        </Box>
        <Flex flexDir={`column`} gap={5}>
          <Button
            onClick={() => toast()}
            size={`lg`}
            w={`100%`}
            borderRadius={`8px`}
            variant={`outline`}
            borderColor={`black`}
            fontSize={`sm`}
            letterSpacing={`.5px`}
          >
            <Image
              mr={3}
              src={`https://img.icons8.com/color/24/000000/google-logo.png`}
              alt="google"
            />
            Continue with Google
          </Button>
          <Button
            onClick={() => toast()}
            size={`lg`}
            w={`100%`}
            borderRadius={`8px`}
            variant={`outline`}
            borderColor={`black`}
            fontSize={`sm`}
            letterSpacing={`.5px`}
          >
            <Image
              mr={3}
              src={`https://img.icons8.com/color/24/000000/twitter--v1.png`}
              alt="twitter"
            />
            Continue with Twitter
          </Button>
        </Flex>
        <Box>
          <Text
            display={isGetStarted ? `none` : `block`}
            fontWeight={600}
            my={10}
            textAlign={`center`}
          >
            Already have an account?{" "}
            <Link href={`/`}>
              <Text as={`span`} color={`accent`}>
                Sign In
              </Text>
            </Link>{" "}
          </Text>
          <Text
            display={isGetStarted ? `block` : `none`}
            fontWeight={600}
            my={10}
            textAlign={`center`}
          >
            Dont&apos;t have an account?{" "}
            <Link href={`/`}>
              <Text as={`span`} color={`accent`}>
                Get Started
              </Text>
            </Link>{" "}
          </Text>
        </Box>
      </FormControl>
    </Box>
  );
};

export default AuthForm;
