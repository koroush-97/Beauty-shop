// @ photos and asstess
import logo from "../../assets/photo/logo-beauty.png";
// @ icons
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
// @ components
import NavLinks from "../navlinks/NavLinks";
import SearchBar from "../searchbar/SearchBar";
import IconButton from "../buttons/iconBuuton/IconButton";
import MegaMenuPanel from "../orderhero/MegaMenuPanel";

// @ hooks
import { useState, useRef, useEffect } from "react";

// @ Mock
import orders from "../../mock/orders";

export default function Navbar() {
  const [show, isShow] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        isShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function showhandler() {
    return isShow((prev) => !prev);
  }

  return (
    <div className="relative">
      {/* desktop nav */}
      <div className="hidden lg:flex relative lg:flex-1 px-5 min-h-30 mt-8 rounded-[22px] gap-x-1 lg:gap-x-10  flex-row justify-center lg:justify-around">
        {/* gray layer */}
        <div className="hidden lg:flex absolute w-full bg-lightback -z-20 top-[15%] h-22 rounded-[22px]"></div>

        <div className="  flex flex-row flex-1  gap-x-0 lg:gap-x-5 ">
          {/*----- user and login and shop------ */}
          <div className="bg-bg md:flex-1 flex-[0.5] flex-col rounded-[22px] h-30 z-20 lg:p-5  justify-center items-center ">
            <div className=" flex-1 flex flex-row md:justify-between gap-x-2 lg:gap-x-17 md:gap-x-2 -mt-3 pb-3">
              <IconButton>
                <div className="flex flex-row gap-2 m-2 justify-center items-center">
                  {" "}
                  <div className="p-1.5 rounded-lg bg-lightback ">
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
            <div>
              <IconButton classname="flex flex-row w-full  p-2 justify-between items-center">
                <span className="flex-[1/3} bg-lightback p-1.5 rounded-lg">
                  <FaHeadset size={18} color="blue" />
                </span>
                <span className="text-[12px] flex-[1/3]">0918000000</span>
                <span className="text-[12px] flex-[1/3] ">پشتیبانی</span>
              </IconButton>
            </div>
          </div>
          {/* ----main and searchBar----- */}
          <div className=" bg-bg  md:flex-2  flex-2 flex flex-col  rounded-[22px] p-2  justify-center items-end">
            <div className="flex-1  w-[80%] text-end justify-end items-center mt-2">
              <SearchBar />
            </div>
            <div className="flex-1 p-2  text-end justify-center items-center">
              <NavLinks setshow={showhandler} show={show} />
            </div>
          </div>
          {/* ----logo part----- */}
          <div className="bg-bg md:flex-1 flex-[1.5] border-lightback  rounded-[22px] flex justify-center items-center text-nowrap">
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
      {/* ---orders production parts */}
      <div
        ref={navbarRef}
        onMouseEnter={() => isShow(true)}
        onMouseLeave={() => isShow(false)}
      >
        {show && <MegaMenuPanel order={orders} />}
      </div>

      {/* -----mobile nav----- */}
      <div className="lg:hidden border p-1 flex flex-row justify-between md:justify-around">
        {/* ---shop--- */}
        <div className="flex-1 flex justify-center items-center ">
          <IconButton>
            <div className="flex flex-row gap-2 m-2 justify-center items-center">
              {" "}
              <div className="p-1.5 rounded-lg bg-lightback">
                {" "}
                <FaBagShopping size={20} color="blue" />
              </div>
              <span className="text-[10px]">0</span>{" "}
            </div>
          </IconButton>
        </div>
        {/* ---logo--- */}
        <div className=" flex-1 px-5  flex justify-center items-center">
          <img
            src={logo}
            className="w-[80%] h-[70%] object-contain"
            alt="Logo"
          />
        </div>
        {/* ---menu---- */}
        <div className="flex-1 flex justify-center items-center">
          <IconButton>
            <div className="flex flex-row gap-2 m-2 justify-center items-center">
              {" "}
              <div className="p-1.5 rounded-lg bg-lightback">
                {" "}
                <IoMenuOutline size={20} color="blue" />
              </div>
            </div>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
