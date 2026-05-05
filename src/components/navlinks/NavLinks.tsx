import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";

type NavLinksProps = {
  show: boolean;
  setshow: (value: boolean) => void;
};

export default function NavLinks({ setshow, show }: NavLinksProps) {
  function mouseEnterhandler() {
    return setshow(true);
  }

  return (
    <ul className="flex flex-row-reverse p-2 lg:gap-x-5  text-[10px] lg:text-[14px] flex-wrap gap-y-2">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          <span className="  w-10 text-[14px]"> صفحه اصلی</span>
        </NavLink>
      </li>

      <li
        className="hover:font-bold  flex flex-row"
        onMouseEnter={mouseEnterhandler}
        // onMouseLeave={mouseleavehandler}
      >
        <div
          className={
            show
              ? "nav-link nav-link-active cursor-pointer flex flex-row justify-center items-center"
              : "nav-link cursor-pointer flex flex-row justify-center items-center"
          }
        >
          <span className="pt-1.5">
            <IoMdArrowDropdown />
          </span>
          <span className=" text-[14px]">دسته بندی محصول</span>
        </div>
      </li>

      <li>
        <NavLink
          to={"/Trackorders"}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          <span className=" text-[14px]">پیگیری سفارشات</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/weblog"}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          <span className=" text-[14px]">وبلاگ</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/callus"}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          <span className=" text-[14px]">تماس با ما</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          <span className=" text-[14px]">درباره ما</span>
        </NavLink>
      </li>
    </ul>
  );
}
