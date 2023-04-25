import { boxShadow } from "@/styles/constant";
import {
  Box,
  Button,
  ButtonProps,
  ChakraProps,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { Fragment, ReactElement, ReactNode } from "react";

export type StyledButtonProps = Omit<ButtonProps, "leftIcon" | "rightIcon"> & {
  icon?: ReactElement;
  iconPosition?: "left" | "right";
  href?: string;
  openNewTab?: boolean;
};

const buttonStyles: ChakraProps = {
  bg: "background.item",
  _hover: {
    bg: "background.primary",
  },
  _active: {
    bg: "background.primary",
  },
  boxShadow,
};

export const StyledButton = (props: StyledButtonProps) => {
  const {
    icon,
    iconPosition,
    children,
    href,
    openNewTab = false,
    "aria-label": ariaLabel = "button",
    ...rest
  } = props;

  if (!icon && !children) return <Box></Box>;

  const Container = ({ children }: { children: ReactNode }) =>
    href ? (
      <Link
        href={href}
        passHref={true}
        target={
          openNewTab || !href.includes("#") || !openNewTab ? "_blank" : ""
        }
      >
        {children}
      </Link>
    ) : (
      <Fragment>{children}</Fragment>
    );

  if (!children)
    return (
      <Container>
        <IconButton
          padding={4}
          {...buttonStyles}
          borderRadius="full"
          icon={icon}
          aria-label={ariaLabel}
          {...rest}
        />
      </Container>
    );

  const buttonIcon =
    iconPosition == "left" ? { leftIcon: icon } : { rightIcon: icon };

  return (
    <Container>
      <Button
        {...(icon && buttonIcon)}
        {...buttonStyles}
        borderRadius="full"
        px={6}
        py={2}
        h="fit-content"
        aria-label={ariaLabel}
        color="content.secondary"
        fontWeight="regular"
        {...rest}
      >
        {children}
      </Button>
    </Container>
  );
};
