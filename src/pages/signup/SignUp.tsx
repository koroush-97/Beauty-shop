import { Link } from "react-router-dom";
import { FaDoorOpen } from "react-icons/fa6";
import toast from "react-hot-toast";
import { type UseFormReturn } from "react-hook-form";

// @ components
import { HandledForm, FormInput, FormFileUploader } from "../homePage";

import background from "../../assets/photo/login/background.png";
import logo from "../../assets/photo/login/logo-beauty.png";

type SignUpValues = {
  fullName: string;
  email: string;
  telephone: string;
  address: string;
  password: string;
  avatar: FileList;
};

export default function SignUp() {
  const onSubmit = async (
    data: SignUpValues,
    methods: UseFormReturn<SignUpValues>,
  ) => {
    try {
      console.log("ثبت نام با اطلاعات:", data);

      toast.success("ثبت نام با موفقیت انجام شد!");

      methods.reset();
    } catch (error) {
      console.log("error", error);
      toast.error("خطایی رخ داد");
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex justify-center items-center bg-lightback"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container border-10 border-yellow bg-white w-full min-h-150 rounded-2xl grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="p-5 bg-white h-auto lg:border-l border-lightback">
          <HandledForm<SignUpValues>
            onSubmit={onSubmit}
            className="w-full h-full gap-y-3 flex flex-col"
          >
            <h1 className="text-[16px] lg:text-2xl font-semibold py-2 text-center">
              لطفا اطلاعات خود را با دقت وارد کنید
            </h1>

            <div className="flex flex-col px-2 gap-y-2">
              <label className="font-semibold">نام و نام خانوادگی</label>
              <FormInput
                name="fullName"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                rules={{ required: "نام الزامی است" }}
                className="w-full py-2 px-5 rounded-xl outline-yellow border border-lightback"
              />
            </div>

            <div className="flex flex-col px-2 gap-y-2">
              <label className="font-semibold">ایمیل</label>
              <FormInput
                name="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                rules={{
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "ایمیل نامعتبر است",
                  },
                }}
                className="w-full py-2 px-5 rounded-xl outline-yellow border border-lightback"
              />
            </div>

            <div className="flex flex-col px-2 gap-y-2">
              <label className="font-semibold">شماره تلفن</label>
              <FormInput
                name="telephone"
                type="tel"
                placeholder="یازده رقم"
                rules={{
                  required: "شماره تلفن الزامی است",
                  pattern: {
                    value: /^(09|\+989)\d{9}$/,
                    message: "شماره تلفن معتبر نیست",
                  },
                }}
                className="w-full py-2 px-5 rounded-xl outline-yellow border border-lightback text-right rtl "
              />
            </div>

            <div className="flex flex-col px-2 gap-y-2">
              <label className="font-semibold">آدرس محل سکونت</label>
              <FormInput
                name="address"
                placeholder="آدرس را وارد کنید"
                rules={{ required: "آدرس الزامی است" }}
                className="w-full py-2 px-5 rounded-xl outline-yellow border border-lightback"
              />
            </div>

            <div className="flex flex-col px-2 gap-y-2">
              <label className="font-semibold">رمز عبور</label>
              <FormInput
                name="password"
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                rules={{
                  required: "رمز عبور الزامی است",
                  minLength: { value: 6, message: "حداقل ۶ کاراکتر" },
                }}
                className="w-full py-2 px-5 rounded-xl outline-yellow border border-lightback"
              />
            </div>

            <FormFileUploader
              name="avatar"
              rules={{ required: "انتخاب عکس پروفایل الزامی است" }}
            />

            <div className="my-2 h-12 flex flex-col gap-y-2 md:flex-row justify-between items-center">
              <button
                type="submit"
                className="h-full rounded-xl px-5 font-semibold bg-lightback hover:bg-blue-950 hover:text-white duration-300 cursor-pointer"
              >
                ارسال اطلاعات
              </button>
              <Link
                to="/"
                className="text-yellow font-semibold text-[18px] flex flex-row gap-x-2 justify-center items-center"
              >
                صفحه اصلی <FaDoorOpen />
              </Link>
            </div>
          </HandledForm>
        </div>

        <div className="hidden lg:flex bg-white">
          <img
            src={logo}
            alt="logo"
            className="-rotate-90 w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
