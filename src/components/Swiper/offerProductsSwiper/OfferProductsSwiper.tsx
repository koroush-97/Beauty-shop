// @ component
// import NewProductCard from "../../newProductCard";
// import { MainBtn } from "../../buttons";
import { OfferCard } from "../../cards";

// @ assetess

// import Tsheirtmale from "../../../assets/photo/topWeekSell/Tshirt-2.jpg";
// import shortmale from "../../../assets/photo/topWeekSell/jean-low.jpg";
// import scarf from "../../../assets/photo/topWeekSell/scarf.jpg";
// import capboy from "../../../assets/photo/topWeekSell/cupbpy.jfif";
// import shomiz from "../../../assets/photo/topWeekSell/shomiz-01.jpg";

// @ swiper
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type offerProductsSwipertype = {
  classnameContainerSwiper?: string;
};

export default function OfferProductsSwiper({
  classnameContainerSwiper,
}: offerProductsSwipertype) {
  return (
    <div
      className={` h-full w-full min-w-0 mySwiper relative  overflow-hidden  ${classnameContainerSwiper} `}
    >
      <div className="relative z-50">
        {/* overlay */}

        {/* text */}
        <div className="absolute top-0 right-0 z-60 p-2 rounded-tl-2xl rounded-bl-2xl backdrop-blur-3xl   m-1  ">
          <span className="pointer-events-none absolute inset-0 z-60  rounded-tl-2xl"></span>
          <h3 className="font-semibold text-[14px]">پیشنهاد لحظه ای</h3>
        </div>
      </div>

      <Swiper
        style={{} as React.CSSProperties}
        slidesPerView={1}
        spaceBetween={4}
        modules={[]}
        className="mySwiper h-full"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide className=" h-full bg-bg rounded-2xl ">
          <OfferCard variant="modal1" />
        </SwiperSlide>
        <SwiperSlide className="   h-75 bg-bg rounded-2xl">
          <OfferCard variant="modal2" />
        </SwiperSlide>
        <SwiperSlide className="  h-75 bg-bg rounded-2xl">2</SwiperSlide>
        <SwiperSlide className="  h-75 bg-bg rounded-2xl"> 3</SwiperSlide>
        <SwiperSlide className="   h-75 bg-bg rounded-2xl">4</SwiperSlide>
      </Swiper>
    </div>
  );
}
