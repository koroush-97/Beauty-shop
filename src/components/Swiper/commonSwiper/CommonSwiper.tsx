import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import type { SwiperOptions } from "swiper/types";

type CommonSwiperProps = {
  children: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  breakpoints?: SwiperOptions["breakpoints"];
};

export default function CommonSwiper({
  children,
  slidesPerView = 1,
  spaceBetween = 4,
  className = "",
  breakpoints,
}: CommonSwiperProps) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={[Autoplay]}
      className={`mySwiper h-full ${className}`}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      breakpoints={breakpoints}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="h-full">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
