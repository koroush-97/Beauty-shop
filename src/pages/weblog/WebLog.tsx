import { ComponentLink, PageTitle, TitleItem } from "../homePage";
import PostWeblogCard from "../../components/cards/postwaeblogcard/PostWeblogCard";
import { mockPosts } from "../../mock/weblog";
import logoParaph from "../../assets/photo/logo-beauty-paragheraph.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";
import { FiPackage } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { SearchBar } from "../homePage";

export default function WebLog() {
  return (
    <div className=" h-auto flex flex-col">
      <PageTitle />

      <div className="  grid grid-cols-1 lg:grid-cols-[4fr_1fr] ">
        <div>
          <div
            dir="rtl"
            className=" grid grid-cols-1 md:grid-cols-[1fr_2fr] my-5  px-5 py-2 min-h-5"
          >
            <p className="text-xl">مرتب سازی :</p>
            <ul className="flex flex-col gap-y-2 md:flex-row gap-x-5">
              <li className="cursor-pointer">
                <p className="text-xl ">منتخب</p>
              </li>
              <li className="cursor-pointer">
                <p className="text-xl">پربازدیدترین</p>
              </li>
              <li className="cursor-pointer">
                <p className="text-xl">جدیدترین</p>
              </li>
              <li className="cursor-pointer">
                <p className="text-xl">قدیمی ترین</p>
              </li>
            </ul>
          </div>
          <div
            dir="rtl"
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 "
          >
            {mockPosts.map((post) => (
              <PostWeblogCard
                key={post.id}
                id={post.id}
                category={post.category}
                title={post.title}
                imageUrl={post.imageUrl}
                description={post.description}
                date={post.date}
              />
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-y-5 ">
          <div className=" my-5 px-2">
            <SearchBar inputPlacrHolder="جستجوی نام مقالات" />
          </div>
          <TitleItem
            content="Beauty Blog Categories"
            classname=" flex justify-end items-center gap-x-2"
            header={
              <h3 className="text-black xl:text-[18px]">دسته بندی مقالات</h3>
            }
            icon={
              <div className="pr-5 h-15 flex items-center ">
                <img
                  src={logoParaph}
                  alt="logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
            }
          />

          <div
            dir="rtl"
            className=" h-auto w-full mt-8 flex flex-col px-2 gap-y-3"
          >
            <ComponentLink
              icon={<FaPaintBrush />}
              description="ترندهای دنیای زیبای"
              arrow={<IoIosArrowBack />}
            />

            <ComponentLink
              icon={<PiShoppingBagOpen />}
              description="معرفی محصولات"
              arrow={<IoIosArrowBack />}
            />
            <ComponentLink
              icon={<FiPackage />}
              description="راهنمای مراقبت از پوست"
              arrow={<IoIosArrowBack />}
            />
            <ComponentLink
              icon={<IoWaterOutline />}
              description="راهنمای زیبایی و آرایش"
              arrow={<IoIosArrowBack />}
            />
          </div>
        </div>{" "}
      </div>
      <div
        dir="rtl"
        className=" min-h-20  my-5 flex justify-center items-center"
      >
        <div className="mx-2  h-15 w-auto flex justify-center items-center px-2 rounded-2xl bg-yellow text-white border-5 p-4 border-white cursor-pointer">
          Back
        </div>
        <div className="w-[50%] md:w-[30%] lg:w-[15%] h-25  grid  grid-cols-3 gap-x-1">
          <div className=" flex justify-center items-center">
            <div className="border border-lightback rounded-2xl cursor-pointer hover:bg-lightback hover:text-black hover:font-semibold text-gray-500 duration-300 w-full h-[60%] flex justify-center items-center">
              1
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="border border-lightback rounded-2xl cursor-pointer hover:bg-lightback hover:text-black hover:font-semibold text-gray-500 duration-300 w-full h-[60%] flex justify-center items-center">
              2
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="border border-lightback rounded-2xl cursor-pointer hover:bg-lightback hover:text-black hover:font-semibold text-gray-500 duration-300 w-full h-[60%] flex justify-center items-center">
              3
            </div>
          </div>
        </div>
        <div className="mx-2  h-15 w-auto flex justify-center items-center px-2 rounded-2xl bg-yellow text-white border-5 p-4 border-white cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
}
