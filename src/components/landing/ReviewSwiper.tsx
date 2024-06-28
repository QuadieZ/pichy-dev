import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { ReactNode } from "react";

export type ReviewSwiperProps = {
  cards: ReactNode[];
};

export const ReviewSwiper = (props: ReviewSwiperProps) => {
  const { cards } = props;
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      style={{
        overflow: "visible",
        padding: "0",
      }}
    >
      {cards.map((Card, index) => (
        <SwiperSlide
          key={index}
          style={{
            height: "100%",
            overflow: "visible",
          }}
        >
          {Card}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
