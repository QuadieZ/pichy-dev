import { LinkProps } from "@chakra-ui/react";
import { Typography, TypographyProps } from "../common";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Heading1 = (props: TypographyProps) => (
  <Typography variant="h1" my={4} {...props} />
);
const Heading2 = (props: TypographyProps) => (
  <Typography variant="h2" my={4} {...props} />
);
const Heading3 = (props: TypographyProps) => (
  <Typography variant="h3" my={4} {...props} />
);

const LinkComponent = (props: LinkProps) => (
  <Link
    as={NextLink}
    textDecor="underline"
    color="content.secondary"
    target="_blank"
    {...props}
  />
);

export const markdownComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Typography,
  a: LinkComponent,
};
