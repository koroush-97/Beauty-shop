import zangol from "../../assets/photo/offer-section/zangoleh.png";

import daman from "./../../assets/photo/products/daman.png";
import manto from "./../../assets/photo/products/manto-1.jpg";
import palto from "./../../assets/photo/products/palto.png";

import sportWomen1 from "./../../assets/photo/products/sport-shoes-1.jfif";
import sportWomen2 from "./../../assets/photo/products/sport-shoes-2.jfif";
import sportWomen3 from "./../../assets/photo/products/sport3-shoes3-ٌWomen.jpg";

import CommonSwiper from "../Swiper/commonSwiper";
import { OfferCard } from "../cards";

export default function Bestcategories() {
  return (
    <div className="min-h-87.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,350px)_minmax(0,980px)] gap-x-2">
      <div className=" hidden md:flex">
        <CommonSwiper>
          <OfferCard
            variant="modal2"
            imgsrc={daman}
            price={19000}
            titleProducts="دامن نخی مدل تابستانی در 4 رنگ"
          />
          <OfferCard
            variant="modal2"
            imgsrc={manto}
            price={120000}
            titleProducts="مانتو آبی مخمل زمستانی"
          />
          <OfferCard
            variant="modal2"
            imgsrc={palto}
            price={1990000}
            titleProducts="پالتو نیم تنه کوتاه کرم"
          />
        </CommonSwiper>
      </div>
      <div className=" bg-yellow rounded-2xl p-3 ">
        <div className=" rounded-2xl w-full h-full  grid grid-cols-1 md:grid-cols-1  lg:grid-cols-[minmax(0,700px)_minmax(0,250px)] gap-x-5 ">
          <div className=" bg-bg rounded-2xl">
            <CommonSwiper slidesPerView={1}>
              <OfferCard
                variant="modal1"
                imgsrc={sportWomen1}
                price={1990000}
                brandName="TX-2120"
                descriptionProduct="راحتی و پاشنه و کفی ارگونومی خاص"
                offer="12%تخفیف"
                productTitle="کفش زنانه 1"
              />
              <OfferCard
                variant="modal1"
                imgsrc={sportWomen2}
                price={250000}
                brandName="puma"
                descriptionProduct="کفش شیک و خاص  برای پیاده روی طولانی مدت"
                offer="8%تخفیف"
                productTitle="کفش زنانه با ظاهری زیبا و دلپسن"
              />
              <OfferCard
                variant="modal1"
                imgsrc={sportWomen3}
                price={1990000}
                brandName="sumatra-11"
                descriptionProduct="ظاهری خاص و جذاب برای شیک پسندا "
                offer="9% تخفیف"
                productTitle="کفش دخترانه مدل کف موجدار"
              />
            </CommonSwiper>
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
