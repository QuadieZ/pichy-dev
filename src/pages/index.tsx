import { ContactSection, IntroductionSection, WorkSection } from "@/components";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useRef } from "react";

export default function Home() {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <Parallax pages={4} style={{ top: "0", left: "0" }} ref={parallax}>
        <IntroductionSection parallax={parallax} />
        <WorkSection parallax={parallax} />
        <TestimonialsSection parallax={parallax} />
        <ContactSection parallax={parallax} />
      </Parallax>
    </>
  );
}
