import { boxShadow } from "@/styles/constant";
import { BoxProps, ChakraProps, HStack, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Typography } from "../common";
import NextLink from "next/link";

export type WorkCardType = {
  title: string;
  image?: string | string[];
  tag: string;
  href: string;
} & BoxProps;

export type tagType = "work" | "community" | "personal";

export const tagColor: Record<tagType, ChakraProps> = {
  work: {
    color: "white",
    bg: "#425E87",
  },
  community: {
    bg: "#F5C0A2",
  },
  personal: {
    bg: "#FFF1CD",
  },
};

export const WorkCard = (props: WorkCardType) => {
  const { title, image, href, tag, children, ...rest } = props;
  const imagePath = Array.isArray(image) ? image[0] : image;
  const router = useRouter();

  return (
    <Link as={NextLink} href={`work/${href}`}>
      <HStack
        bg="background.item"
        boxShadow={boxShadow}
        w="100%"
        position="relative"
        h="30vh"
        justify="space-between"
        borderRadius="20px"
        cursor="pointer"
        _hover={{
          bg: "background.primary",
        }}
        overflow="hidden"
        {...rest}
      >
        <Image
          src={imagePath ?? "/assets/work/placeholder.png"}
          w="100%"
          h="100%"
          objectFit="cover"
          alt={title}
        />
        <Typography
          pos="absolute"
          top={2}
          right={2}
          px={2}
          borderRadius="full"
          {...tagColor[tag as tagType]}
        >
          {tag}
        </Typography>
        <Typography
          pos="absolute"
          bottom={0}
          bg="white"
          w="100%"
          py={2}
          px={4}
          left={0}
          marginInlineStart="0 !important"
        >
          {title}
        </Typography>
      </HStack>
    </Link>
  );
};
