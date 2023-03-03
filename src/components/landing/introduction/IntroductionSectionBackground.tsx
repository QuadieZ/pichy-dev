import { Flex, Image } from "@chakra-ui/react";

export const IntroductionSectionBackground = () => (
  <Flex
    w="100%"
    h="100%"
    bg="brand.primary"
    borderBottomRadius="100px"
    overflow="hidden"
    position="absolute"
    zIndex={1}
  >
    <Image
      src={"/assets/landing_page_elements/top_left_el.svg"}
      alt="decorating cloud"
      w={["25vh", "32vh", "32vh"]}
      top="20"
      position="absolute"
    />
    <Image
      src={"/assets/landing_page_elements/left_el.svg"}
      alt="decoration cloud"
      w="35vh"
      bottom="-10"
      left="20"
      display={["none", "none", "block"]}
      position="absolute"
    />
    <Image
      src={"/assets/landing_page_elements/right_el.svg"}
      alt="decoration cloud"
      w={["50vh", "80vh", "80vh"]}
      bottom="-20"
      right="0"
      position="absolute"
    />
  </Flex>
);
