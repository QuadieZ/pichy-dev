import { ReactElement } from "react";
import { Image } from "@chakra-ui/react";
import { GithubIcon } from "@/icons";

export type pathType = {
  title?: string;
  path?: string;
  url?: string;
  icon?: ReactElement;
  alt?: string;
  onClick?: () => void;
};

export const paths: pathType[] = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Work",
    path: "/work",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contacts",
    url: "/#contact",
  },
  {
    icon: <GithubIcon boxSize={8} />,
    url: "https://github.com/QuadieZ",
    alt: "GitHub",
  },
  {
    icon: (
      <Image
        src="/assets/icons/medium_primary.png"
        alt="medium icon"
        boxSize={8}
      />
    ),
    url: "https://medium.com/@pichy_kh",
    alt: "Medium",
  },
];
