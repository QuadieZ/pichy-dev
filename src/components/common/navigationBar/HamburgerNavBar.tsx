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
          const isActive = asPath?.split("#")[0] == el.path;
          const Container = ({
            children,
            title,
          }: {
            children: ReactNode;
            title: string;
          }) =>
            el.url ? (
              <Link href={el.url} key={title}>
                {children}
              </Link>
            ) : (
              <Fragment key={title}>{children}</Fragment>
            );
          return (
            <Container title={el.title ?? ""} key={el.title ?? ""}>
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
