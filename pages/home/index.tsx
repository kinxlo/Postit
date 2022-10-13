import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "../../components/Hero";

const index = () => {
  return (
    <header>
      <Hero
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665668179/Postit/Rectangle_3_i36ay8.png`}
      >
        <Heading fontSize={`8xl`} as={`h1`}>
          Stay Curious.
        </Heading>
        <Text lineHeight={8} letterSpacing={`wide`}>
          Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa
          velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut.{" "}
        </Text>
      </Hero>
    </header>
  );
};

export default index;
