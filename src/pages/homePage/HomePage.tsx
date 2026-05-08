// @components
import WrappernBox from "../../components/wrappernBox/WrappernBox";
import HeroSection from "../../components/hreo/HeroSection";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import hour24 from "../../assets/photo/svgs/24.svg";
import FeatureBox from "../../components/featureBox/FeatureBox";
import TitleItem from "../../components/titleItem/TitleItem";
import NewProductCard from "../../components/newProductCard/NewProductCard";
import MainBtn from "../../components/buttons/mainBtn/MainBtn";

// @ photos and svgs
import bagsup from "../../assets/photo/svgs/bagsupport.svg";
import truck from "../../assets/photo/svgs/truck.svg";
import earth from "../../assets/photo/svgs/earth.svg";
import Tshirtman from "../../assets/photo/topWeekSell/nh8329_1_.jpg";
import jeanlow from "../../assets/photo/topWeekSell/jean-low.jpg";
import scarf from "../../assets/photo/topWeekSell/scarf.jpg";
import maleShrt from "../../assets/photo/topWeekSell/Tshirt-2.jpg";
import flowerRight from "../../assets/photo/svgs/yellow-right.svg";
import flowerLeft from "../../assets/photo/svgs/yellow-left.svg";
import WomenClothe from "../../assets/photo/carts/clothes-w-.png";
import maleClothe from "../../assets/photo/carts/clothes-Men.png";
import kids from "../../assets/photo/carts/Kids-Icon.png";
import sport from "../../assets/photo/carts/Sport_Travel-Icon.png";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import offer from "../../assets/photo/topWeekSell/offer-2.png";
import yelloleft from "../../assets/photo/svgs/yellow-left.svg";
import yelloright from "../../assets/photo/svgs/yellow-right.svg";
import logoParaph from "../../assets/photo/logo-beauty-paragheraph.png";
import short from "../../assets/photo/topWeekSell/jean-low.jpg";
// @ react-router-dom
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="relative  main-section h-auto py-2 ">
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

      <div className=" topWeekly-Products-Section relative flex   min-h-87.5 w-full z-0 my-25 px-2">
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

      <div className="new-products border min-h-87.5 grid-cols-1">
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
        <div className="bg-cyan-500 h-80 py-1">
          <div className="max-w-90 h-full bg-bg rounded-2xl">
            <NewProductCard
              subjectbrand="کودک و نوجوان"
              offer={8}
              imgsrc={short}
              headers={
                <p className="text-[14px]">
                  <span className="font-semibold text-muted">
                    شلوارک مردانه
                  </span>{" "}
                  <br className=" flex md:hidden" /> <span>Amahi AU2883</span>
                </p>
              }
              price={
                <h3 dir="rtl" className="font-semibold">
                  250,000 تومان
                </h3>
              }
              button={<MainBtn text="افزودن به سبد خرید" />}
            />
          </div>
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

      <div className="test-final mt-50  grid grid-cols-1"></div>
    </section>
  );
}

export default HomePage;
