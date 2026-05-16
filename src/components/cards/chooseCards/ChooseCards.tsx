import WrappernBox from "../../wrappernBox";

type ChooseCardsprops = {
  imgsrc: string;
  title: string;
  price: number;
};

export default function ChooseCards({
  imgsrc,
  title,
  price,
}: ChooseCardsprops) {
  return (
    <WrappernBox classname=" bg-bg group border-2  border-lightback hover:border-[#11126f] rounded-2xl h-80 grid grid-cols-1 grid-rows-[minmax(0,50%)_minmax(0,30%)_minmax(0,15%)] cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-5.5 ">
      <div className="  group-hover:border-[#11126f] ">
        <img
          src={imgsrc}
          alt="pic-products"
          className="w-full h-full  object-contain mx-auto"
        />
      </div>
      <div className=" flex justify-center items-center flex-col   p-2  relative">
        <div
          dir="rtl"
          className="  flex-1 h-full  flex justify-center items-center p-1  text-right  "
        >
          {title}
        </div>
        <div className=" flex-1 h-full  flex justify-start items-center p-1 ">
          <span className="px-1"> تومان</span>
          <h5 dir="rtl" className="font-semibold">
            <span>{price}</span>
          </h5>
        </div>
      </div>
      <div className=" relative">
        <div className="flex justify-center items-center relative  h-full  z-50 bg-bg ">
          {" "}
          <button className=" absolute bg-[#e7e7f1] px-3 py-2 rounded-2xl group-hover:bg-[#121073] duration-500 group-hover:text-bg top-12 z-50">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </WrappernBox>
  );
}
