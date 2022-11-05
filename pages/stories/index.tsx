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
import { NewsService } from "../../utils/axios/NewsService";

const Index = (props: any) => {
  const postsCards = props.popularStories.map((story: any) => {
    return (
      <DetailedCard
        data={story}
        key={story.internalID}
        isStories={true}
        fontsize={`xl`}
        dir={`column`}
        height={`20rem`}
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
  const news = NewsService.getInstance();

  const popularStories = await news.getNewsData(`/news/list`, { id: "latest" });

  return {
    props: {
      popularStories: popularStories.modules[0].stories,
    },
  };
};

export default Index;

// import React, { ReactElement } from "react";
// import Layout from "../../layout/Layout";

// const Index = () => {
//   return <div>Story page</div>;
// };

// Index.getLayout = function getLayout(component: ReactElement) {
//   return <Layout>{component}</Layout>;
// };

// export default Index;
