// @ component
import WrappernBox from "../wrappernBox/WrappernBox";
import OfferNote from "../../components/offerNote/OfferNote";
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
    <WrappernBox classname="h-full">
      <div className="cursor-pointer flex flex-col h-full ">
        <div className="relative h-50  w-full">
          <img
            src={imgsrc}
            alt="product-img"
            className="w-full h-full object-contain"
          />
          <div className="absolute top-0 right-0 left-0 p-1 z-50">
            <div className="grid grid-cols-2">
              <OfferNote num={offer} />
              <div dir="rtl" className="flex items-center px-2 ">
                {subjectbrand && (
                  <p className=" flex justify-center items-center rounded-lg bg-lightback text-[14px] px-2 py-1">
                    {subjectbrand}
                  </p>
                )}
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
