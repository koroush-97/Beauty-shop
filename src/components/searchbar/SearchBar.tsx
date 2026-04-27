import Input from "../input/Input";
import IconButton from "../buttons/IconButton";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex flex-row border-2 border-lightback rounded-lg">
      <div className="w-20  flex justify-center items-center">
        <IconButton>
          <IoSearchSharp size={20} className="bg-lightback w-15" color="blue" />
        </IconButton>
      </div>
      <div className="flex-1 ">
        <Input placeholder="...جستجوی نام محصول ، شرکت و " />
      </div>
    </div>
  );
}
