import { Typography } from "@/components";
import { boxShadow } from "@/styles/constant";
import { sortDate } from "@/util/sortDate";
import {
  Flex,
  Grid,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import fs from "fs";
import path from "path";
import { useState } from "react";

const postsDirectory = path.join(process.cwd(), "public/gallery");

function getImages() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      id: fileName,
    };
  });
}

const Gallery = ({ images }: { images: { id: string }[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeImage, setActiveImage] = useState<string>();

  return (
    <Flex paddingTop="15vh" h="100vh" flexDir="column" gap={8}>
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
        <ModalOverlay />
        <ModalContent mx={8}>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={`/gallery/${activeImage}`}
              w="100%"
              maxH="80vh"
              objectFit="contain"
              alt={activeImage?.replace(/\.png$|.jpg$/, "")}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Stack spacing={0} gap={0} px={10}>
        <Typography>Welcome to</Typography>
        <Typography fontSize={["2xl", "4xl"]}>My Gallery</Typography>
      </Stack>
      <Grid
        w="100%"
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={4}
        overflowY="scroll"
        pb={8}
        px={10}
      >
        {images
          .sort((a, b) =>
            sortDate(
              a.id.replace(/\.png$|.jpg$/, ""),
              b.id.replace(/\.png$|.jpg$/, "")
            )
          )
          .map((image) => (
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
              key={image.id.replace(/\.png$|.jpg$/, "")}
              onClick={() => {
                setActiveImage(image.id);
                onOpen();
              }}
            >
              <Typography
                pos="absolute"
                top={2}
                right={2}
                px={2}
                borderRadius="full"
                color="white"
                bg="#425E87"
              >
                {image.id.replace(/\.png$|.jpg$/, "").split("-")[2]}
              </Typography>
              <Image
                src={`/gallery/${image.id}`}
                w="100%"
                h="100%"
                objectFit="contain"
                alt={image.id.replace(/\.png$|.jpg$/, "")}
              />
            </HStack>
          ))}
      </Grid>
    </Flex>
  );
};

export async function getStaticProps() {
  const images = await getImages();
  return {
    props: {
      images,
    },
  };
}

export default Gallery;
