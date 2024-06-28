import { Typography } from "@/components/common";
import { ReviewCard, ReviewCardProps } from "@/components/common/ReviewCard";
import { SectionProps } from "@/type";
import { Box, VStack } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { ReviewSwiper } from "../ReviewSwiper";

const reviews: ReviewCardProps[] = [
  {
    name: "Tobias Meixner, Co-Founder @ Hubql & Brikl",
    review:
      "Putter is one of the few rare, young talents - smart, motivated and result-oriented as a developer. Even as a part-time student she has worked well along others delivering measurable outcomes for our team.",
    src: "/review/tobias.jpeg",
  },
  {
    name: "Vitaya (Top) Jealwarakun, UI Engineer @ Brikl",
    review:
      "I have worked with Putter for a year as a UI Engineer. Putter is eager to learn and tackles even the biggest challenges head-on. She effectively solves any issues she encounters and excels in communicating with many people, a crucial skill for a UI Engineer.",
    src: "/review/top.jpeg",
  },
  {
    name: "DevA Founders",
    review:
      "You're great at multitasking and managing time, even under stress. Your tech skills and quick learning have been a huge help, and you always deliver on time. Plus, your humor, responsibility, and clear communication in English make you an awesome team member.",
    src: "/review/deva.png",
  },
];

export const TestimonialsSection = ({ parallax }: SectionProps) => {
  const { push } = useRouter();

  return (
    <>
      <ParallaxLayer
        offset={2}
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
          onClick={() => parallax.current.scrollTo(3)}
        />
        <VStack
          align="center"
          justify="center"
          gap={8}
          w="80%"
          overflow="visible"
          h={["100%", "100%", "60%"]}
          pb={[10, 10, 0]}
        >
          <Typography
            variant="h1"
            textAlign="center"
          >{`What's it like to work with me?`}</Typography>
          <ReviewSwiper
            cards={reviews.map((review) => (
              <ReviewCard {...review} key={review.name} />
            ))}
          />
        </VStack>
      </ParallaxLayer>
    </>
  );
};
