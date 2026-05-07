// @ components
import AddButton from "../buttons/addButton/AddButton";
// @ icones
import { IoMdArrowDropleft } from "react-icons/io";

interface FeatureBoxProps {
  variant: "info" | "productAction";
  buttoncolor?: "blue" | "yellow";
  title?: string;
  description?: string | React.ReactNode;
  image?: string;
  width?: string;
  height?: string;
}

export default function FeatureBox({
  variant,
  title,
  description,
  image,
  buttoncolor,
  width = "100%",
  height = "100%",
}: FeatureBoxProps) {
  // -------info-card--------
  const renderInfo = () => (
    <div className="flex p-1 gap-x-1 py-5" style={{ width, height }}>
      <div
        dir="rtl"
        className="p-2 flex flex-col flex-[2/3] w-[70%] justify-center items-center"
      >
        <h3 className="lg:text-[14px] font-semibold">{title}</h3>
        <p className="text-[10px] md:text-[11px] lg:text-[12px]">
          {description}
        </p>
      </div>

      <div
        dir="rtl"
        className="relative flex justify-center items-center w-[30%] p-2 border-l-2 border-lightback"
      >
        <div className="absolute -right-6.5 text-lightback">
          <IoMdArrowDropleft size={50} />
        </div>
        <img src={image} alt={title} className="object-fit w-[80%] h-[80%]" />
      </div>
    </div>
  );

  // -------add-bag-products--------

  const renderProductAction = () => (
    <div
      className="p-1 gap-x-1 py-5 bg-bg grid grid-cols-[3fr_1fr]"
      style={{ width, height }}
    >
      <div
        dir="rtl"
        className=" p-1 gap-y-1 md:p-2 flex flex-col justify-start items-center"
      >
        <h3 className="lg:text-[14px] font-semibold hidden">{title}</h3>
        <p className="text-[10px] md:text-[11px] lg:text-[12px] hidden">
          {description}
        </p>
        <p className="text-[12px] text-black lg:text-[16px] lg:font-semibold  font-semibold w-full">
          {title}
        </p>
        <div className=" w-full h-auto flex flex-row  justify-between ">
          <div className=" flex flex-1">{description}</div>
          <div className=" flex justify-center items-center w-[30%] ">
            <AddButton variant={buttoncolor} />
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        className="relative flex justify-center items-center  md:p-2 border-l-2 border-lightback"
      >
        <div className="absolute -right-6.5 text-lightback">
          <IoMdArrowDropleft size={50} />
        </div>

        <div className=" w-full h-30 md:h-20 lg:h-20 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );

  const variants = {
    info: renderInfo(),
    productAction: renderProductAction(),
  };

  return variants[variant] ?? null;
}
