import { Icon, MainBtn, PageTitle, TitleItem } from "../homePage";

import map from "../../assets/photo/svgs/map.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoTel from "../../assets/photo/svgs/tel.png";
import box from "../../assets/photo/svgs/box.png";
import InfoCard from "../../components/cards/infoCard";
import hadi from "../../assets/photo/team-member/hadi.png";
import atena from "../../assets/photo/team-member/atena.png";

import sadegh from "../../assets/photo/team-member/sadgh.png";
import sima from "../../assets/photo/team-member/sima.png";

export default function CallUs() {
  return (
    <div className=" h-auto">
      <PageTitle />
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

      <div className="maanger-shop  min-h-87.5 my-25 grid grid-cols-1 grid-rows-[auto_auto] md:grid-rows-1">
        <div className="  flex items-center justify-center ">
          <div className=" relative h-full  w-full lg:w-[60%]  flex flex-row bg- justify-center items-center">
            <div className=" absolute left-0 right-0 bottom-0 h-25  flex items-center justify-center z-100 ">
              <div className="relative w-full h-full hidden md:flex justify-center items-center ">
                <div className="absolute left-0  bottom-0 top-0 rounded-2xl bg-lightback w-17.5"></div>
                <div className="mx-auto w-[95%] bg-bg rounded-2xl h-[70%] z-150 grid grid-cols-[auto_auto_auto] gap-x-2 gap-y-1">
                  <div className="flex justify-center items-center px-2">
                    <button className=" px-4 py-1 rounded-xl cursor-pointer bg-[#0f1271] text-bg">
                      پیگیری
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    <p dir="rtl" className=" px-5">
                      فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و
                      اورجینال در حوزه پوشاک تاسیس شده است.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center px-2">
                    <span className="font-semibold">پیگیری سفارشات</span>
                    <span className="text-gray-500"> Track Orders </span>
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

            <img src={box} alt="box" className="  h-30 md:h-60 z-10 " />

            <div className=" relative w-37.5 h-37.5 hidden md:block">
              <div className="w-full h-full bg-yellow rounded-4xl absolute -left-15 rotate-45  "></div>
            </div>
          </div>
        </div>

        <div className=" grid md:hidden grid-cols-1 grid-rows-[auto_auto_auto] justify-center items-center w-full p-1 gap-y-2">
          <div className="flex flex-col justify-center items-center px-2">
            <span className="font-semibold">پیگیری سفارشات</span>
            <span className="text-gray-500"> Teack Orders</span>
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

      <div className=" flex flex-col justify-center items-center my-25 min-h-20 bg-[#f5b812] w-full h-[80%] border-10 rounded-2xl border-yellow relative  xl:hidden">
        <h5 className="text-3xl font-semibold text-center py-2">
          {" "}
          تیم فروش بیوتی شاپ
        </h5>
        <p className="text-[#2f1c2f] py-1">Beauty shop team</p>
      </div>

      <div className="info-team min-h-70  flex flex-col lg:flex-row  relative  ">
        {/* ---overlay--- */}
        <div dir="rtl" className=" absolute top-0 left-0 right-0 bottom-0">
          <div className="flex-1  z-10 h-full hidden xl:block">
            <div className="w-[28%]  h-full flex items-end">
              <div className="bg-[#f5b812] w-full h-[80%] border-10 rounded-2xl border-yellow relative">
                {/* Gradient Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 
                      bg-linear-to-b from-transparent to-black/10 rounded-2xl"
                ></div>

                {/* Content */}
                <div className="relative z-10 p-4 text-[#2f1c2f]  h-full">
                  <h5 className="text-3xl font-semibold">
                    {" "}
                    تیم فروش بیوتی <br /> شاپ
                  </h5>
                  <p className="text-[#2f1c2f]">Beauty shop team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---overlay--- */}
        <div className="flex-1   grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-2   gap-y-20">
          <InfoCard imgsrc={hadi} nameuser="هادی زارعی" job="مدیریت مالی" />
          <InfoCard imgsrc={atena} nameuser="آتنا سلیمانی" job="مدیر عامل" />
          <InfoCard imgsrc={sima} nameuser="شیما عسگری" job="حسابدار" />
          <InfoCard imgsrc={sadegh} nameuser="صادق علی زاده" job="انبار دار" />
          <InfoCard imgsrc={sadegh} nameuser="امیر علی زاده" job="انبار دار" />
        </div>
        <div className="w-[20%]  hidden xl:flex "></div>
      </div>
    </div>
  );
}
