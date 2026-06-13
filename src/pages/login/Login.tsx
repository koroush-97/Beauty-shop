// @ assets
import { Link } from "react-router-dom";
import ladylogo from "../../assets/photo/login/lady-img.png";
import barg from "../../assets/photo/login/shap - Copy.png";
import barg2 from "../../assets/photo/login/shap.png";
import beautyLogo from "../../assets/photo/login/logo-beauty.png";
import beard from "../../assets/photo/login/favicon-1.png";
import background from "../../assets/photo/login/background.png";

// @ components
import { FaDoorOpen } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import type { UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";

import { FormInput, HandledForm } from "../homePage";

type LoginValues = {
  telephon: string;
  password: string;
};

export default function Login() {
  const onSubmit = async (
    values: LoginValues,
    methods: UseFormReturn<LoginValues>,
  ) => {
    try {
      console.log("در حال ارسال اطلاعات...", values);

      toast.success("خوش آمدید!");

      methods.reset();
    } catch (error) {
      console.error(error);
      toast.error("خطایی رخ داد");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="min-h-screen bg-lightback relative z-0"
    >
      <div className="container my-3 min-h-screen z-30 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-175 w-full border-10 border-yellow rounded-2xl bg-white relative">
          {/* left */}
          <div className="h-full lg:flex justify-center items-center hidden flex-col relative z-100">
            <div className="z-100 w-full h-auto flex flex-col justify-center items-center relative py-20">
              <div className="absolute z-50 top-0 right-0 bottom-0 left-0 grid-cols-1 grid-rows-2 w-full h-full">
                <div className="w-full h-[50%]">
                  <img
                    src={barg}
                    alt="عکس برگ"
                    className="lg:w-52.5 md:w-42 absolute top-0 left-0"
                  />
                </div>

                <div dir="rtl" className="w-full h-[50%] relative">
                  <img
                    src={barg2}
                    alt="عکس برگ"
                    className="lg:w-52.5 absolute bottom-0 right-0 md:w-42"
                  />
                </div>
              </div>

              <div dir="rtl" className="-mt-5 mb-10 w-full px-5 relative z-500">
                <Link
                  to="/"
                  className="gap-3.75 flex flex-row items-center cursor-pointer"
                >
                  <p className="text-yellow font-semibold text-[14px]">
                    صفحه ی اصلی
                  </p>
                  <span>
                    <FaDoorOpen size={20} className="text-yellow" />
                  </span>
                </Link>
              </div>

              <div className="w-100 h-100 flex justify-center items-center">
                <img
                  src={ladylogo}
                  className="md:w-[70%] h-full object-contain"
                  alt="تصویر لوگو"
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div
            dir="rtl"
            className="h-full p-5 flex justify-center items-center rounded-2xl relative z-100"
          >
            <div className="w-full h-auto py-5 flex flex-col gap-y-25 md:px-2 rounded-2xl bg-white">
              <div dir="rtl" className="w-full h-30 flex">
                <img
                  src={beautyLogo}
                  className="w-62.5 h-full object-contain"
                  alt="beauty-logo"
                />
              </div>

              <div className="h-full flex flex-col">
                <div className="flex flex-col gap-y-2 py-2">
                  <h3 className="text-[19px] font-semibold">
                    وارد شوید و بدرخشید!
                  </h3>
                  <p className="text-[15px]">
                    آماده اید که درخشش خود را ادامه دهید؟
                  </p>
                </div>

                <HandledForm<LoginValues>
                  onSubmit={onSubmit}
                  defaultValues={{
                    telephon: "",
                    password: "",
                  }}
                  className="flex flex-col py-2 gap-y-2"
                >
                  <div className="flex flex-col md:flex-row w-full gap-2">
                    <label
                      htmlFor="telephon"
                      className="w-[90%] py-2 md:py-0 mx-auto md:w-[25%] flex justify-center items-center border-2 border-lightback rounded-xl px-2"
                    >
                      شماره تلفن همراه
                    </label>

                    <div className="w-[91%] py-1 mx-auto md:w-[75%] flex flex-row items-center border-2 border-lightback rounded-xl">
                      <BsTelephoneFill className="w-[10%] size-5 text-yellow hidden md:block" />

                      <div className="w-full">
                        <FormInput
                          name="telephon"
                          type="text"
                          placeholder="تلفن همراه خود را وارد کنید"
                          rules={{
                            required: "شماره تلفن الزامی است",
                            pattern: {
                              value: /^(09|\+989)\d{9}$/,
                              message:
                                "شماره تلفن معتبر نیست (مثال: 09123456789)",
                            },
                          }}
                          className="w-full py-2 px-5 outline-none text-[12px] border-0 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row w-full gap-2">
                    <label
                      htmlFor="password"
                      className="w-[90%] py-2 mx-auto md:py-0 md:w-[25%] flex justify-center items-center border-2 border-lightback rounded-xl px-2"
                    >
                      رمز عبور
                    </label>

                    <div className="w-[91%] py-1 mx-auto md:w-[75%] flex flex-row items-center border-2 border-lightback rounded-xl">
                      <div className="w-[20%] md:w-[10%] h-full rounded-xl flex justify-center items-center bg-lightback cursor-pointer">
                        <IoEyeSharp
                          className="text-blue-800 rounded-xl"
                          size={25}
                        />
                      </div>

                      <div className="w-full">
                        <FormInput
                          name="password"
                          type="password"
                          placeholder="پسورد خود را وارد کنید"
                          rules={{
                            required: "رمز عبور الزامی است",
                            minLength: {
                              value: 6,
                              message: "حداقل ۶ کاراکتر",
                            },
                          }}
                          className="w-full py-2 px-5 outline-none border-0 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="my-5 w-full">
                    <button
                      type="submit"
                      className="w-full text-center py-2 rounded-xl bg-yellow cursor-pointer font-semibold"
                    >
                      ورود به حساب کاربری
                    </button>
                  </div>
                </HandledForm>

                <div className="flex flex-col md:flex-row gap-y-5">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold">
                      حساب کاربری فعال در بیوتی استایل ندارید؟{" "}
                      <Link
                        to="/signup"
                        className="text-yellow border-b-2 pb-1 cursor-pointer"
                      >
                        ثبت نام
                      </Link>
                    </p>
                  </div>

                  <div>
                    <img src={beard} alt="beard" className="w-17.5 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
