// @links
import { Link } from "react-router-dom";

// @icons
import { IoMdArrowDropleft } from "react-icons/io";

type CategoryCardProps = {
  title: string;
  image: string;
  to: string;
  className?: string;
};

export default function CategoryCard({
  title,
  image,
  to,
  className = "",
}: CategoryCardProps) {
  return (
    <Link
      to={to}
      className={`group flex flex-col justify-center items-center relative w-full h-full hover:bg-yellow rounded-2xl duration-500 cursor-pointer ${className}`}
    >
      <div className="arrow absolute top-0 bottom-0 right-0 left-0">
        <IoMdArrowDropleft
          size={50}
          className="top-[30%] right-[-10%] absolute text-lightback"
        />
      </div>

      <div className="flex-1 w-full h-[90%] lg:w-[80%] lg:h-[60%]">
        <img src={image} alt={title} className="w-full h-full object-fill" />
      </div>

      <div className="flex-[1/2]">
        <p className="transition-colors duration-300 group-hover:text-white p-2 text-[18px]">
          {title}
        </p>
      </div>
    </Link>
  );
}
