import { Typography, TypographyProps } from "../common";

const Heading1 = (props: TypographyProps) => (
  <Typography variant="h1" my={4} {...props} />
);
const Heading2 = (props: TypographyProps) => (
  <Typography variant="h2" my={4} {...props} />
);
const Heading3 = (props: TypographyProps) => (
  <Typography variant="h3" my={4} {...props} />
);

export const markdownComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Typography,
};
