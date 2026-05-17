import {
  NewProductsSwiper,
  WrappernBox,
  HeroSection,
  CategoryCard,
  FeatureBox,
  TitleItem,
  hour24,
  bagsup,
  truck,
  earth,
  Tshirtman,
  jeanlow,
  scarf,
  maleShrt,
  flowerRight,
  flowerLeft,
  WomenClothe,
  maleClothe,
  kids,
  sport,
  LiaLongArrowAltLeftSolid,
  offer,
  yelloleft,
  yelloright,
  logoParaph,
  Link,
  Bestcategories,
  CategoryFourPartCard,
  ChooseCards,
  MainBtn,
  Icon,
  CustomerCard,
  // OfferCard,
  // OfferProductsSwiper,
} from "./index";

// import offerzang from "../../assets/photo/offer-section/zangoleh.png";
import daman from "../../assets/photo/products/daman.png";
import palto from "../../assets/photo/products/palto.png";
import shalboland from "../../assets/photo/products/Untitled-2.png";
import cardpic from "../../assets/photo/products/card-pic1.jpg";
import cardpic2 from "../../assets/photo/products/card-pic-2.jpg";
import cardpic3 from "../../assets/photo/products/crad-pic-3.jpg";
import cardpic4 from "../../assets/photo/products/card-pic-4.jpg";

import bugs from "../../assets/photo/products/bugs.jpg";

import cupboy from "../../assets/photo/topWeekSell/cap-boy.webp";
import jean from "../../assets/photo/topWeekSell/jean-low.jpg";
import nh89 from "../../assets/photo/topWeekSell/nh8329_1_.jpg";
import scarff from "../../assets/photo/topWeekSell/scarf.jpg";

import makeup1 from "../../assets/photo/makeup/images (1).jfif";
import makeup2 from "../../assets/photo/makeup/images (2).jfif";
import makeup3 from "../../assets/photo/makeup/images.jfif";
import makeup4 from "../../assets/photo/makeup/lizano-purple-series-nail-polish.jpg";

import ladylogo from "../../assets/photo/about-photos/lady-img-logo.png";
import logoTel from "../../assets/photo/svgs/tel.png";
import map from "../../assets/photo/svgs/map.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import customer from "../../assets/photo/svgs/customer-review.png";
import customer1 from "../../assets/photo/svgs/customer-1.png";
import customer2 from "../../assets/photo/svgs/customer-2.png";
function HomePage() {
  return (
    <section className="relative  main-section h-auto py-2 z-0 ">
      <div className="hero-section relative">
        <div className=" absolute w-8 h-8 md:w-10 md:h-10  border-5 border-white rotate-135 rounded-tl-2xl rounded-br-2xl top-28 -right-1.5 bg-[#0f1273] z-50 md:top-65 md:-right-3.5 "></div>{" "}
        <HeroSection classname="p-2  h-70 md:h-150 " />
      </div>

      <div className="patronage-section my-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-x-5 gap-y-2">
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              variant="info"
              title="پشتیبانی 24 ساعته"
              description="برای تمامی سفارشات"
              image={hour24}
            />
          </WrappernBox>
        </div>
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              variant="info"
              description="همکاری با برندهای مختلف"
              image={bagsup}
              title=" تنوع محصولات"
            />
          </WrappernBox>
        </div>
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              variant="info"
              description="برای تمامی سفارشات"
              image={truck}
              title="ارسال رایگان"
            />
          </WrappernBox>
        </div>
        <div className="h-full">
          <WrappernBox classname="h-full">
            <FeatureBox
              variant="info"
              description="از نزدیک ترین تا دور ترین"
              image={earth}
              title="ارسال به تمامی نقاط کشور"
            />
          </WrappernBox>
        </div>
      </div>

      <div className="Category-Section relative  min-h-87.5 md:h-auto z-0  flex justify-center items-center my-25">
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

      <div className=" topWeekly-Products-Section relative flex min-h-87.5 w-full z-0 my-25 px-2">
        {/* ---overlay--- */}
        <div className=" absolute z-10 top-0 right-0 bottom-0 left-0 grid grid-cols-1 md:grid-cols-4">
          <div className=" bg-yellow rounded-2xl   p-2  md:bg-lightback h-[60%] md:w-[80%]  lg:w-[60%] md:h-full"></div>
          <div className=""></div>
          <div className=""></div>
          <div className=" bg-lightback rounded-2xl p-5 md:bg-[#0f1271]  h-[60%] md:h-full md:w-[80%] md:ml-[20%]  lg:w-[60%] lg:ml-[40%] "></div>
        </div>
        {/* ---content---- */}
        <div className=" relative px-2 flex-1  z-50  grid grid-cols-1 lg:grid-cols-[3fr_1fr]  lg:gap-x-2 gap-y-2">
          {/* ---پرفروش هفته */}
          <div className="  min-h-30  lg:hidden relative px-2   ">
            <div className="flex  flex-row   absolute -top-8 bottom-5 right-0 left-0 z-50 rounded-2xl bg-bg ">
              <div className=" flex-1 flex flex-col items-center  justify-center">
                <h3
                  dir="rtl"
                  className="w-full font-semibold pr-2 flex flex-row gap-x-2"
                >
                  <span className="hidden md:flex">
                    <img src={yelloleft} alt="" />
                  </span>
                  پرفروش <br className="md:hidden" />
                  های <br className="md:hidden" /> هفته
                  <span className="hidden md:flex">
                    <img src={yelloright} alt="" />
                  </span>
                </h3>
                <p dir="rtl" className="text-[12px]  w-full pr-2">
                  Weekly <br className="md:hidden" /> Most{" "}
                  <br className="md:hidden" /> Sells
                </p>
              </div>
              <div className=" relative flex-1 ">
                <img
                  src={offer}
                  alt="offer-logo"
                  className="object-contain absolute left-2 top-5"
                />
              </div>
            </div>
          </div>
          <div className="newrule gap-y-1 lg:p-2 grid grid-cols-1 md:grid-cols-2  lg:gap-x-4">
            <div className="h-full">
              {" "}
              <WrappernBox classname="bg-bg h-full">
                <FeatureBox
                  variant="productAction"
                  image={Tshirtman}
                  title="تی شرت مردانه مشکی آر ان اس"
                  description={
                    <div className="flex flex-col gap-y-2">
                      <span className="text-[14px] line-through text-muted">
                        230,000 تومان
                      </span>
                      <h6 className="text-[20px]">150,000</h6>
                    </div>
                  }
                  buttoncolor="yellow"
                />
              </WrappernBox>{" "}
            </div>
            <div className="h-full">
              {" "}
              <WrappernBox classname="bg-bg h-full">
                <FeatureBox
                  variant="productAction"
                  image={maleShrt}
                  title="تی شرت مردانه j - snrt"
                  description={
                    <div className="flex flex-col gap-y-2">
                      <span className="text-[14px] line-through text-muted">
                        230,000 تومان
                      </span>
                      <h6 className="text-[20px]">150,000</h6>
                    </div>
                  }
                  buttoncolor="blue"
                />
              </WrappernBox>{" "}
            </div>
            <div className="h-full">
              <WrappernBox classname="bg-bg h-full">
                <FeatureBox
                  variant="productAction"
                  image={jeanlow}
                  title="شلوارک خانگی RT-150"
                  description={
                    <div className="flex flex-col gap-y-2">
                      <span className="text-[14px] line-through text-muted">
                        230,000 تومان
                      </span>
                      <h6 className="text-[20px]">150,000</h6>
                    </div>
                  }
                  buttoncolor="blue"
                />
              </WrappernBox>{" "}
            </div>
            <div className="h-full">
              <WrappernBox classname="bg-bg h-full">
                <FeatureBox
                  variant="productAction"
                  image={scarf}
                  title="مینی اسکارف زنانه ابریشم توپیل"
                  description={
                    <div className="flex flex-col gap-y-2">
                      <span className="text-[14px] line-through text-muted">
                        230,000 تومان
                      </span>
                      <h6 className="text-[20px]">150,000</h6>
                    </div>
                  }
                  buttoncolor="yellow"
                />
              </WrappernBox>{" "}
            </div>
          </div>
          {/* ---پرفروش هفته */}
          <div className="  min-h-30 hidden lg:flex relative px-2   ">
            <div className="flex  flex-col   absolute top-[20%] bottom-[20%] right-0 left-0 z-50 rounded-2xl bg-bg ">
              <div className=" relative flex-1 flex justify-center items-center p-2">
                <img
                  src={offer}
                  alt="offer-logo"
                  className="object-contain  "
                />
              </div>
              <div className=" flex-1 flex flex-col justify-center items-center">
                <h3 className=" gap-x-2  text-center w-full font-semibold flex flex-row justify-center items-center">
                  <span className="hidden md:flex">
                    <img src={yelloright} alt="" />
                  </span>
                  پرفروش های هفته
                  <span className="hidden md:flex">
                    <img src={yelloleft} alt="" />
                  </span>
                </h3>
                <p className=" text-center text-[12px]  w-full ">
                  Weekly Most Sells
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <TopWeeklyProducts /> */}
      </div>

      <div className="new-products  min-h-87.5 grid-cols-1">
        <div className="grid md:grid-cols-[1fr_4fr]  lg:grid-cols-[1fr_5fr] py-2">
          <div className=" hidden p-1 md:flex  justify-center items-center  bg-bg rounded-2xl">
            <div className="border  p-1 lg:p-2 w-full border-lightback grid grid-cols-[1fr_2fr] flex-col justify-center items-center h-full rounded-2xl hover:bg-lightback cursor-pointer">
              <div className="w-full flex justify-end pl-2 ">
                <LiaLongArrowAltLeftSolid size={20} />
              </div>
              <h3 dir="rtl" className=" text-[14px] p-1 lg:text-xl ">
                مشاهده همه
              </h3>
            </div>
          </div>
          <div className="  flex justify-center items-center max-h-25 md:justify-end">
            <TitleItem
              classname=" grid grid-cols-[2fr_1fr] h-full "
              containerText=" flex flex-col justify-center items-center md:justify-center "
              header={
                <h3 className="text-black font-semibold">جدیدترین محصولات</h3>
              }
              content={
                <p dir="rtl" className="text-[12px]  pl-10">
                  Newest Products
                </p>
              }
              icon={
                <div className="pr-5 h-10 flex items-center">
                  <img
                    src={logoParaph}
                    alt="logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              }
            />
          </div>
        </div>
        {/* ----swiper---- */}
        <div className=" h-80 py-1">
          <NewProductsSwiper />
        </div>
        {/* ----swiper---- */}
        <div className="flex md:hidden py-1">
          <div className="   md:flex justify-center items-center  bg-bg rounded-2xl">
            <div className="border border-lightback grid grid-cols-[1fr_2fr]  p-4  justify-center items-center h-full rounded-2xl hover:bg-lightback cursor-pointer">
              <div className="w-full flex justify- pl-2 ">
                <LiaLongArrowAltLeftSolid size={15} />
              </div>
              <h3 className="text-[15px]  font-bold  ">مشاهده همه</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="offers-categories  my-25 ">
        <Bestcategories />
      </div>

      <div className=" relative best-categoryes my-25  min-h-87.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,65%)_minmax(0,35%)]">
        <div className="absolute top-0 right-0 bottom-0 left-0  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-[minmax(0,55%)_minmax(0,45%)]">
          <div className="order-2 lg:order-1 grid">
            <div className="bg-lightback   lg:h-full lg:w-[15%] rounded-2xl  "></div>
          </div>
          <div className="bg-linear-to-b from-[#111173] to-[#DCDCFF] order-1 md:order-2 lg:order-2  border-8 border-yellow rounded-2xl "></div>
        </div>
        <div className=" order-2 md:order-1 grid grid-cols-1 lg:grid-cols-3 z-20 gap-5">
          <div className=" flex flex-col justify-center items-center gap-y-5">
            <WrappernBox classname=" w-full hover:bg-yellow border-5 border-bg hover:border-bg bg-bg delay-300">
              <FeatureBox
                variant="info"
                title="انواع دامن"
                description="دامن و دامن شلواری مدرن"
                image={daman}
              />
            </WrappernBox>
            <WrappernBox classname=" w-full hover:bg-yellow border-5 border-bg hover:border-bg bg-bg delay-300">
              <FeatureBox
                variant="info"
                title="انواع پالتو"
                description="انواع پالتو کوتاه و بلند"
                image={palto}
              />
            </WrappernBox>
          </div>
          <div className=" flex flex-col justify-center items-center gap-y-5">
            <WrappernBox classname=" w-full hover:bg-yellow border-5 border-bg hover:border-bg bg-bg delay-300">
              <FeatureBox
                variant="info"
                title="انواع کت"
                description="انواع کت تابستانی و زمستانی"
                image={palto}
              />
            </WrappernBox>
            <WrappernBox classname=" w-full hover:bg-yellow border-5 border-bg hover:border-bg bg-bg delay-300">
              <FeatureBox
                variant="info"
                title="انواع دامن تابستانی"
                description="انواع دامن نخی و کشی"
                image={daman}
              />
            </WrappernBox>
          </div>
          <div className=" flex flex-col justify-center items-center gap-y-5">
            <WrappernBox classname=" w-full hover:bg-yellow border-5 border-bg hover:border-bg bg-bg delay-300">
              <FeatureBox
                variant="info"
                title="انواع سرهمی"
                description="سرهمی دو تیکه و یک تیکه"
                image={palto}
              />
            </WrappernBox>
            <WrappernBox classname=" w-full hover:bg-yellow border-5 border-bg hover:border-bg bg-bg delay-300">
              <FeatureBox
                variant="info"
                title="شال بلند "
                description="شال تابستانی و نازک"
                image={shalboland}
              />
            </WrappernBox>
          </div>
        </div>

        <div className=" relative h-full lg:p-2 order-1 md:order-2 ">
          <div className=" w-full h-full rounded-2xl  flex justify- items-end  justify-center flex-col pr-10 z-20 py-25">
            <h3 className=" font-semibold text-2xl text-bg">
              دستبندی های منتخب
            </h3>
            <p
              dir="rtl"
              className=" font-semibold text-[15px] w-[60%] text-right pt-5 text-bg"
            >
              این دسته بندی ها بین مخاطبان پرطرفدار بوده است. با استفاده از آنها
              می توانید به پرفروش ترین محصولات ما دسترسی داشته باشید
            </p>
            <button className="bg-[#111173] text-bg p-1 px-5 rounded-xl text-center mt-5 text-xl cursor-pointer">
              مشاهده همه
            </button>
          </div>
        </div>
      </div>

      <div className="By-Category  min-h-87.5 grid-cols-1">
        <div className="grid md:grid-cols-[1fr_4fr]  lg:grid-cols-[1fr_5fr] py-2">
          <div className=" hidden p-1 md:flex  justify-center items-center  bg-bg rounded-2xl">
            <div className="border  p-1 lg:p-2 w-full border-lightback grid grid-cols-[1fr_2fr] flex-col justify-center items-center h-full rounded-2xl hover:bg-lightback cursor-pointer">
              <div className="w-full flex justify-end pl-2 ">
                <LiaLongArrowAltLeftSolid size={20} />
              </div>
              <h3 dir="rtl" className=" text-[14px] p-1 lg:text-xl ">
                مشاهده همه
              </h3>
            </div>
          </div>
          <div className="  flex justify-center items-center max-h-25 md:justify-end">
            <TitleItem
              classname=" grid grid-cols-[2fr_1fr] h-full "
              containerText=" flex flex-col justify-center items-center md:justify-center "
              header={
                <h3 className="text-black font-semibold">بر اساس دسته بندی</h3>
              }
              content={
                <p dir="rtl" className="text-[12px]  pl-10">
                  By Category
                </p>
              }
              icon={
                <div className="pr-5 h-10 flex items-center">
                  <img
                    src={logoParaph}
                    alt="logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              }
            />
          </div>
        </div>
        {/* ----swiper---- */}
        <div className=" min-h-80 py-1 grid grid-cols-1 lg:grid-cols-3 px-8 gap-x-5 gap-y-2">
          <CategoryFourPartCard
            pic1={daman}
            pic2={palto}
            pic3={shalboland}
            pic4={bugs}
            header="زنانه"
            description="تمامی محصولات"
          />
          <CategoryFourPartCard
            pic1={cupboy}
            pic2={jean}
            pic3={nh89}
            pic4={scarff}
            header="کودک و نوجوات"
            description="برند های ایرانی"
          />
          <CategoryFourPartCard
            pic1={makeup1}
            pic2={makeup2}
            pic3={makeup3}
            pic4={makeup4}
            header="لوازم آرایشی"
            description="برند های خارجی"
          />
        </div>
        {/* ----swiper---- */}
        <div className="flex md:hidden py-1">
          <div className="   md:flex justify-center items-center  bg-bg rounded-2xl">
            <div className="border border-lightback grid grid-cols-[1fr_2fr]  p-4  justify-center items-center h-full rounded-2xl hover:bg-lightback cursor-pointer">
              <div className="w-full flex justify-center pl-2 ">
                <LiaLongArrowAltLeftSolid size={15} />
              </div>
              <h3 className="text-[15px]  font-bold  ">مشاهده همه</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-products relative  min-h-87.5 grid-cols-1 my-25 ">
        {/* overlay */}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 absolute top-0 right-0 left-0 bottom-0 z-10 ">
          <div>
            <div className="w-full h-[60%] bg-[#fcbe15]  rounded-3xl block md:hidden">
              {" "}
            </div>
            <div className="w-[50%] h-full bg-lightback  rounded-3xl  hidden  lg:block">
              {" "}
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>

          <div>
            <div className="w-full h-full bg-[#fcbe15]  rounded-3xl hidden lg:block">
              {" "}
            </div>
            <div className="w-full h-[50%] bg-lightback  rounded-3xl  block md:hidden lg:hidden">
              {" "}
            </div>
          </div>
        </div>
        {/* overlay */}

        <div className="grid md:grid-cols-[1fr_4fr]  lg:grid-cols-[1fr_5fr] py-2">
          <div className=" hidden p-1 md:flex  justify-center items-center  bg-bg rounded-2xl">
            <div className="border bg-bg z-20 p-1 lg:p-2 w-full border-lightback grid grid-cols-[1fr_2fr] flex-col justify-center items-center h-full rounded-2xl hover:bg-lightback cursor-pointer">
              <div className="w-full flex justify-end pl-2 ">
                <LiaLongArrowAltLeftSolid size={20} />
              </div>
              <h3 dir="rtl" className=" text-[14px] p-1 lg:text-xl ">
                مشاهده همه
              </h3>
            </div>
          </div>
          <div className="  flex justify-center items-center max-h-25 md:justify-end">
            <TitleItem
              classname=" grid grid-cols-[2fr_1fr] h-full z-20 "
              containerText=" flex flex-col justify-center items-center md:justify-center "
              header={
                <h3 className="text-black font-semibold"> محصولات منتخب </h3>
              }
              content={
                <p dir="rtl" className="text-[12px]  pl-10">
                  Best Products
                </p>
              }
              icon={
                <div className="pr-5 h-10 flex items-center">
                  <img
                    src={logoParaph}
                    alt="logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              }
            />
          </div>
        </div>
        {/* ----swiper---- */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-60 gap-x-2 gap-y-20  px-5">
          <div className=" h-80 z-20">
            <ChooseCards
              imgsrc={cardpic}
              price={199000}
              title="بلوز بافت بچه گانه  راه راه"
            />
          </div>
          <div className=" h-80 z-20">
            <ChooseCards
              imgsrc={cardpic2}
              price={1270000}
              title="تی شرت پسرانه کرم"
            />
          </div>
          <div className=" h-80 z-20">
            <ChooseCards
              imgsrc={cardpic3}
              price={111000}
              title="پیراهن سفید پسرانه"
            />
          </div>
          <div className=" h-80 z-20">
            <ChooseCards
              imgsrc={cardpic4}
              price={870000}
              title="شلوار جین قرمز-مدل : polent"
            />
          </div>
        </div>
        {/* ----swiper---- */}
        <div className="flex md:hidden py-1">
          <div className="   md:flex justify-center items-center  bg-bg rounded-2xl">
            <div className="border border-lightback grid grid-cols-[1fr_2fr]  p-4  justify-center items-center h-full rounded-2xl hover:bg-lightback cursor-pointer">
              <div className="w-full flex justify-center pl-2 ">
                <LiaLongArrowAltLeftSolid size={15} />
              </div>
              <h3 className="text-[15px]  font-bold  ">مشاهده همه</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="about-beauty relative  min-h-87.5  my-30  grid grid-cols-1   lg:grid-cols-[minmax(0,70%)_minmax(0,30%)]">
        <div
          dir="rtl"
          className=" h-full  grid grid-cols-1 grid-rows-[auto_auto_auto] order-2 lg:order-1"
        >
          <div dir="ltr">
            <div className="  flex justify-center items-center max-h-25 md:justify-end p-5">
              <TitleItem
                classname=" grid grid-cols-[2fr_1fr] h-full "
                containerText=" flex flex-col justify-center items-center md:justify-center "
                header={
                  <h3 className="text-black font-semibold md:text-2xl">
                    درباره بیوتی شاپ
                  </h3>
                }
                content={
                  <p dir="rtl" className="text-[12px]  ">
                    About Beauty shop
                  </p>
                }
                icon={
                  <div className="pr-5 h-10 flex items-center">
                    <img
                      src={logoParaph}
                      alt="logo"
                      className="h-18.75 w-auto object-contain "
                    />
                  </div>
                }
              />
            </div>
          </div>
          <div className=" p-2 text-justify">
            <p className="lg:px-10">
              هدف ما فراهم کردن تجربه‌ای بی‌نظیر برای مشتریان‌مان است. ما به شما
              این امکان را می‌دهیم تا با دسترسی به جدیدترین و محبوب‌ترین برندهای
              لوازم آرایشی، ظاهر و احساس خوبی داشته باشید. از آرایش صورت و چشم
              گرفته تا محصولات مراقبت از پوست و مو، در فروشگاه ما هر آنچه که
              برای زیبایی شما لازم است، موجود است. ما به کیفیت و اصالت محصولات
              خود اعتقاد داریم و تنها با برندهای معتبر همکاری می‌کنیم تا شما
              بتوانید با خیال راحت خرید کنید. علاوه بر این، تیم پشتیبانی ما
              همیشه آماده پاسخگویی به سوالات شماست و شما را در هر مرحله از خرید
              همراهی می‌کند.
            </p>
          </div>
          <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="flex flex-col justify-center items-center">
              <span className="text-[40px] font-semibold">+9</span>
              <p>میلیون کاربر</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[40px] font-semibold">+4</span>
              <p>هزار تنوع محصولات</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[40px] font-semibold">+200</span>
              <p> هزار سفارش انجام شده </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[40px] font-semibold">+1.5</span>
              <p>هزار فروشنده فعال</p>
            </div>
          </div>
        </div>
        <div className=" p-1 order-1 lg:order-2">
          <div className=" w-full h-82.5">
            <img
              src={ladylogo}
              alt="lady-logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="maanger-shop  min-h-87.5 my-25 grid grid-cols-1 grid-rows-[auto_auto] md:grid-rows-1">
        <div className="  flex items-center justify-center ">
          <div className=" relative h-full  w-full lg:w-[60%]  flex flex-row bg- justify-center items-center">
            <div className=" absolute left-0 right-0 bottom-0 h-25  flex items-center justify-center z-100 ">
              <div className="relative w-full h-full hidden md:flex justify-center items-center ">
                <div className="absolute left-0  bottom-0 top-0 rounded-2xl bg-lightback w-17.5"></div>
                <div className="mx-auto w-[95%] bg-bg rounded-2xl h-[70%] z-150 grid grid-cols-[auto_auto_auto] gap-x-2 gap-y-1">
                  <div className="flex justify-center items-center px-2">
                    <button className=" px-4 py-1 rounded-xl cursor-pointer bg-[#0f1271] text-bg">
                      ارتباط با ما
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    <p dir="rtl" className=" px-5">
                      فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و
                      اورجینال در حوزه پوشاک تاسیس شده است.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center px-2">
                    <span className="font-semibold">مدیر فروشگاه</span>
                    <span className="text-gray-500"> Shop Manager </span>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 top-0  rounded-2xl bg-lightback w-17.5"></div>
              </div>
            </div>
            <div className=" relative w-37.5 h-37.5 hidden md:block">
              <div className="w-full h-full bg-yellow rounded-4xl absolute left-20 rotate-45 "></div>
            </div>
            <div className="  absolute w-[30%] h-[60%]  rotate-45 z-5 rounded-2xl bg-yellow md:hidden">
              {" "}
            </div>

            <img
              src={ladylogo}
              alt="ladylogo"
              className="  h-30 md:h-60 z-10 "
            />

            <div className=" relative w-37.5 h-37.5 hidden md:block">
              <div className="w-full h-full bg-yellow rounded-4xl absolute -left-15 rotate-45  "></div>
            </div>
          </div>
        </div>

        <div className=" grid md:hidden grid-cols-1 grid-rows-[auto_auto_auto] justify-center items-center w-full p-1 gap-y-2">
          <div className="flex flex-col justify-center items-center px-2">
            <span className="font-semibold">مدیر فروشگاه</span>
            <span className="text-gray-500"> Shop Manager </span>
          </div>
          <div className="flex justify-center items-center">
            <p dir="rtl" className=" px-5">
              فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و اورجینال در
              حوزه پوشاک تاسیس شده است.
            </p>
          </div>
          <div className="flex justify-center items-center px-2">
            <button className=" px-4 py-1 rounded-xl cursor-pointer bg-[#0f1271] text-bg">
              ارتباط با ما
            </button>
          </div>
        </div>
      </div>

      <div className="connect-us min-h-87.5 my-25  grid grid-cols-1 lg:grid-cols-[auto_auto_minmax(0,20%)] gap-x-2 px-1">
        {/* part-one */}
        <div className=" rounded-2xl flex flex-col order-3 lg:order-1">
          <div className=" w-full h-40 ">
            <img
              src={map}
              className="w-full h-full object-contain cursor-pointer"
              alt="map-log"
            />
          </div>
          <div className=" py-2 w-full flex justify-end  items-center pr-6">
            <TitleItem
              content="تهران، خیابان ولیعصر، بالاتر از میدان ونک، خیابان میرداماد، پلاک ۱۵۵، طبقه اول"
              icon={
                <Icon className=" text-[20px] md:text-2xl ">
                  <IoLocationSharp className="text-yellow" />
                </Icon>
              }
            />
          </div>
          <div className=" flex justify-end items-center p-2 pr-6">
            <TitleItem
              content="
                        2324674021 - 1010 111 0917
                        "
              icon={
                <Icon className=" text-[20px] md:text-2xl ">
                  <FaPhoneAlt className="text-yellow" />
                </Icon>
              }
            />
          </div>
          <div className=" flex justify-end items-center p-2 pr-6">
            <TitleItem
              content="
                          beautyshop@info.com
                          "
              icon={
                <Icon className=" text-[20px] md:text-2xl ">
                  <MdEmail className="text-yellow" />
                </Icon>
              }
            />
          </div>
        </div>
        {/* part-one */}
        <div
          dir="rtl"
          className="border border-lightback rounded-2xl flex flex-col p-2 order-2 lg:order-2"
        >
          <div className=" flex flex-col ">
            <h6 className="font-semibold text-[18px]">ارسال پیام</h6>
            <p>خوشحال می شویم نظرات، پیشنهادات و انتقادات شما را بشنویم!</p>
          </div>
          <div className="my-2  w-full flex flex-col lg:flex-row gap-x-2 gap-y-2">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="border rounded-xl border-lightback flex-1 p-1"
            />
            <input
              type="text"
              placeholder="ایمیل و یا شماره تلفن"
              className="border rounded-xl border-lightback flex-1 p-1"
            />
          </div>
          <div className="my-2">
            <textarea
              name="description"
              id="descrip"
              className="border rounded-xl border-lightback flex-1 p-1 w-full h-40"
              placeholder="نظرات و توضیحات خود را در اینجا مطرح کنید"
            />
          </div>
          <div className="py-2  flex justify-end px-2">
            <MainBtn text="ارسال پیام" />
          </div>
        </div>
        {/* part three */}
        <div className="r rounded-xl flex-1 p-1 order-1 lg:order-3">
          <div className="h-full grid grid-cols-1 grid-rows-[auto_auto]  ">
            <div className="w-full h-30 flex justify-center items-center my-10 relative">
              <div className="bg-lightback absolute w-40 h-40 z-40 aspect-square p-3 object-contain  rounded-full"></div>
              <img src={logoTel} className=" w-30 h-30  z-50" alt="logo-tel" />
            </div>

            <div className=" flex flex-col justify-center items-center pb-10">
              <h6 className="font-semibold text-xl">راه های ارتباط با ما</h6>
              <p>Contact Ways</p>
            </div>
          </div>
        </div>
        {/* part three */}
      </div>

      <div className="customer-points min-h-75 my-25  grid  grid-cols-1 lg:grid-cols-[auto_minmax(0,450px)_minmax(0,200px)] gap-y-2 ">
        <div className=" order-3 lg:order-1  grid grid-cols-1 md:grid-cols-2 gap-y-2 h-full items-stretch">
          <CustomerCard
            imgsrc={customer1}
            namecustomer="فاطمه مهربان"
            message="من از خرید از بیوتی استایل کاملاً راضی‌ام! محصولات کاملاً اصل و باکیفیت هستن و همیشه جدیدترین برندهای پوشاک رو می‌تونم اینجا پیدا کنم."
          />

          <CustomerCard
            imgsrc={customer2}
            namecustomer="مژگان اسدی نیا"
            message="قیمت‌ها عالیه و بسته‌بندی محصولات خیلی شیک و حرفه‌ای بود. به‌خصوص پشتیبانی مشتریان که خیلی سریع و دقیق پاسخگو بودن. پیشنهادش می‌کنم!"
          />
        </div>
        <div
          dir="rtl"
          className=" order-2 flex justify-center items-center px-2 py-5"
        >
          <p className="text-xl">
            فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و اورجینال در
            حوزه پوشاک تاسیس شده است. ما به دنبال ایجاد تجربه‌ای دلپذیر و
            رضایت‌بخش برای مشتریان خود هستیم.
          </p>
        </div>
        <div className="flex flex-col py-5 order-1 lg:order-3">
          <div className="h-40 w-40 mx-auto">
            <img
              src={customer}
              alt="logo"
              className="h-full w-full object-contain "
            />
          </div>
          <div className=" flex-1 flex flex-col justify-start items-center pt-5">
            <h6 className="font-semibold text-2xl">نظرات مشتریان</h6>
            <p>Customers Review</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
