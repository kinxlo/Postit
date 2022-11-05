import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Hero from "../components/Hero";
import TrendCard from "../components/TrendCard";
import DetailedCard from "../components/DetailedCard";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
// import { BingNewsService } from "../utils/axios/BingNewsServices";
import QuickUpdateNews from "../components/QuickUpdateNews";
import { GetServerSideProps } from "next";
import { NewsService } from "../utils/axios/NewsService";

const Index = (props: any) => {
  const grid: object = {
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
    xl: "repeat(5, 1fr)",
    "2xl": "repeat(5, 1fr)",
  };

  const span = {
    gridColumn: "span 2 / auto",
  };

  const popularStories = props.popularStories.map((story: any) => {
    return (
      <DetailedCard
        data={story}
        key={story.internalID}
        fontsize={`lg`}
        width={`13rem`}
        dir={`row-reverse`}
      />
    );
  });

  return (
    <main>
      <header>
        <Hero
          isHome={true}
          image={undefined}
          bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1665668179/Postit/Rectangle_3_i36ay8.png`}
        >
          <Heading color={`white`} fontSize={`8xl`} as={`h1`}>
            <Highlight query="us" styles={{ color: `accent` }}>
              Stay Curious.
            </Highlight>
          </Heading>
          <Text color={`white`} mb={12} lineHeight={8} letterSpacing={`wide`}>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </Text>
        </Hero>
      </header>
      <Container
        py={`1rem`}
        my={16}
        mb={24}
        border={`0.5px solid lightgrey`}
        borderRadius={5}
        className={`cc-container`}
      >
        <QuickUpdateNews newsData={props.quickUpdateNews} />
      </Container>
      <Container mb={24} className={`cc-container`}>
        <Heading>Trending Stories</Heading>
        <Grid
          templateRows={{ base: `repeat(2, 1fr)` }}
          templateColumns={{ base: `repeat(12, 1fr)` }}
          alignItems={`end`}
          gap={4}
        >
          <GridItem
            h={{ base: `25rem`, md: `34.5rem` }}
            rowSpan={{ base: 0, md: 2 }}
            colSpan={{ base: 12, md: 4 }}
          >
            <TrendCard trendingNews={props.trendingNews[0]} />
          </GridItem>
          <GridItem
            h={{ base: `25rem`, md: `16rem` }}
            rowSpan={{ base: 0, md: 0 }}
            colSpan={{ base: 12, md: 8 }}
          >
            <TrendCard trendingNews={props.trendingNews[1]} />
          </GridItem>
          <GridItem
            h={{ base: `25rem`, md: `17.6rem` }}
            rowSpan={{ base: 0, md: 0 }}
            colSpan={{ base: 12, md: 4 }}
          >
            <TrendCard trendingNews={props.trendingNews[2]} />
          </GridItem>
          <GridItem
            h={{ base: `25rem`, md: `17.6rem` }}
            rowSpan={{ base: 0, md: 0 }}
            colSpan={{ base: 12, md: 4 }}
          >
            <TrendCard trendingNews={props.trendingNews[3]} />
          </GridItem>
        </Grid>
      </Container>
      <Container mb={24} className={`cc-container`}>
        <Heading mb={7}>Popular Stories</Heading>
        <SimpleGrid gap={10} columns={{ base: 1, md: 2 }}>
          <Box>
            <DetailedCard
              data={props.singleStory}
              fontsize={`2xl`}
              height={`22rem`}
              dir={`column`}
            />
          </Box>
          <Box>
            {popularStories}
          </Box>
        </SimpleGrid>
      </Container>
      <Container mb={24} className={`cc-container`}>
        <Banner />
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
  const generateRandomNumber = () => {
    const randomInt = Math.floor(Math.random() * 39 + 1);
    return randomInt;
  };

  const quickUpdateNews = await news.getNewsData(`/news/list`, {
    id: "politics",
  });

  const trendingNews = await news.getNewsData(`/news/list`, { id: "markets" });
  const popularStories = await news.getNewsData(`/news/list`, { id: "latest" });

  return {
    props: {
      quickUpdateNews: quickUpdateNews.modules[7].stories, // bb politics
      trendingNews: trendingNews.modules[2].stories.slice(0, 4),
      popularStories: popularStories.modules[0].stories.splice(0, 3),
      singleStory: popularStories.modules[0].stories[generateRandomNumber()],
    },
  };
};

export default Index;

// import React, { ReactElement } from "react";
// import Layout from "../layout/Layout";

// const Index = () => {
//   return <div>Home page</div>;
// };

// Index.getLayout = function getLayout(component: ReactElement) {
//   return <Layout>{component}</Layout>;
// };

// export default Index;
