import { BoxProps, Heading, Text, TextProps } from "@chakra-ui/react";

// Types
export type HeadingType = "h1" | "h2" | "h3";
export type TextType = "body1" | "body2" | "body3" | "description";
export type TypographyProps = BoxProps & {
  variant?: HeadingType | TextType;
};

// Styles
export const typographyStyles: Record<HeadingType | TextType, TextProps> = {
  h1: {
    fontSize: "24px",
    fontWeight: "semibold",
  },
  h2: {
    fontSize: "20px",
    fontWeight: "semibold",
  },
  h3: {
    fontSize: "16px",
    fontWeight: "semibold",
  },
  body1: {
    fontSize: "24px",
  },
  body2: {
    fontSize: "20px",
  },
  body3: {
    fontSize: "16px",
  },
  description: {
    fontSize: "12px",
    color: "content.description",
  },
};

export const Typography = (props: TypographyProps) => {
  const { variant = "body3", ...rest } = props;
  const isHeading = ["h1", "h2", "h3", "h4"].includes(variant);

  console.log("test");
  if (isHeading) return <Heading {...typographyStyles[variant]} {...rest} />;
  return <Text {...typographyStyles[variant]} {...rest} />;
};
