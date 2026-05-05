// @ components
import NavMenuItem from "../navMenuItem/NavMenuItem";
import type { Orders } from "../../types/OrdersType";
import MegaColumnItem from "../megaColumnItem/MegaColumnItem";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

type HeaderBlock = {
  title: string;
  items: string[];
  size: number;
};

interface MegaMenuPanelProps {
  order: Orders;
}

export default function MegaMenuPanel({ order }: MegaMenuPanelProps) {
  const [activeList, setActiveList] = useState(0);

  const menuMap: (keyof Orders)[] = [
    "clothesTypes",
    "brands",
    "electrovicels",
    "Personalhygiene",
    "perfume",
    "skincare",
    "haircare",
  ];

  const activeKey = menuMap[activeList];
  const activeData = order[activeKey];

  const buildHeaderBlocks = (contents: Record<string, string[]> = {}) => {
    return Object.entries(contents).map(([title, items]) => ({
      title,
      items,
      size: items.length + 1,
    }));
  };

  const distributeBlocksIntoColumns = (
    blocks: HeaderBlock[],
    columnCount = 4,
  ) => {
    const columns: HeaderBlock[][] = Array.from(
      { length: columnCount },
      () => [],
    );
    const columnHeights = new Array(columnCount).fill(0);

    blocks.forEach((block) => {
      const smallestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights),
      );
      columns[smallestColumnIndex].push(block);
      columnHeights[smallestColumnIndex] += block.size;
    });

    return columns;
  };

  const blocks = buildHeaderBlocks(activeData.contents);
  const columns = distributeBlocksIntoColumns(blocks);

  const hasBlocks = blocks.length > 0;

  return (
    <div className="hidden lg:flex flex-row absolute w-[85%] h-auto  shadow-[0_8px_24px_-6px_rgba(0,0,0,0.80)]  left-30 z-20 bg-bg rounded-xl ">
      <div dir="rtl" className="flex-1 flex gap-10">
        {hasBlocks
          ? columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col gap-6 min-w-45 border-r border-lightback p-2"
              >
                {column.map((block, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-center gap-x-1"
                  >
                    <IoMdCheckmark color="#fcbd15" className="mt-1 text-2xl" />
                    <MegaColumnItem item={block.title}>
                      {block.items.map((subItem, i) => (
                        <span
                          key={i}
                          className="text-sm opacity-70 p-2 hover:opacity-100 cursor-pointer"
                        >
                          {subItem}
                        </span>
                      ))}
                    </MegaColumnItem>
                  </div>
                ))}
              </div>
            ))
          : activeData.header.map((item, index) => (
              <MegaColumnItem key={index} item={item} />
            ))}
      </div>

      <div className="bg-bg max-w-75 min-w-37.5 flex flex-col rounded-xl items-center justify-between py-2.5 px-0">
        {/* ---navmenuIcon--- */}
        {menuMap.map((key, i) => (
          <NavMenuItem
            key={key}
            activeList={activeList}
            setActiveList={setActiveList}
            num={i}
          >
            {navMenuTitleMap[key]}
          </NavMenuItem>
        ))}
      </div>
    </div>
  );
}

const navMenuTitleMap: Record<keyof Orders, string> = {
  clothesTypes: "پوشاک زنانه",
  brands: "برند ها",
  electrovicels: "لوازم برقی",
  Personalhygiene: "بهداشت شخصی",
  perfume: "عطر و ادکلن",
  skincare: "مراقبت از پوست",
  haircare: "مراقبت از مو",
};
