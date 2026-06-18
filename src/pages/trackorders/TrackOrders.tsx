// @components
import { PageTitle } from "../homePage";
import { TitleItem } from "../homePage";

// @assetss
import logoParaph from "../../assets/photo/logo-beauty-paragheraph.png";

export default function TrackOrders() {
  return (
    <div className="min-h-screen bg-surface py-10">
      <PageTitle />

      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-end mt-10 mb-8">
          <TitleItem
            classname="flex justify-end items-center gap-x-3"
            header={
              <h3 className="text-text text-2xl lg:text-3xl font-bold">
                پیگیری سفارشات
              </h3>
            }
            icon={
              <div className="h-14 flex items-center">
                <img
                  src={logoParaph}
                  alt="logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            }
          />
        </div>

        {/* Card */}
        <div
          dir="rtl"
          className="bg-white rounded-3xl shadow-xl border border-border p-8 lg:p-12"
        >
          <p className="text-muted mb-10 leading-7 text-sm lg:text-base">
            برای رهگیری سفارش، شماره سفارش و ایمیلی که هنگام ثبت سفارش وارد
            کرده‌اید را در کادرهای زیر وارد کنید و روی دکمه رهگیری کلیک کنید.
          </p>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text">
                شماره سفارش
              </label>
              <input
                type="text"
                placeholder="مثلاً 458796"
                className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text">
                ایمیل صورتحساب
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full py-3 px-4 rounded-xl border border-border outline-none focus:border-primary transition"
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <button className="px-10 py-3 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/20 hover:opacity-90 transition">
              رهگیری سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
