// @ component
import { MainBtn } from "../../buttons";
import WrappernBox from "../../wrappernBox";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

type OfferProductCard = {
  varinat?: "modal1" | "modal2";
  offer?: number;
  headers?: React.ReactNode;
  imgsrc: string;
  button: React.ReactNode;
  price: number;
};

export default function OfferCard({
  varinat = "modal1",
  headers,
  imgsrc,
  button,
  price,
}: OfferProductCard) {
  const offercardmodal1 = () => (
    <WrappernBox classname="h-full  shadow-none ">
      <div
        dir="rtl"
        className="cursor-pointer  grid grid-cols-[1fr_2fr]  h-full  "
      >
        {/* item-1 */}
        <div className="relative h-full   ">
          <div className="relative p-1 z-50">
            <div className="grid">
              <div dir="rtl" className="flex items-center px-2"></div>
            </div>
          </div>

          <div className=" h-full flex flex-col justify-between items-center ">
            <div className=" relative  w-full h-15 flex justify-center items-start">
              <div className="relative w-full h-10 ">
                {/* شکل زرد */}
                <div className="absolute inset-0  backdrop-blur-lg bg-yellow [clip-path:polygon(0_0,100%_0,89%_100%,14%_100%)]"></div>

                {/* متن که میخوای روی همه بیاد */}
                <div className="absolute z-50  text-bg top-4 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[8px] md:text-[9px] xl:text-[17px]">
                  {headers}
                </div>
              </div>
            </div>

            <div className="max-w-30 h-full max-h-45 ">
              <img
                src={imgsrc}
                alt="product-img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* item-2 */}
        <div className="  rounded-2xl flex flex-col justify-center px-2">
          <div className="h-full flex flex-col ">
            <h3
              dir="rtl"
              className="flex justify-start items-center p-1 text-[16px] mt-5 text-wrap  font-semibold"
            >
              اسکارف مینی لینین مدل 200154
            </h3>
            <p>brand of this</p>

            <p className="hidden xl:block p-2">
              رعایت بهداشت فردی مخصوصا بهداشت نواحی خارجی و اطراف واژینال برای
              خانم‌ها از اهمیت زیادی برخوردار است.
            </p>

            <div className="  hidden  xl:flex  flex-row justify-between items-center gap-x-2">
              <div className="h-20  flex-1 flex flex-row border rounded-2xl border-lightback">
                <div className="w-[40%] flex justify-center items-center h-full ">
                  <FaFileInvoiceDollar size={25} className="text-accent" />
                </div>
                <div className="w-[60%] flex flex-col justify-center items-center ">
                  <span>0%</span>
                  <p>فروش رفته</p>
                </div>
              </div>
              <div className="h-20 border border-lightback rounded-2xl flex-1 flex flex-row">
                <div className="w-[40%] flex justify-center items-center h-full ">
                  {" "}
                  <FaHeart size={25} className="text-red-500" />{" "}
                </div>
                <div className="w-[60%] flex flex-col justify-center items-center ">
                  <span>0%</span>
                  <p>پسندیده</p>
                </div>
              </div>
            </div>
            <div className="p-1 flex flex-col mt-15 xl:mt-0 md:flex-row h-30 gap-x-2 ">
              <div className=" flex-1 flex justify-center items-center">
                <h5 className="font-semibold text-xl">1990000 تومان</h5>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <MainBtn text="افزودن به سبد خرید" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrappernBox>
  );

  const offercardmodal2 = () => (
    <WrappernBox classname=" relative h-full w-full border border-lightback shadow-none">
      <div className="cursor-pointer grid grid-cols-1 gap-y-1 h-full ">
        <div className="relative h-full w-full  flex flex-row ">
          <div className="w-full h-50   justify-center items-center ">
            <div className="w-full h-full border-2 border-lightback rounded-2xl py-2 relative ">
              <div className=" border-2 font-semibold border-lightback absolute top-0 right-0 p-2 rounded-tr-2xl rounded-bl-2xl bg-gray-400/30  backdrop-blur-lg ">
                پیشنهاد لحظه ای
              </div>
              <img
                src={imgsrc}
                alt="product-img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <h3 className=" my-2 text-end text-[12px] md:text-[18px] font-semibold px-5">
          {headers}
        </h3>
        <div className=" rounded-2xl flex flex-col justify-center px-2">
          <div className="h-full flex flex-col md:flex-row  justify-center items-center   ">
            <div className="p-1 flex justify-start items-center  flex-1  ">
              <MainBtn text="افزودن به سبد خرید" />
            </div>
            <h3
              dir="rtl"
              className="flex flex-col justify-start items-center p-1 font-semibold "
            >
              {price} تومان
            </h3>
          </div>
        </div>
      </div>
    </WrappernBox>
  );

  const variants = {
    modal1: offercardmodal1(),
    modal2: offercardmodal2(),
  };

  return variants[varinat];
}
