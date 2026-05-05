import type React from "react";

type navmenuprops = {
  children: React.ReactNode;
  num: number;
  activeList: number;
  setActiveList: (num: number) => void;
};

export default function NavMenuItem({
  children,
  num,
  activeList,
  setActiveList,
}: navmenuprops) {
  const isActive = activeList === num;

  return (
    <div
      className={`navbar-orders p-3 flex justify-end items-center  w-full  cursor-pointer 
        ${isActive ? " bg-[#111173] text-bg rounded-2xl hover:font-bold transition-all duration-900 ease-in-out text-[18px]" : ""}`}
      onMouseEnter={() => setActiveList(num)}
    >
      <span>{children}</span>
    </div>
  );
}
