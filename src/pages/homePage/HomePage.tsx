// @components
import WrappernBox from "../../components/wrappernBox/WrappernBox";
import HeroSection from "../../components/hreo/HeroSection";

import hour24 from "../../assets/photo/svgs/24.svg";
import FeatureBox from "../../components/featureBox/FeatureBox";
// @ photos and svgs
import bagsup from "../../assets/photo/svgs/bagsupport.svg";
import truck from "../../assets/photo/svgs/truck.svg";
import earth from "../../assets/photo/svgs/earth.svg";
import flowerRight from "../../assets/photo/svgs/yellow-right.svg";
import flowerLeft from "../../assets/photo/svgs/yellow-left.svg";
import WomenClothe from "../../assets/photo/carts/clothes-w-.png";
import maleClothe from "../../assets/photo/carts/clothes-Men.png";
import kids from "../../assets/photo/carts/Kids-Icon.png";
import sport from "../../assets/photo/carts/Sport_Travel-Icon.png";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

import CategoryCard from "../../components/categoryCard/CategoryCard";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="relative  main-section h-auto py-2 ">
      <div className="hero-section relative">
        <div className=" absolute w-8 h-8 md:w-10 md:h-10  border-5 border-white rotate-135 rounded-tl-2xl rounded-br-2xl top-28 -right-1.5 bg-[#0f1273] z-50 md:top-65 md:-right-3.5 "></div>{" "}
        <HeroSection classname="p-2  h-70 md:h-150 " />
      </div>

      <div className="patronage-part my-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-x-5 gap-y-2">
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              title="پشتیبانی 24 ساعته"
              description="برای تمامی سفارشات"
              image={hour24}
            />
          </WrappernBox>
        </div>
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              description="همکاری با برندهای مختلف"
              image={bagsup}
              title=" تنوع محصولات"
            />
          </WrappernBox>
        </div>
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              description="برای تمامی سفارشات"
              image={truck}
              title="ارسال رایگان"
            />
          </WrappernBox>
        </div>
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              description="از نزدیک ترین تا دور ترین"
              image={earth}
              title="ارسال به تمامی نقاط کشور"
            />
          </WrappernBox>
        </div>
      </div>

      <div className="CategorySection relative  min-h-87.5 md:h-auto z-0  flex justify-center items-center">
        {/* ---layer---- */}
        <div className=" underlayer  bg-lightback md:bg-white absolute -top-5 -bottom-5 right-[20%] left-[20%] md:bottom-0 md:top-0  md:right-0 md:left-0 -z-10 grid grid-cols-1 md:grid-cols-6  rounded-2xl ">
          <div className=" relative ">
            <div className="absolute bg-lightback  lg:w-[60%] w-[60%] h-[80%] md:-right-16 lg:right-5 rounded-2xl hidden md:block"></div>
          </div>
          <div className=" "></div>
          <div className=""></div>
          <div className="  "></div>
          <div className=" relative">
            <div className="bg-lightback hidden lg:block  absolute h-[80%] rounded-2xl lg:w-[60%]"></div>
          </div>
          <div className=" "></div>
        </div>
        {/* ---content-layer--- */}

        <div
          dir="rlt"
          className="contentlayer  z-20 relative w-full h-[80%] grid grid-cols-1  lg:grid-cols-[0.5fr_4fr_2fr] gap-y-2 "
        >
          {/* ستون 1 */}
          <div
            dir="rtl"
            className="flex flex-row  order-1 lg:order-3 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.2)] rounded-3xl lg:bg-bg"
          >
            <div className="p-1  flex justify-center items-center w-full md:w-[80%] lg:w-full ">
              <div className=" w-full flex flex-col justify-center items-center ">
                {" "}
                <div className="w-full h-full bg-bg  rounded-2xl">
                  <div className="  w-full flex flex-row justify-center  lg:justify-around items-center ">
                    <img
                      src={flowerLeft}
                      className="flex-[1/2]  w-11.25 h-7.5 "
                      alt="Flower Left"
                    />
                    <h3 className="p-2 font-semibold md:text-2xl flex-1 ">
                      دسته بندی محصولات
                    </h3>{" "}
                    <img
                      className="flex-[1/2]  w-11.25 h-7.5"
                      src={flowerRight}
                      alt="Flower Right"
                    />
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="flex flex-[1/2]  w-15"></div>
                    <div className="flex flex-1">
                      <p>Product Category</p>
                    </div>
                    <div className="flex flex-[1/2] "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden p-1 md:flex justify-center items-center md:w-[20%] lg:hidden  bg-bg rounded-2xl">
              <div className="border border-lightback flex flex-1 flex-col justify-center items-center h-full rounded-2xl ">
                <h3 className="text-xl">مشاهده همه</h3>
                <div className="w-full flex justify-end pl-2">
                  <LiaLongArrowAltLeftSolid size={30} />
                </div>
              </div>
            </div>
          </div>

          {/* ستون 2 */}
          <div
            dir="rtl"
            className="p-1 grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-1 order-2 lg:order-2 "
          >
            <div className=" flex justify-center items-center">
              <WrappernBox height="85%" width="100%" classname="bg-bg">
                <CategoryCard title="زنانه" image={WomenClothe} to="#" />
              </WrappernBox>
            </div>
            <div className=" flex justify-center items-center">
              <WrappernBox height="85%" width="100%" classname="bg-bg">
                <CategoryCard title="مردانه" image={maleClothe} to="#" />
              </WrappernBox>
            </div>
            <div className=" flex justify-center items-center">
              <WrappernBox height="85%" width="100%" classname="bg-bg">
                <CategoryCard title="کودک و نوجوان" image={kids} to="#" />
              </WrappernBox>
            </div>
            <div className=" flex justify-center items-center ">
              <WrappernBox height="85%" width="100%" classname="bg-bg">
                <CategoryCard title="ورزش و سفر" image={sport} to="#" />
              </WrappernBox>
            </div>
          </div>

          {/* ستون 3 */}
          <div
            dir="rtl"
            className="p-1 flex justify-center items-center md:hidden lg:flex order-3 lg:order-1 "
          >
            <div className=" rounded-xl p-2 flex justify-center items-center flex-row gap-x-2 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] h-[70%] bg-bg">
              <Link
                to="#"
                dir="ltr"
                className=" p-5 rounded-2xl hover:bg-lightback"
              >
                <h3 dir="rtl" className="text-xl font-semibold">
                  مشاهده همه{" "}
                </h3>
                <LiaLongArrowAltLeftSolid size={20} className="mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="test-final mt-50 border border-black">content</div>
    </section>
  );
}

export default HomePage;
