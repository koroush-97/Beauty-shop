// @ component
import NewProductCard from "../../cards/newProductCard";

import { MainBtn } from "../../buttons";

// @ assetess

import Tsheirtmale from "../../../assets/photo/topWeekSell/Tshirt-2.jpg";
import shortmale from "../../../assets/photo/topWeekSell/jean-low.jpg";
import scarf from "../../../assets/photo/topWeekSell/scarf.jpg";
import capboy from "../../../assets/photo/topWeekSell/cupbpy.jfif";
import shomiz from "../../../assets/photo/topWeekSell/shomiz-01.jpg";

// @ swiper
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewProductsSwiper() {
  return (
    <>
      <Swiper
        style={{} as React.CSSProperties}
        slidesPerView={1}
        spaceBetween={4}
        modules={[Autoplay]}
        className="mySwiper h-full"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
      >
        <SwiperSlide className=" h-full bg-bg rounded-2xl ">
          <NewProductCard
            subjectbrand="زنانه"
            offer={8}
            imgsrc={scarf}
            headers={
              <h3 className="font-semibold">مینی اسکارف زنانه ابریشم</h3>
            }
            price={
              <div dir="rtl">
                <p className="text-red-400 text-[12px] line-through font-semibold ">
                  370000
                </p>
                <h3 className="font-semibold"> تومان 250000</h3>
              </div>
            }
            button={<MainBtn text="افزودن به سبد خرید" />}
          />
        </SwiperSlide>
        <SwiperSlide className="  h-full bg-bg rounded-2xl">
          {" "}
          <NewProductCard
            subjectbrand="مردانه"
            imgsrc={shortmale}
            headers={<h3 className="font-semibold">شلوارک مردانه ورزشی</h3>}
            price={
              <div dir="rtl">
                <div className=" relative mx-2 flex  items-center justify-center overflow-hidden text-nowrap  text-white">
                  <span className="pointer-events-none absolute inset-0 z-20 rounded-sm bg-black/20"></span>
                  <p className="text-black  z-30 p-1"> تک سایز - xl</p>
                </div>
                <h3 className="font-semibold text-center"> تومان 110,000</h3>
              </div>
            }
            button={<MainBtn text="افزودن به سبد خرید" />}
          />{" "}
        </SwiperSlide>
        <SwiperSlide className=" h-full bg-bg rounded-2xl">
          {" "}
          <NewProductCard
            subjectbrand="مردانه"
            offer={12}
            imgsrc={Tsheirtmale}
            headers={
              <h3 className="font-semibold">تی شرت مردانه -lover1981</h3>
            }
            price={
              <div dir="rtl">
                <p className="text-red-400 text-[12px] line-through font-semibold ">
                  540,000
                </p>
                <h3 className="font-semibold"> تومان 300,000</h3>
              </div>
            }
            button={<MainBtn text="افزودن به سبد خرید" />}
          />{" "}
        </SwiperSlide>
        <SwiperSlide className=" h-full bg-bg rounded-2xl">
          {" "}
          <NewProductCard
            subjectbrand="نوجوان"
            imgsrc={capboy}
            headers={
              <h3 className="font-semibold">کلاه cap آرتینا مدل: lee-fun</h3>
            }
            price={
              <div dir="rtl">
                <h3 className="font-semibold"> تومان 90,000</h3>
              </div>
            }
            button={<MainBtn text="افزودن به سبد خرید" />}
          />{" "}
        </SwiperSlide>
        <SwiperSlide className=" h-full bg-bg rounded-2xl">
          {" "}
          <NewProductCard
            subjectbrand="زنانه"
            imgsrc={shomiz}
            headers={<h3 className="font-semibold">شومیز زنانه مدل مجلسی</h3>}
            price={
              <div dir="rtl">
                <p className="text-[12px]  font-semibold ">
                  تنها <span> 4 عدد </span> باقی مانده
                </p>
                <h3 className="font-semibold"> تومان 250000</h3>
              </div>
            }
            button={<MainBtn text="افزودن به سبد خرید" />}
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
