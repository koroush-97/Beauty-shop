// @ icones
import { IoMdArrowDropleft } from "react-icons/io";

interface FeatureBoxProps {
  title: string;
  description: string;
  image: string;
  width?: string;
  height?: string;
}

export default function FeatureBox({
  title,
  description,
  image,
  width = "100%",
  height = "100%",
}: FeatureBoxProps) {
  return (
    <div className="flex p-1 gap-x-1 py-5" style={{ width, height }}>
      {/* Text Section */}
      <div
        dir="rtl"
        className="p-2 flex flex-col flex-[2/3] w-[70%] justify-center items-center"
      >
        <h3 className="lg:text-[14px] font-semibold ">{title}</h3>
        <p className="text-[10px] md:text-[11px] lg:text-[12px] ">
          {description}
        </p>
      </div>

      {/* Icon Section */}
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
}
