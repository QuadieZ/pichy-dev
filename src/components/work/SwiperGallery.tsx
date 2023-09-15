import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Box, Image } from "@chakra-ui/react";

export type SwiperGalleryProps = {
  images: string[];
};

export const SwiperGallery = (props: SwiperGalleryProps) => {
  const { images } = props;
  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      {images.map((image) => (
        <SwiperSlide>
          <Image src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
