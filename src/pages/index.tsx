import { ContactSection, IntroductionSection, WorkSection } from "@/components";
import {
  TestimonialsSection,
  TestimonialsSectionProps,
} from "@/components/landing/testimonials";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useRef } from "react";
import { client } from "../../sanity/lib/client";
import { testimonialsQuery } from "../../sanity/lib/queries";

export default function Home({
  reviews,
}: {
  reviews: TestimonialsSectionProps["reviews"];
}) {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <Parallax pages={4} style={{ top: "0", left: "0" }} ref={parallax}>
        <IntroductionSection parallax={parallax} />
        <WorkSection parallax={parallax} />
        <TestimonialsSection parallax={parallax} reviews={reviews} />
        <ContactSection parallax={parallax} />
      </Parallax>
    </>
  );
}

export async function getStaticProps() {
  const reviews = await client.fetch(testimonialsQuery);
  return {
    props: {
      reviews,
    },
    revalidate: 60,
  };
}
