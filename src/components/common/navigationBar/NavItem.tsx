import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Typography } from "../Typography";
import { pathType } from "./paths";

export const NavItem = (props: pathType) => {
  const { path, title, icon, url, onClick } = props;
  const { push, asPath } = useRouter();
  const isActive = asPath == path;

  const Container = ({ children }: { children: ReactNode }) =>
    url ? (
      <Link href={url} target={!url.includes("#") ? "_blank" : ""}>
        {children}
      </Link>
    ) : (
      <Flex onClick={() => onClick ?? (path && push(path))}>{children}</Flex>
    );

  return (
    <Container>
      <Box as={motion.div} whileHover={{ scale: 1.1 }} cursor="pointer">
        {icon}
      </Box>
      {title && (
        <Typography
          as={motion.div}
          // @ts-ignore
          whileHover={{ scale: 1.1 }}
          cursor="pointer"
          color="content.secondary"
          bg={isActive ? "white" : "none"}
          py={1}
          px={6}
          borderRadius="full"
        >
          {title}
        </Typography>
      )}
    </Container>
  );
};
