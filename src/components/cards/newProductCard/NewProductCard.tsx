// @ component
import WrappernBox from "../../wrappernBox";
import OfferNote from "../../offerNote";
import { Link } from "react-router-dom";

type newProductCard = {
  subjectbrand?: string;
  offer?: number;
  headers?: React.ReactNode;
  imgsrc: string;
  button: React.ReactNode;
  price: React.ReactNode;
};

export default function NewProductCard({
  offer,
  headers,
  imgsrc,
  button,
  price,
  subjectbrand,
}: newProductCard) {
  return (
    <WrappernBox classname="h-full border border-lightback shadow-none">
      <div className="cursor-pointer flex flex-col h-full ">
        <div className="relative h-[65%]  w-full border border-lightback rounded-2xl">
          <img
            src={imgsrc}
            alt="product-img"
            className="w-full h-full object-contain"
          />
          <div className="absolute top-0 right-0 left-0 p-1 z-50">
            <div className="grid grid-cols-2  ">
              <div>{offer && <OfferNote num={offer} />}</div>
              <div dir="rtl" className="flex items-center px-2 ">
                <Link
                  to="#"
                  className="relative mx-2 flex w-30 items-center justify-center overflow-hidden text-nowrap text-[14px] text-white cursor-pointer md:w-40 md:text-[16px] md:font-semibold lg:w-48"
                >
                  <span className="pointer-events-none absolute inset-0 z-20 rounded-sm bg-black/20"></span>
                  <p
                    className={`${subjectbrand ? "text-black font-semibold z-30 p-1" : ""}`}
                  >
                    {subjectbrand}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div dir="rtl" className="p-2">
          {headers}
        </div>
        <div className="grid grid-cols-2 p-2 gap-x-1">
          <div className=" p-1">{button}</div>
          <div className=" p-1">{price}</div>
        </div>
      </div>
    </WrappernBox>
  );
}
