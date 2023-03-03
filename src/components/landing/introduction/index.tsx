import { NavigationBar, Typography } from "@/components";
import { SectionProps } from "@/type";
import { Flex, Image, VStack } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import { IntroductionSectionBackground } from "./IntroductionSectionBackground";

export const IntroductionSection = ({ parallax }: SectionProps) => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          position: "relative",
        }}
      >
        <IntroductionSectionBackground />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={2}
        onClick={() => parallax.current.scrollTo(1)}
      >
        <VStack
          h="100vh"
          w="100vw"
          align={["center", "start", "start"]}
          justify="center"
          position="absolute"
          zIndex={50}
          spacing={1}
          pl={[0, "20vw", "20vw"]}
          pb={["10vh", 0, "10vh"]}
        >
          <Typography variant="body1">Hello! 👋🏻</Typography>
          <Typography fontSize={["5xl", "7xl"]}>I’m Putter,</Typography>
          <Flex bg="white" py={1} px={4} borderRadius="full">
            <Typography>Developer, Designer, Learner </Typography>
          </Flex>
        </VStack>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={1.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => parallax.current.scrollTo(1)}
      >
        <Image
          src={"/assets/landing_page_elements/char.svg"}
          alt="cloud"
          h="125%"
          ml="35vw"
          display={["none", "none", "none", "block"]}
          marginTop="30vh"
          zIndex={20}
        />
      </ParallaxLayer>
      <NavigationBar />
    </>
  );
};
