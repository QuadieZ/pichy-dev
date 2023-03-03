import { MenuCard, MenuCardProps, Typography } from "@/components/common";
import { SectionProps } from "@/type";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { WorkSectionBackgroundParallax } from "./WorkSectionBackgroundParallax";

export const WorkSection = ({ parallax }: SectionProps) => {
  const { push } = useRouter();

  const workMenus: MenuCardProps[] = [
    {
      title: "Work",
      description: "Work experiences, Competition, Projects",
      src: "/assets/landing_page_elements/work.svg",
      alt: "Working Girl Doodle",
      onClick: () => push("/work"),
    },
    {
      title: "Community",
      description: "Voluntary work and projects for the communtiy",
      src: "/assets/landing_page_elements/community.svg",
      alt: "Girl in hoodie Doodle",
      onClick: () => push("/work"),
    },
    {
      title: "Personal",
      description: "Side projects and exchange experiences",
      src: "/assets/landing_page_elements/personal.svg",
      alt: "Traveling girl Doodle",
      onClick: () => push("/work"),
    },
  ];

  return (
    <>
      <WorkSectionBackgroundParallax />
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          zIndex={-1}
          onClick={() => parallax.current.scrollTo(2)}
        />
        <VStack align="flex-start">
          <Typography variant="h1">{`What I'm working on:`}</Typography>
          <HStack w={["80vw", "60vw"]}>
            <VStack flex={1} gap={2}>
              {workMenus.map((menu) => (
                <MenuCard key={menu.title} {...menu} />
              ))}
            </VStack>
          </HStack>
        </VStack>
      </ParallaxLayer>
    </>
  );
};
