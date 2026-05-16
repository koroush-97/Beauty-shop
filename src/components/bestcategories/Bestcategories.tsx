import zangol from "../../assets/photo/offer-section/zangoleh.png";

import daman from "./../../assets/photo/products/daman.png";
import manto from "./../../assets/photo/products/manto-1.jpg";
import palto from "./../../assets/photo/products/palto.png";
import scarf from "./../../assets/photo/products/scarf-1.jpg";

import CommonSwiper from "../Swiper/commonSwiper";
import { OfferCard } from "../cards";

export default function Bestcategories() {
  return (
    <div className="min-h-87.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,350px)_minmax(0,980px)] gap-x-2">
      <div className=" hidden md:flex">
        <CommonSwiper>
          <OfferCard
            varinat="modal2"
            imgsrc={daman}
            button={<div> btn </div>}
            price={1400000}
            headers="دامن زنانه نخی تابستانی"
            offer={8}
          />
          <OfferCard
            varinat="modal2"
            imgsrc={manto}
            button={<div> btn </div>}
            price={1400000}
            headers="مانتو تک سایز  آبی مخمل"
            offer={8}
          />
          <OfferCard
            varinat="modal2"
            imgsrc={palto}
            button={<div> btn </div>}
            price={1400000}
            headers="پالتو بلند کرم "
            offer={8}
          />
          <OfferCard
            varinat="modal2"
            imgsrc={scarf}
            button={<div> btn </div>}
            price={1400000}
            headers="روسری مجلسی طرح ترنج"
            offer={8}
          />
        </CommonSwiper>
      </div>
      <div className=" bg-yellow rounded-2xl p-3 ">
        <div className=" rounded-2xl w-full h-full  grid grid-cols-1 md:grid-cols-1  lg:grid-cols-[minmax(0,700px)_minmax(0,250px)] gap-x-5 ">
          <div className=" bg-bg rounded-2xl">
            <OfferCard
              varinat="modal1"
              button={<div>btn</div>}
              imgsrc={scarf}
              price={11000}
              headers="20% تخفیف"
              offer={12}
            />
          </div>
          <div className=" bg-bg rounded-2xl hidden lg:block ">
            <div className="flex justify-center items-start  h-50">
              <img
                src={zangol}
                alt="zang-logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className=" w-full p-2 flex justify-center items-center font-semibold text-[17px] mt-2">
              تخفیفات به اتمام رسید
            </h4>
            <p className="w-full flex justify-center items-center">
              Amazing offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
