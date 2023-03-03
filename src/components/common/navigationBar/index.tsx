import { Box, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Typography } from "../Typography";
import { HamburgerNavBar } from "./HamburgerNavBar";
import { NavItem } from "./NavItem";
import { paths } from "./paths";

export const NavigationBar = () => {
  const router = useRouter();

  return (
    <HStack
      position="absolute"
      w="100vw"
      top="0"
      left="0"
      bg="brand.primary"
      h="10vh"
      zIndex={100}
      color="content.secondary"
      px={8}
      borderBottomRadius="30px"
      justify="space-between"
    >
      <Typography
        variant="h2"
        cursor="pointer"
        onClick={() => router.push("/")}
      >
        Pichy.dev
      </Typography>
      <HStack gap={8} display={["none", "none", "flex", "flex"]}>
        {paths?.map((el) => (
          <NavItem key={el.title} {...el} />
        ))}
      </HStack>
      <Box display={["block", "block", "none", "none"]}>
        <HamburgerNavBar />
      </Box>
    </HStack>
  );
};
