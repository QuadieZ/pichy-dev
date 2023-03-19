import { Image } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";

export const ContactSectionParallax = () => {
  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={-0.2}
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <Image
          src={"/assets/star.svg"}
          alt="decoration star"
          h="12vh"
          ml="15vw"
          mt="5vh"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={-0}
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <Image
          src={"/assets/star.svg"}
          alt="decoration star"
          h="14vh"
          ml="85vw"
          mt="50vh"
        />
      </ParallaxLayer>
    </>
  );
};
