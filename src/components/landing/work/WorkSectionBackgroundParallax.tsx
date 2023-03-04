import { Image } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";

export const WorkSectionBackgroundParallax = () => (
  <>
    <ParallaxLayer offset={1} speed={-0}>
      <Image
        src={"/assets/star.svg"}
        alt="decoration star"
        h={["12%", "15%", "18%"]}
        ml="78vw"
        mt="4vh"
      />
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={2.5}>
      <Image
        src={"/assets/blue_cloud.svg"}
        alt="decoration cloud"
        h={["4%", "7%", "10%"]}
        ml="90vw"
        mt="80vh"
      />
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={2}>
      <Image
        src={"/assets/blue_cloud.svg"}
        alt="decoration cloud"
        h={["22%", "25%", "28%"]}
        ml="-5vw"
        mt={["75vh", "70vh", "65vh"]}
      />
    </ParallaxLayer>
  </>
);
