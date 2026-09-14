import { Typography } from "@/components";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Select,
  Stack,
} from "@chakra-ui/react";
import { tagType, WorkCard } from "@/components/work/WorkCard";
import { useRouter } from "next/router";
import { useState } from "react";
import { sortDateString } from "@/util/sortDateString";
import { client } from "../../../sanity/lib/client";
import {
  workPostBySlugQuery,
  workPostSlugsQuery,
  workPostsQuery,
} from "../../../sanity/lib/queries";

export type postDataType = {
  id: string;
  content: string;
  title: string;
  startDate?: string;
  date: string;
  image?: string[];
  tag: tagType;
};

export async function getAllPostIds() {
  const ids: { id: string }[] = await client.fetch(workPostSlugsQuery);

  return ids.map(({ id }) => ({
    params: { id },
  }));
}

export async function getAllPostsData(): Promise<postDataType[]> {
  return client.fetch(workPostsQuery);
}

export async function getPostData(id: string): Promise<postDataType> {
  return client.fetch(workPostBySlugQuery, { slug: id });
}

const WorkIndex = ({ postData }: { postData: postDataType[] }) => {
  const { asPath } = useRouter();
  const paths = asPath.split("#");
  const splitPath = paths[paths.length - 1];
  const defaultFilter = splitPath.includes("/") ? undefined : splitPath;

  const [currentFilter, setCurrentFilter] = useState(defaultFilter);

  return (
    <Flex paddingTop="15vh" h="100vh" flexDir="column" gap={8}>
      <HStack px={10} justify="space-between">
        <Stack spacing={0} gap={0}>
          <Typography>Welcome to</Typography>
          <Typography fontSize={["2xl", "4xl"]}>My Work</Typography>
        </Stack>
        <Box w={["40%", "40%", "30%", "20%"]}>
          <Select
            placeholder="All Work"
            defaultValue={defaultFilter}
            onChange={(e) => setCurrentFilter(e.target.value)}
            bg="white"
          >
            <option value="work" label="Work" />
            <option value="community" label="Community" />
            <option value="personal" label="Personal" />
          </Select>
        </Box>
      </HStack>
      <Grid
        w="100%"
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={4}
        overflowY="scroll"
        pb={8}
        px={10}
      >
        {postData
          .sort(
            (a, b) =>
              sortDateString(a.date, b.date) ||
              sortDateString(a.startDate ?? "", b.startDate ?? "")
          )
          .filter((post) => (currentFilter ? post.tag == currentFilter : post))
          .map((post) => (
            <GridItem key={post.title}>
              <WorkCard
                href={post.id}
                title={post.title}
                image={post.image}
                tag={post.tag}
              />
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export async function getStaticProps() {
  const postData = await getAllPostsData();
  return {
    props: {
      postData,
    },
    revalidate: 60,
  };
}

export default WorkIndex;
