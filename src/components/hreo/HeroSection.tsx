// @ img
import heroLady from "../../assets/photo/hero-banners/heroBannerLady.png";
import heroBanner from "../../assets/photo/hero-banners/herobanner.png";

// @ swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

// @ Swiper-css
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// @types
type heroSectionType = {
  classname?: string;
};

export default function HeroSection({ classname }: heroSectionType) {
  return (
    <div className={`rounded-xl   ${classname}`}>
      <Swiper
        style={
          {
            "--swiper-theme-color": "transparent",
            "--swiper-pagination-bullet-inactive-color": "transparent",
          } as React.CSSProperties
        }
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `
            
            <div class="${className} custom-bullet ">
            <div class="w-5 h-5  rotate-45 rounded-tl-2xl rounded-br-2xl bg-white p-1 "></div>
            </div>
            
    `;
          },
        }}
        autoplay={{ delay: 3000 }}
        className=" w-full h-full "
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide className=" relative flex  justify-center items-center bg-[#e7e0da]  rounded-2xl">
          <div
            dir="rtl"
            className=" w-full h-full flex flex-col md:justify-center md:items-start lg:p-20"
          >
            <h3 className="mt-10 font-semibold text-xl  text-[#94362c] px-4 md:text-2xl  lg:text-4xl lg:font-bold  ">
              در بیوتی استایل ،<br /> زیبایی محدودیت ندارن
            </h3>
            <p className="text-[14px] py-2 text-[#94362c] px-4 md:text-xl lg:p-5 lg:text-xl">
              80% تخفیف پرفروش پوشاک زنانه <br className="  lg:hidden" /> در
              بیوتی شاپ{" "}
            </p>

            <Link
              to="#"
              className=" flex justify-center items-center relative px-5 mx-2 text-[#94362c] cursor-pointer w-35 text-[14px] text-nowrap mt-2 p-1 overflow-hidden 
              md:mr-2.5 md:px-5 md:text-[16px] md:font-semibold lg:w-50 
              "
            >
              <span className="absolute inset-0 bg-black/5 pointer-events-none z-20 rounded-md "></span>
              <span>مشاهده محصولات</span>
            </Link>
          </div>
          <img
            src={heroLady}
            alt="Hero Lady"
            className=" object-contain z-10  absolute rounded-xl bottom-0 left-0 w-[60%] md:w-fit md:-left-20 lg:left-0"
          />
        </SwiperSlide>

        <SwiperSlide className="relative flex items-center justify-center rounded-2xl bg-[#85acbd]">
          <div
            dir="rtl"
            className="flex h-full w-full flex-col justify-center gap-2 p-4 md:items-start md:p-8 lg:p-16"
          >
            <h3 className="mt-8   text-xl font-semibold text-white md:text-2xl lg:text-4xl lg:font-bold">
              در بیوتی استایل ،<br /> زیبایی محدودیت ندارن
            </h3>

            <p className="  text-[12px] text-white md:text-lg lg:text-xl">
              70% تخفیف به وقت خرید بچه ها ...
            </p>

            <Link
              to="#"
              className="relative mx-2 mb-20 flex w-30 items-center justify-center overflow-hidden text-nowrap px-5 py-1 text-[14px] text-white cursor-pointer md:w-40 md:text-[16px] md:font-semibold lg:w-48"
            >
              <span className="pointer-events-none absolute inset-0 z-20 rounded-sm bg-black/5"></span>
              <span>مشاهده محصولات</span>
            </Link>
          </div>

          <img
            src={heroBanner}
            alt="Hero Banner"
            className="absolute bottom-0 left-0 z-10 w-[60%] rounded-xl object-contain  md:w-[80%] lg:w-[60%] md:-left-10 lg:left-0"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
