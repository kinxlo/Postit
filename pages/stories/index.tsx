import {
  Container,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React, { ReactElement, ReactNode, useState } from "react";
import DetailedCard from "../../components/DetailedCard";
import Hero from "../../components/Hero";
import Layout from "../../layout/Layout";

const Index = () => {
  const [posts, setPosts] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const postsCards = posts.map((post, index) => {
    return (
      <DetailedCard
        key={index}
        isStories={true}
        fontsize={`xl`}
        dir={`column`}
      />
    );
  });
  return (
    <main>
      <header>
        <Hero
          bgImage={undefined}
          image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665783356/Postit/unsplash_Z2bJeJQRbW0_x2xngm.png`}
        >
          <Heading fontSize={`7xl`} as={`h1`}>
            <Highlight query={`it`} styles={{ color: `accent` }}>
              You’ve got a story, Postit.
            </Highlight>
          </Heading>
          <Text mb={12} lineHeight={8} letterSpacing={`wide`}>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </Text>
        </Hero>
      </header>
      <Container my={24} className={`cc-container`}>
        <SimpleGrid gap={12} columns={{ base: 1, md: 3 }}>
          {postsCards}
        </SimpleGrid>
      </Container>
    </main>
  );
};


Index.getLayout = function getLayout(component: ReactElement) {
  return <Layout>{component}</Layout>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx);

  return {
    props: {},
  };
};

export default Index;
