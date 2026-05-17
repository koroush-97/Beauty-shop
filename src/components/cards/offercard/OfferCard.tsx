// @ component
import { MainBtn } from "../../buttons";
import WrappernBox from "../../wrappernBox";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
type Modal1Props = {
  variant: "modal1";
  offer: string;
  imgsrc: string;
  productTitle: string;
  brandName: string;
  descriptionProduct: string;
  price: number;
};

type Modal2Props = {
  variant: "modal2";
  imgsrc: string;
  titleProducts: string;
  price: number;
};

type OfferProductCardProps = Modal1Props | Modal2Props;

export default function OfferCard(props: OfferProductCardProps) {
  const offercardmodal1 = () => {
    if (props.variant !== "modal1") return null;

    return (
      <WrappernBox classname="h-full shadow-none">
        <div
          dir="rtl"
          className="cursor-pointer grid grid-cols-[1fr_2fr] h-full"
        >
          <div className="relative h-full">
            <div className="h-full flex flex-col justify-between items-center">
              <div className="relative w-full h-15 flex justify-center items-start">
                <div className="relative w-full h-10">
                  <div className="absolute inset-0 backdrop-blur-lg bg-yellow [clip-path:polygon(0_0,100%_0,89%_100%,14%_100%)]"></div>

                  <div className="absolute z-50 text-bg top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] md:text-[9px] xl:text-[17px]">
                    {props.offer}
                  </div>
                </div>
              </div>

              <div className="max-w-30 h-full max-h-45">
                <img
                  src={props.imgsrc}
                  alt="product-img"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl flex flex-col justify-center px-2">
            <h3 className="p-1 text-[16px] mt-5 font-semibold">
              {props.productTitle}
            </h3>

            <p>{props.brandName}</p>

            <p className="hidden xl:block p-2">{props.descriptionProduct}</p>

            <div className=" hidden h-20 md:flex flex-col xl:flex-row gap-x-1">
              <div className="border border-lightback flex-1 rounded-2xl flex justify-center items-center">
                <div className="w-[40%] flex justify-center items-center">
                  <FaFileInvoiceDollar size={30} className="text-purple-600" />
                </div>
                <div className="w-[60%] flex justify-center items-center flex-col">
                  <span>0%</span>
                  <span>فروش رفته</span>
                </div>
              </div>
              <div className="border border-lightback flex-1 rounded-2xl flex justify-center items-center">
                <div className="w-[40%] flex justify-center items-center">
                  <FaHeart size={30} className="text-red-600" />
                </div>
                <div className="w-[60%] flex flex-col  justify-center items-center">
                  <span>0%</span>
                  <span>پسندیده </span>
                </div>
              </div>
            </div>

            <div className="p-1 flex flex-col mt-15 xl:mt-0 md:flex-row h-30 gap-x-2">
              <div className="flex-1 flex justify-center items-center">
                <h5 className="font-semibold text-xl">{props.price} تومان</h5>
              </div>

              <div className="flex-1 flex justify-center items-center">
                <MainBtn text="افزودن به سبد خرید" />
              </div>
            </div>
          </div>
        </div>
      </WrappernBox>
    );
  };

  const offercardmodal2 = () => {
    if (props.variant !== "modal2") return null;

    return (
      <WrappernBox classname="relative h-full w-full border border-lightback shadow-none">
        <div className="grid gap-y-1 h-full">
          <div className="w-full h-50">
            <div className="w-full h-full border-2 border-lightback rounded-2xl py-2 relative">
              <div className="absolute top-0 right-0 p-2 rounded-tr-2xl rounded-bl-2xl bg-gray-400/30 backdrop-blur-lg">
                پیشنهاد لحظه ای
              </div>

              <img
                src={props.imgsrc}
                alt="product-img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h3 className="my-2 text-end text-[12px] md:text-[18px] font-semibold px-5">
            {props.titleProducts}
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center">
            <MainBtn text="افزودن به سبد خرید" />

            <h3 className="font-semibold">{props.price} تومان</h3>
          </div>
        </div>
      </WrappernBox>
    );
  };

  if (props.variant === "modal1") return offercardmodal1();
  if (props.variant === "modal2") return offercardmodal2();

  return null;
}
