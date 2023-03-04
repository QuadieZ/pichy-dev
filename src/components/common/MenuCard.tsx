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
      px={[2, 6]}
      py={[4, 4, 4, 0]}
      justify="space-between"
      borderRadius="20px"
      cursor="pointer"
      _hover={{
        bg: "background.primary",
      }}
      {...rest}
    >
      <HStack spacing={[1, 2]}>
        {src && <Image src={src} alt={alt} boxSize={["35%", "25%"]} />}
        <VStack align="flex-start" spacing={[0, 0, 0, 2]}>
          <Typography variant="h2">{title}</Typography>
          <Text display={["none", "block", "block", "block"]}>
            {description}
          </Text>
        </VStack>
      </HStack>
      <Image
        src="/assets/icons/arrow_right_icon.svg"
        alt="Arrow icon"
        position="relative"
        boxSize="5vh"
        display={["none", "block", "block", "block"]}
      />
    </HStack>
  );
};
