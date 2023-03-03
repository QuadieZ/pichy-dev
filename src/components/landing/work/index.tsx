import { MenuCard } from "@/components/common";
import { SectionProps } from "@/type";
import { ParallaxLayer } from "@react-spring/parallax";
import { WorkSectionBackgroundParallax } from "./WorkSectionBackgroundParallax";

export const WorkSection = ({ parallax }: SectionProps) => {
  return (
    <>
      <WorkSectionBackgroundParallax />
      <ParallaxLayer
        offset={1}
        speed={1}
        onClick={() => parallax.current.scrollTo(2)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MenuCard
          title="Work"
          description="Work experiences, Competition, Projects"
        />
      </ParallaxLayer>
    </>
  );
};
