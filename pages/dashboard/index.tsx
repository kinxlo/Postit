import { Box, Container } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import useSWR from "swr";
import DetailedCard from "../../components/DetailedCard";
import CreateStoryForm from "../../components/forms/CreateStoryForm";
import DashboardLayout from "../../layout/DashboardLayout";
import { NewsService } from "../../utils/axios/NewsService";
import { database } from "../../utils/firebase/firebaseService";

const colRef = collection(database, "Stories");

const Index = () => {
  const [stories, setStories] = useState<object[]>([]);
  // const moreNews = NewsService.getInstance();
  // const { data, error } = useSWR(`/news/list`, moreNews.getNewsData);

  // const getNews = () => {
  //   const { modules } = data;
  //   return modules[2].stories.map((story: object, index: number) => {
  //     return (
  //       <Box key={index}>
  //         <Box my={10}>
  //           <hr />
  //         </Box>
  //         <DetailedCard
  //           data={story}
  //           width={`251px`}
  //           dir={{ base: `column`, md: `row-reverse` }}
  //           fontsize={`2xl`}
  //         />
  //       </Box>
  //     );
  //   });
  // };
  // const setNews: ReactNode = !data ? <div>Loading...</div> : getNews();
  // const getStories = async (url: string) => {};

  useEffect(() => {
    getStories();
  }, []);

  const getStories = () => {
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setStories((prevStories): object[] => {
          return [...prevStories, { ...doc.data(), id: doc.id }];
        });
      });
    });
  };

  const displayStory = stories.map((story, index) => {
    return (
      <Box key={index}>
        <Box my={10}>
          <hr />
        </Box>
        <DetailedCard
          data={story}
          width={`251px`}
          dir={{ base: `column`, md: `row-reverse` }}
          fontsize={`2xl`}
        />
      </Box>
    );
  });


  return (
    <Container px={{ base: 5, md: 0 }} py={5} className={`cc-container`}>
      <CreateStoryForm />
      <Box>{displayStory}</Box>
    </Container>
  );
};

Index.getLayout = function getLayout(component: ReactElement) {
  return <DashboardLayout>{component}</DashboardLayout>;
};

export default Index;
