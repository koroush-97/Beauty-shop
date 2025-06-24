import { useState } from "react";
import {
  FiCamera,
  FiCopy,
  FiCheck,
  FiUser,
  FiPhone,
  FiMail,
  FiLock,
} from "react-icons/fi";

export default function UserInfo() {
  const [copied, setCopied] = useState(false);
  const referralCode = "REF-123456";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
        <div>
          <h2 className="font-heading text-xl md:text-2xl text-text">
            اطلاعات حساب کاربری
          </h2>
          <p className="text-sm mt-1">
            اطلاعات شخصی، تماس و امنیت حساب خود را مدیریت کنید.
          </p>
        </div>

        <button className="btn-primary shadow-sm shadow-primary/20">
          ذخیره تغییرات
        </button>
      </div>

      {/* Avatar */}
      <div className="rounded-2xl border border-border bg-bg p-4 md:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="relative w-fit">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-yellow/30 via-secondary/40 to-primary/20 border-2 border-yellow flex items-center justify-center overflow-hidden">
              <span className="font-heading text-3xl text-text">ک</span>
            </div>

            <button
              type="button"
              className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-yellow text-text border-2 border-bg flex items-center justify-center shadow-md transition hover:scale-105 hover:bg-primary hover:text-white"
              aria-label="ویرایش تصویر پروفایل"
            >
              <FiCamera size={16} />
            </button>
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-lg text-text">تصویر پروفایل</h3>
            <p className="text-sm">
              تصویر واضح و مناسب برای حساب کاربری خود انتخاب کنید.
            </p>
            <p className="text-xs text-muted">
              فرمت‌های مجاز: JPG و PNG — حداکثر حجم ۲ مگابایت
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm text-text flex items-center gap-2">
            <FiUser className="text-yellow" />
            نام و نام خانوادگی
          </label>
          <input
            className="w-full bg-bg text-text border border-border rounded-xl px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted"
            placeholder="مثلاً سارا محمدی"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text flex items-center gap-2">
            <FiPhone className="text-yellow" />
            اطلاعات تماس
          </label>
          <input
            className="w-full bg-bg text-text border border-border rounded-xl px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted"
            placeholder="09123456789"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text flex items-center gap-2">
            <FiMail className="text-yellow" />
            ایمیل
          </label>
          <input
            type="email"
            className="w-full bg-bg text-text border border-border rounded-xl px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-text flex items-center gap-2">
            <FiLock className="text-yellow" />
            رمز ورود
          </label>
          <input
            type="password"
            className="w-full bg-bg text-text border border-border rounded-xl px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-muted"
            placeholder="********"
          />
        </div>
      </div>

      {/* Referral Code */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg p-5">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-yellow" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-sm mb-2">کد معرفی شما</p>

            <div className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
              <span className="font-mono text-lg md:text-xl font-bold text-text tracking-widest">
                {referralCode}
              </span>
              <span className="badge bg-yellow text-text">فعال</span>
            </div>

            <p className="text-xs mt-3">
              این کد را برای دوستان خود ارسال کنید و از مزایای معرفی استفاده
              کنید.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm text-text transition hover:border-primary hover:bg-hover"
          >
            {copied ? (
              <>
                <FiCheck className="text-primary" />
                کپی شد
              </>
            ) : (
              <>
                <FiCopy className="text-yellow" />
                کپی کد
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
