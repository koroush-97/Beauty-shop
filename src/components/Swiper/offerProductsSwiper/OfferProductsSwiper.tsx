// @ component
// import NewProductCard from "../../newProductCard";
// import { MainBtn } from "../../buttons";
import { OfferCard } from "../../cards";
import { AddButton } from "../../buttons";
// @ assetess

// import Tsheirtmale from "../../../assets/photo/topWeekSell/Tshirt-2.jpg";
// import shortmale from "../../../assets/photo/topWeekSell/jean-low.jpg";
// import scarf from "../../../assets/photo/topWeekSell/scarf.jpg";
// import capboy from "../../../assets/photo/topWeekSell/cupbpy.jfif";
import shomiz from "../../../assets/photo/topWeekSell/shomiz-01.jpg";

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
    <div className={` h-full ${classnameContainerSwiper} `}>
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
          <OfferCard
            button={
              <div className=" h-full w-[50%] md:w-[80%]  ">
                {" "}
                <AddButton variant="blue" />
              </div>
            }
            price={270000}
            headers="شومیز زنانه مدل اس ار تی 7 یک آگهی بیخود"
            offer={20}
            subjectbrand={35}
            imgsrc={shomiz}
          />
        </SwiperSlide>
        <SwiperSlide className="  h-full bg-bg rounded-2xl">slid2</SwiperSlide>
        <SwiperSlide className=" h-full bg-bg rounded-2xl">slid3 </SwiperSlide>
        <SwiperSlide className=" h-full bg-bg rounded-2xl"> slid4</SwiperSlide>
        <SwiperSlide className=" h-full bg-bg rounded-2xl">slid5 </SwiperSlide>
      </Swiper>
    </div>
  );
}
