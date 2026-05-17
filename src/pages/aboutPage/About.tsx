import ladylogo from "../../assets/photo/about-photos/lady-img-logo.png";
import logoParaph from "../../assets/photo/logo-beauty-paragheraph.png";
import hadi from "../../assets/photo/team-member/hadi.png";
import atena from "../../assets/photo/team-member/atena.png";
import customer from "../../assets/photo/svgs/customer-review.png";
import customer1 from "../../assets/photo/svgs/customer-1.png";
import customer2 from "../../assets/photo/svgs/customer-2.png";
import sadegh from "../../assets/photo/team-member/sadgh.png";
import sima from "../../assets/photo/team-member/sima.png";
import { CustomerCard, InfoCard, PageTitle, TitleItem } from "../homePage";

function AboutPage() {
  return (
    <section className=" h-auto -mb-15">
      <PageTitle />
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
export default AboutPage;
