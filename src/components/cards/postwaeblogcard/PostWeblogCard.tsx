import type { BlogCard } from "../../../types/WeblogTypes";
import { FiCalendar } from "react-icons/fi";
import WrappernBox from "../../wrappernBox";

export default function PostWeblogCard({
  category,
  title,
  imageUrl,
  description,
  date,
}: BlogCard) {
  return (
    <WrappernBox>
      <div className=" w-full h-auto flex flex-col md:px-2 cursor-pointer">
        <div className="relative ">
          <img
            src={imageUrl}
            alt={title}
            className=" border-5 border-lightback rounded-2xl w-full h-50.5 object-fill"
          />

          <span className="absolute top-2 right-2  bg-lightback px-4 py-1 rounded-bl-2xl rounded-tr-2xl font-semibold">
            {category}
          </span>
        </div>
        <h3 className="font-semibold text-[18px] py-1">{title}</h3>
        <p className="px-1 my-2">{description}</p>
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="px-3 py-1 flex  flex-row-reverse items-center gap-x-2 font-semibold">
            {date} <FiCalendar className="text-yellow-500" size={20} />{" "}
          </div>
          <div className=" px-2">بیشتر بخوانید</div>
        </div>
      </div>
    </WrappernBox>
  );
}
