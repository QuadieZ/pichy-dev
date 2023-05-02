import { StyledButton, Typography } from "@/components";
import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import { useRef } from "react";

const About = () => {
  const detailRef = useRef<null | HTMLDivElement>(null);
  return (
    <>
      <Flex
        w="100vw"
        minH="100vh"
        h="fit-content"
        align="center"
        justify={["flex-start", "flex-start", "flex-start", "center"]}
        gap={8}
        pt={[20, 20, 40, 10]}
        flexDir={["column", "column", "column", "row"]}
      >
        <Image
          src="/assets/about_elements/pich.svg"
          alt="Pich's IRL Picture"
          h={["50vh", "50vh", "50vh", "65vh"]}
        />
        <VStack align="flex-start" w={["70%", "70%", "70%", "40%"]} gap={4}>
          <VStack align="flex-start" gap={0}>
            <Typography variant="h1">{`Hey, I’m Putter !`}</Typography>
            <Typography variant="h1">{`But you can call me Pich.`}</Typography>
          </VStack>
          <Typography>
            {`I’m currently studying in Computer Engineering, KMUTT, as the holder
            of Petchra Phra Jom Klao Scholarship. I currently have 2 years of working experience
            as a junior Developer Advocate and a UI Engineer.`}
          </Typography>
          <Typography>
            {`I love to work with visuals, graphics,
            front-end development, and game development. Out of work, I’m also a
            baker, an artist, and a gamer :)`}
          </Typography>
          <StyledButton
            onClick={() =>
              detailRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            More about me
          </StyledButton>
        </VStack>
      </Flex>

      <Flex w="100%" px={16}>
        <Box
          w="100%"
          my={12}
          display={["block", "block", "block", "none"]}
          bgColor="brand.primary"
          h={1}
        />
      </Flex>
      <Flex
        w="100vw"
        minH="100vh"
        h="fit-content"
        ref={detailRef}
        p={[0, 0, 0, 16]}
        align="center"
        justify={["flex-start", "flex-start", "center", "center"]}
        flexDir={["column", "column", "column", "row"]}
        gap={16}
      >
        <VStack
          align="flex-start"
          justify="center"
          w={["70%", "70%", "70%", "50%"]}
          gap={4}
        >
          <Typography fontSize={["2xl", "4xl"]}>Up until now...</Typography>
          <Typography>
            {`I was a part of the organizer team to organize a few tech events back in 2020,
              which led to my first job as a Junior Developer Advocate.
              From there, with my passion for programming and innovations, I've worked my way
              up as a front-end developer, working as a UI engineer for one year.
              Currently, I'm pursuing Computer Engineering Bachelor's Degree and 
              my interest in game development. I'm open for part-time jobs and internship opportunity!
            `}
          </Typography>
          <Typography
            color="content.highlight"
            fontWeight="semibold"
            onClick={() =>
              window.open("mailto:phpich.10@gmail.com?subject=Let's Talk!")
            }
            textDecor="underline"
            cursor="pointer"
          >
            {`I'm open for part-time jobs and internship opportunity!`}
          </Typography>
          <VStack align="flex-start">
            <Typography variant="body1">My Resumes</Typography>
            <HStack>
              <StyledButton href="/documents/Resume_Frontend_Pichyapa_Khanapattanawong.pdf">
                Front-end Development
              </StyledButton>
              <StyledButton href="/documents/Resume_GameDev_Pichyapa.pdf">
                Game Development
              </StyledButton>
            </HStack>
          </VStack>
        </VStack>
        <Image
          src="/assets/about_elements/working.png"
          alt="Pich's IRL Picture"
          h={["30vh", "30vh", "30vh", "40vh"]}
          mb={[16, 12, 12, 0]}
        />
      </Flex>
    </>
  );
};

export default About;
