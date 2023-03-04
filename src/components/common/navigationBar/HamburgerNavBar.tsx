import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { paths } from "./paths";
import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const HamburgerNavBar = () => {
  const { push, asPath } = useRouter();
  return (
    <Menu>
      <MenuButton
        boxSize={6}
        minW={0}
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon boxSize={6} />}
        variant="ghost"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
      />
      <MenuList>
        {paths.map((el) => {
          const isActive = asPath == el.path;
          const Container = ({ children }: { children: ReactNode }) =>
            el.url ? (
              <Link href={el.url}>{children}</Link>
            ) : (
              <Fragment>{children}</Fragment>
            );
          return (
            <Container key={el.title}>
              <MenuItem
                icon={el.icon}
                onClick={() => el.path && push(el.path)}
                bg={isActive ? "brand.primary" : "none"}
              >
                {el.title ?? el.alt}
              </MenuItem>
            </Container>
          );
        })}
      </MenuList>
    </Menu>
  );
};
