import { StyledButton, Typography } from "@/components/common";
import { SectionProps } from "@/type";
import { Flex, Image } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import { ContactSectionParallax } from "./ContactSectionParallax";

export const ContactSection = ({ parallax }: SectionProps) => {
  return (
    <>
      <ContactSectionParallax />
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: "15vh",
        }}
        id="contact"
      >
        <Typography fontSize={["3xl", "5xl"]}>Want to Talk?</Typography>
        <Typography fontSize={["16px", "20px"]} textAlign="center" px={8}>
          {`Programming, Baking Tips, Genshin Impact, Saying Hi?`}
        </Typography>
        <Typography
          fontSize={["16px", "20px"]}
        >{`Drop a message, let’s chat :)`}</Typography>
        <Flex
          gap={4}
          mt={8}
          flexDir={["column", "row"]}
          align="center"
          justify="center"
          zIndex={99}
        >
          <StyledButton
            onClick={() =>
              window.open("mailto:phpich.10@gmail.com?subject=Let's Talk!")
            }
          >
            Email
          </StyledButton>
          <StyledButton href="https://www.linkedin.com/in/pichyapa-khanapattanawong/">
            LinkedIn
          </StyledButton>
          <StyledButton href="https://www.facebook.com/pichyapa.khanapattanawong.3/">
            Facebook
          </StyledButton>
        </Flex>
        <Image
          src={"/assets/landing_page_elements/rainbow.svg"}
          alt="Go back to top"
          h={["30vh", "40vh"]}
          onClick={() => parallax.current.scrollTo(0)}
          bottom="0"
          zIndex={99}
          pos="absolute"
        />
      </ParallaxLayer>
    </>
  );
};
