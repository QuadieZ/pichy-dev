import { useRef } from "react";
import { Parallax, IParallax } from "@react-spring/parallax";
import { ContactSection, IntroductionSection, WorkSection } from "@/components";

export default function Home() {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <Parallax pages={3} style={{ top: "0", left: "0" }} ref={parallax}>
        <IntroductionSection parallax={parallax} />
        <WorkSection parallax={parallax} />
        <ContactSection parallax={parallax} />
      </Parallax>
    </>
  );
}
