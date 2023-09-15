import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { getAllPostIds, getPostData, postDataType } from ".";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@/components/markdown/markdownComponents";
import { GetStaticPropsContext } from "next";
import { SwiperGallery, Typography } from "@/components";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { tagColor, tagType } from "@/components/work/WorkCard";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

const Work = ({ postData }: { postData: postDataType }) => {
  const router = useRouter();
  return (
    <Box paddingTop="15vh" px={10} pb={8} overflowY="scroll" h="100vh">
      <HStack justify="space-between">
        <HStack
          flexDir={["column", "row"]}
          align={["flex-start", "center"]}
          flex={1}
          gap={2}
          paddingRight="5%"
        >
          <ChevronLeftIcon
            boxSize="24px"
            cursor="pointer"
            onClick={() => router.back()}
          />
          <Typography variant="h1">{postData.title}</Typography>
          <Typography
            top={2}
            right={2}
            px={2}
            borderRadius="full"
            {...tagColor[postData.tag as tagType]}
          >
            {postData.tag}
          </Typography>
        </HStack>
        <Text>{postData.date}</Text>
      </HStack>
      {Array.isArray(postData.image) ? (
        <SwiperGallery images={postData.image} />
      ) : (
        postData.image && (
          <Image
            src={postData.image}
            alt={postData.title}
            maxH="40vh"
            w="100%"
            mt={2}
            mb={6}
            objectFit="contain"
          />
        )
      )}
      <Box marginTop="5vh" textAlign="center">
        <ReactMarkdown components={markdownComponents}>
          {postData.content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default Work;
