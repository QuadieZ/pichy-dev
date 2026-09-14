import { Typography } from "@/components/common";
import { ReviewCard, ReviewCardProps } from "@/components/common/ReviewCard";
import { SectionProps } from "@/type";
import { Box, VStack } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { ReviewSwiper } from "../ReviewSwiper";

export type TestimonialsSectionProps = SectionProps & {
  reviews: ReviewCardProps[];
};

export const TestimonialsSection = ({
  parallax,
  reviews,
}: TestimonialsSectionProps) => {
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
