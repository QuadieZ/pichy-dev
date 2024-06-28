import { boxShadow } from "@/styles/constant";
import { BoxProps, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Typography } from "./Typography";

export type ReviewCardProps = {
  src?: string;
  alt?: string;
  name: string;
  review: string;
} & BoxProps;

export const ReviewCard = (props: ReviewCardProps) => {
  const { src, alt, review, name, ...rest } = props;

  return (
    <HStack
      bg="background.item"
      boxShadow={boxShadow}
      w="90%"
      position="relative"
      margin="auto"
      px={[4, 6]}
      minH="100%"
      py={[4, 4, 4, 4]}
      justify="space-between"
      borderRadius="20px"
      {...rest}
    >
      <Stack
        spacing={6}
        flexDir={["column", "column", "row"]}
        align="center"
        justify="center"
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            boxSize={["35%", "25%"]}
            borderRadius="15px"
          />
        )}
        <VStack align="flex-start" spacing={2}>
          <Text>{review}</Text>
          <Typography variant="h3">- {name}</Typography>
        </VStack>
      </Stack>
    </HStack>
  );
};
