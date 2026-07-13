import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import ladylogo from "../../assets/photo/login/lady-img.png";
import beautyLogo from "../../assets/photo/login/logo-beauty.png";

import { FaDoorOpen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

import type { UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";

import { FormInput, HandledForm } from "../homePage";
import { useAuth } from "../../hooks/useAuth";

type LoginValues = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onSubmit = async (
    values: LoginValues,
    methods: UseFormReturn<LoginValues>,
  ) => {
    try {
      const result = await authService.login(values);

      if (!result.success) {
        toast.error("ورود ناموفق بود");
        return;
      }

      setUser({
        id: result.user.id,
        name: result.user.full_name,
        email: result.user.email,
        role: result.user.role,
        avatar: result.user.avatar,
        phone: result.user.phone,
        password: result.user.password,
      });

      toast.success("ورود با موفقیت انجام شد");
      methods.reset();
      navigate("/");
    } catch (error: unknown) {
      console.error("خطای کامل ورود:", error);

      if (axios.isAxiosError<{ message?: string }>(error)) {
        toast.error(
          error.response?.data?.message ?? "ایمیل یا رمز عبور اشتباه است",
        );
      } else {
        toast.error("خطای غیرمنتظره‌ای رخ داد");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="container grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl border border-border">
        {/* left side */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-linear-to-br from-secondary to-hover relative p-10">
          <Link
            to="/"
            className="absolute top-6 right-6 flex items-center gap-2 text-yellow"
          >
            <FaDoorOpen />
            صفحه اصلی
          </Link>

          <img src={ladylogo} alt="lady" className="w-[70%] object-contain" />
        </div>

        {/* right side */}
        <div dir="rtl" className="p-8 md:p-12 flex flex-col justify-center">
          {/* logo */}
          <div className="mb-10 flex justify-center">
            <img src={beautyLogo} className="w-56 object-contain" alt="logo" />
          </div>

          {/* title */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-text">
              ورود به حساب کاربری
            </h2>
            <p className="text-muted text-sm mt-2">
              برای ادامه خرید وارد حساب خود شوید
            </p>
          </div>

          {/* form */}
          <HandledForm<LoginValues>
            onSubmit={onSubmit}
            defaultValues={{
              email: "",
              password: "",
            }}
            className="space-y-5"
          >
            {/* phone */}
            <div className="relative">
              <MdEmail className="absolute right-4 top-1/2 -translate-y-1/2 text-muted" />

              <FormInput
                name="email"
                type="email"
                placeholder="ایمیل"
                rules={{
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "ایمیل معتبر نیست",
                  },
                }}
                className="w-full pr-10 py-3 rounded-xl border border-border focus:border-primary outline-none"
              />
            </div>

            {/* password */}
            <div className="relative">
              <IoEyeSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-muted cursor-pointer" />

              <FormInput
                name="password"
                type="password"
                placeholder="رمز عبور"
                rules={{
                  required: "رمز عبور الزامی است",
                  minLength: {
                    value: 6,
                    message: "حداقل 6 کاراکتر",
                  },
                }}
                className="w-full pr-4 pl-10 py-3 rounded-xl border border-border focus:border-primary outline-none"
              />
            </div>

            {/* button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              ورود به حساب
            </button>
          </HandledForm>

          {/* signup */}
          <p className="text-sm text-center mt-6 text-muted">
            حساب ندارید؟
            <Link to="/signup" className="text-primary mr-2 font-semibold">
              ثبت نام
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
