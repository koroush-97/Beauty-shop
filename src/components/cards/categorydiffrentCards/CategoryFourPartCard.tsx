import WrappernBox from "../../wrappernBox";

type CategoryFourPartCardprops = {
  pic1: string;
  pic2: string;
  pic3: string;
  pic4: string;
  header: string;
  description: string;
};

export default function CategoryFourPartCard({
  pic1,
  pic2,
  pic3,
  pic4,
  header,
  description,
}: CategoryFourPartCardprops) {
  return (
    <WrappernBox classname=" hover:bg-yellow cursor-pointer w-full md:w-[60%] lg:w-full mx-auto ">
      <div className="h-full w-full hover:bg-bg grid grid-rows-[minmax(0,75%)_minmax(0,25%)] rounded-2xl duration-500">
        <div className=" grid grid-rows-2 w-full  gap-2">
          <div className="grid grid-cols-2 gap-2  w-[80%] mx-auto">
            <div className="flex justify-center items-center h-30 overflow-hidden  p-2">
              <img
                src={pic1}
                alt="palto"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-30 overflow-hidden  p-2">
              <img
                src={pic2}
                alt="palto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 w-[80%] mx-auto">
            <div className="flex justify-center items-center h-30 overflow-hidden  p-2">
              <img
                src={pic3}
                alt="palto"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-30 overflow-hidden  p-2">
              <img
                src={pic4}
                alt="palto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center ">
          <h5 className="font-semibold text-xl">{header}</h5>
          <p>{description}</p>
        </div>
      </div>
    </WrappernBox>
  );
}
