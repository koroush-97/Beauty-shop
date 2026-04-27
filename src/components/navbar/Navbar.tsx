import logo from "../../assets/photo/logo-beauty.png";

import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

import NavLinks from "../navlinks/NavLinks";
import SearchBar from "../searchbar/SearchBar";
import IconButton from "../buttons/IconButton";

export default function Navbar() {
  return (
    <div className=" relative bw-full min-h-30 mt-8 rounded-[22px] gap-x-10 flex flex-row py-0 px-10 justify-around">
      <div className="absolute w-full bg-lightback -z-20 top-[15%] h-22 rounded-[22px]"></div>
      <div className=" flex flex-row w-full gap-x-5  ">
        <div className="bg-bg flex-1/6 flex flex-col border border-lightback rounded-[22px] h-30 z-20 p-5 gap-y-2 justify-center items-center">
          <div className=" flex-1 flex flex-row justify-between gap-x-17">
            <IconButton>
              <div className="flex flex-row gap-2 m-2 justify-center items-center">
                {" "}
                <div className="p-1.5 rounded-lg bg-lightback">
                  {" "}
                  <FaBagShopping size={15} color="blue" />
                </div>
                <span className="text-[10px]">0</span>{" "}
              </div>
            </IconButton>
            <IconButton>
              <div className="flex flex-row gap-2 m-2 justify-center items-center">
                {" "}
                <div className="p-1.5 rounded-lg bg-lightback">
                  {" "}
                  <FaUser size={15} color="blue" />
                </div>
                <span className="text-[10px]">ورود و عضویت</span>{" "}
              </div>
            </IconButton>
          </div>
          <div className=" flex-1 mx-auto">
            <IconButton width={240}>
              <div className="flex flex-row gap-2 m-2 justify-between px-1  w-full items-center">
                {" "}
                <div className=" p-2 rounded-lg bg-lightback flex  flex-row justify-center items-center">
                  {" "}
                  <FaHeadset size={18} color="blue" />
                </div>
                <span className="text-[12px] flex-1/3">0918000000</span>
                <span className="text-[12px] flex-1/3 ">پشتیبانی </span>{" "}
              </div>
            </IconButton>
          </div>
        </div>

        <div className="bg-bg flex-4/6 flex flex-col border border-lightback rounded-[22px] p-5 gap-y-2 justify-center items-end">
          <div className="flex-1  w-[80%] text-end justify-end items-center">
            <SearchBar />
          </div>
          <div className="flex-1  w-full text-end justify-center items-center">
            <NavLinks />
          </div>
        </div>
        <div className="bg-bg flex-1/6 border  border-lightback  rounded-[22px] flex justify-center items-center">
          <div className=" w-full h-[60%] px-5">
            <img
              src={logo}
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
