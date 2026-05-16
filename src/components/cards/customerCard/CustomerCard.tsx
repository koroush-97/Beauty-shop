import WrappernBox from "../../wrappernBox";
import { FaHeartCircleCheck } from "react-icons/fa6";

import { MainBtn } from "../../buttons";

type CustomerCardprops = {
  imgsrc: string;
  namecustomer: string;
  message: string;
};

export default function CustomerCard({
  imgsrc,
  namecustomer,
  message,
}: CustomerCardprops) {
  return (
    <WrappernBox classname="flex flex-col min-h-70  ">
      <div className="relative  w-full h-20 flex justify-center items-start">
        <img
          src={imgsrc}
          alt="customer"
          className="    w-20 h-20 object-contain rounded-full aspect-square z-50 "
        />
      </div>
      <div className=" flex justify-center items-center">
        <h5 className="font-semibold">
          {namecustomer} <span> </span>
          <span className="text-[13px] text-yellow">مشتری</span>
        </h5>
      </div>
      <div className=" ">
        <p dir="rtl" className="px-1">
          {message}
        </p>
      </div>
      <div className="  ">
        <div className=" w-12.5 group">
          <MainBtn
            text={
              <FaHeartCircleCheck
                size={20}
                className="group-hover:text-[red]"
              />
            }
          />
        </div>
      </div>
    </WrappernBox>
  );
}
