import { boxShadow } from "@/styles/constant";
import { BoxProps, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Typography } from "./Typography";

export type MenuCardProps = {
  src?: string;
  alt?: string;
  title: string;
  description?: string;
} & BoxProps;

export const MenuCard = (props: MenuCardProps) => {
  const { src, alt, title, description, ...rest } = props;

  return (
    <HStack
      bg="background.item"
      boxShadow={boxShadow}
      w="100%"
      position="relative"
      minH="12vh"
      px={6}
      justify="space-between"
      borderRadius="20px"
      cursor="pointer"
      {...rest}
    >
      <HStack>
        {src && <Image src={src} alt={alt} boxSize="25%" />}
        <VStack align="flex-start">
          <Typography variant="h2">{title}</Typography>
          <Text>{description}</Text>
        </VStack>
      </HStack>
      <Image
        src="/assets/icons/arrow_right_icon.svg"
        alt="Arrow icon"
        position="relative"
        boxSize="5vh"
      />
    </HStack>
  );
};
