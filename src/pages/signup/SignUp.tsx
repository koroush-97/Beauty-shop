import { Link } from "react-router-dom";
import { FaDoorOpen } from "react-icons/fa6";
import toast from "react-hot-toast";
import { type UseFormReturn } from "react-hook-form";

// @ components
import { HandledForm, FormInput, FormFileUploader } from "../homePage";
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
      console.log("ثبت نام:", data);
      toast.success("ثبت نام با موفقیت انجام شد!");
      methods.reset();
    } catch (error) {
      toast.error("خطایی رخ داد");
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-surface p-4"
      dir="rtl"
    >
      <div className="container max-w-5xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden grid lg:grid-cols-[1fr_2fr]">
        {/* بخش برندینگ سمت راست */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20 p-10 text-center">
          <img src={logo} alt="logo" className="w-40 mb-6" />
          <h2 className="text-2xl font-bold text-text">
            به خانواده بیوتی استایل خوش آمدید
          </h2>
          <p className="text-muted mt-4 text-sm leading-6">
            با عضویت در سایت ما، از تخفیف‌های ویژه و جدیدترین محصولات زیبایی
            مطلع شوید.
          </p>
        </div>

        {/* بخش فرم */}
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text">
              ثبت نام در بیوتی استایل
            </h1>
            <p className="text-muted text-sm mt-1">مشخصات خود را تکمیل کنید</p>
          </div>

          <HandledForm<SignUpValues> onSubmit={onSubmit} className="space-y-6">
            {/* بخش آپلود آواتار */}
            <div className="flex justify-center mb-8">
              <FormFileUploader
                name="avatar"
                rules={{ required: "انتخاب عکس الزامی است" }}
                // استایل دهی این بخش در کامپوننت FormFileUploader باید به صورت دایره‌ای باشد
              />
            </div>

            {/* گرید فرم */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-muted font-medium pr-1">
                  نام و نام خانوادگی
                </label>
                <FormInput
                  name="fullName"
                  placeholder="نام خود را وارد کنید"
                  rules={{ required: "الزامی است" }}
                  className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted font-medium pr-1">
                  ایمیل
                </label>
                <FormInput
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  rules={{ required: "الزامی است" }}
                  className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted font-medium pr-1">
                  شماره تلفن
                </label>
                <FormInput
                  name="telephone"
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  rules={{ required: "الزامی است" }}
                  className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted font-medium pr-1">
                  رمز عبور
                </label>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="حداقل 6 کاراکتر"
                  rules={{ required: "الزامی است" }}
                  className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* فیلد آدرس که تمام عرض است */}
            <div className="space-y-1">
              <label className="text-xs text-muted font-medium pr-1">
                آدرس محل سکونت
              </label>
              <FormInput
                name="address"
                placeholder="آدرس دقیق..."
                rules={{ required: "الزامی است" }}
                className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <Link
                to="/"
                className="text-primary flex items-center gap-2 font-semibold"
              >
                <FaDoorOpen /> صفحه اصلی
              </Link>
              <button
                type="submit"
                className="bg-primary text-white py-3 px-8 rounded-xl font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/20"
              >
                ثبت نام
              </button>
            </div>
          </HandledForm>
        </div>
      </div>
    </div>
  );
}
