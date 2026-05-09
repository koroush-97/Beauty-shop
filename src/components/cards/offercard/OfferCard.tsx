// @ component
import WrappernBox from "../../wrappernBox";

// assets

type offerProductCard = {
  subjectbrand?: number;
  offer?: number;
  headers?: React.ReactNode;
  imgsrc: string;
  button: React.ReactNode;
  price: number;
};

export default function OfferCard({
  headers,
  imgsrc,
  button,
  price,
  // subjectbrand,
}: offerProductCard) {
  return (
    <WrappernBox classname="h-full border border-lightback shadow-none">
      <div className="cursor-pointer grid grid-cols-1 gap-y-1 h-full ">
        <div className="relative h-full  w-full border-2 flex-row-[1fr_fr] border-lightback rounded-2xl">
          <div className="relative  p-1 z-50">
            <div className="grid   ">
              <div dir="rtl" className="flex items-center px-2 ">
                {/* <div className="  relative mx-2 flex w-full items-center justify-start overflow-hidden text-nowrap text-[14px] text-white cursor-pointer md:w-40 md:text-[16px] md:font-semibold lg:w-48">
                  <p
                    className={`${subjectbrand ? "text-white font-semibold z-30 p bg-yellow  w-auto px-1.5  rounded-br-4xl rounded-bl-4xl rounded-tr-xl rounded-tl-xl  text-center" : ""}`}
                  >
                    %{subjectbrand} تخفیف
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full  h-50   grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_2fr]  p-1 justify-center items-center">
            <h3 dir="rtl" className="text-[12px] md:text-[15px] font-semibold">
              {headers}
            </h3>

            <div className="w-full h-full md:h-45 ">
              <img
                src={imgsrc}
                alt="product-img"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>

        <div className="border-2 border-lightback rounded-2xl flex flex-col justify-center px-2">
          <div className="  h-full  grid grid-rows-2 ">
            <h3 dir="rtl" className=" flex justify-center items-center p-1">
              {price} تومان
            </h3>
            <div className=" p-1 flex justify-center items-center ">
              {button}
            </div>
          </div>
        </div>
      </div>
    </WrappernBox>
  );
}
