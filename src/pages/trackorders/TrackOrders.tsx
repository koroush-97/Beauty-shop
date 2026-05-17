// @components
import { PageTitle } from "../homePage";
import { TitleItem } from "../homePage";

// @assetss
import logoParaph from "../../assets/photo/logo-beauty-paragheraph.png";

export default function TrackOrders() {
  return (
    <div className=" h-auto flex flex-col">
      <PageTitle />
      <div className=" max-h-40 flex justify-end mt-20 mb-5">
        <TitleItem
          classname=" flex justify-end items-center gap-x-2"
          header={<h3 className="text-black text-[25px]">پیگیری سفارشات</h3>}
          icon={
            <div className="pr-5 h-15 flex items-center ">
              <img
                src={logoParaph}
                alt="logo"
                className="h-full w-auto object-contain"
              />
            </div>
          }
        />
      </div>

      <p dir="rtl" className=" text-[20px] text-text mb-5">
        برای رهگیری سفارشتان شماره سفارش و ایمیلی که درهنگام ثبت سفارش وارد
        کردید را در این قسمت وارد و کلید رهگیری را فشار دهید.
      </p>

      <div dir="rtl" className=" flex flex-col lg:flex-row min-h-20">
        <div className="flex-1 flex flex-col items-start justify-between ">
          <p className="text-[20px] font-semibold">شماره سفارش</p>
          <input
            type="text"
            placeholder="شماره سفارش را در ایمیل ارسال شده موجود است"
            className="w-[60%] border-2 border-lightback p-2 rounded-xl "
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-between ">
          <p className="text-[20px] font-semibold">ایمیل صورتحساب</p>
          <input
            type="text"
            placeholder="ایمیلی که در هنگام ثبت سفارش وارد کردید."
            className="w-[60%] border-2 border-lightback p-2 rounded-xl "
          />
        </div>
      </div>

      <div dir="rtl" className=" my-12 flex">
        <button className="min-h-10 border px-4  rounded-xl text-[25px] font-semibold bg-[#f7f0dd] cursor-pointer text-[#ebba44] hover:bg-[#ebba44] hover:text-white duration-300 ">
          {" "}
          رهگیری{" "}
        </button>
      </div>
    </div>
  );
}
