import Input from "../input/Input";
import IconButton from "../buttons/iconBuuton/IconButton";
import { IoSearchSharp } from "react-icons/io5";

type Searchbarprops = {
  inputPlacrHolder?: string;
};

export default function SearchBar({
  inputPlacrHolder = "جستجوی نام محصول ، شرکت و ...",
}: Searchbarprops) {
  return (
    <div className="flex flex-row border-2 border-lightback rounded-lg">
      <div className="w-20  flex justify-center items-center p-2">
        <IconButton>
          <IoSearchSharp size={20} className="bg-lightback w-15" color="blue" />
        </IconButton>
      </div>
      <div className="flex-1 ">
        <Input placeholder={inputPlacrHolder} />
      </div>
    </div>
  );
}
