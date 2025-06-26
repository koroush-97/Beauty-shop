import { FiMessageSquare, FiStar, FiHeart, FiHeadphones } from "react-icons/fi";

export default function UserActivitys() {
  return (
    <div className="space-y-8 p-4 md:p-0" dir="rtl">
      <div>
        <h2 className="font-heading text-2xl text-text">فعالیت‌های من</h2>
        <p className="text-sm text-muted mt-1">
          مدیریت تعاملات و درخواست‌های شما
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="flex items-center gap-2 font-bold text-primary">
          <FiMessageSquare /> نظرات اخیر
        </h3>
        <div className="bg-surface border border-border p-4 rounded-xl shadow-sm hover:border-primary transition">
          <p className="text-sm text-text font-medium">
            "کیفیت کرم آبرسان خیلی خوب بود، فقط بسته‌بندی یکم دیر به دستم رسید."
          </p>
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
            <span className="text-xs text-muted">محصول: کرم آبرسان لورال</span>
            <span className="text-xs bg-yellow/20 text-yellow-600 px-2 py-1 rounded">
              در انتظار تایید
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="flex items-center gap-2 font-bold text-primary">
          <FiStar /> امتیازهای ثبت شده
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-surface border border-border p-4 rounded-xl">
            <span className="text-sm text-text">ضد آفتاب الارو</span>
            <div className="flex text-yellow gap-1">
              <FiStar fill="currentColor" size={16} />{" "}
              <FiStar fill="currentColor" size={16} />{" "}
              <FiStar fill="currentColor" size={16} /> <FiStar size={16} />{" "}
              <FiStar size={16} />
            </div>
          </div>
          <div className="flex items-center justify-between bg-surface border border-border p-4 rounded-xl">
            <span className="text-sm text-text">شوینده صورت نوتروژینا</span>
            <div className="flex text-yellow gap-1">
              <FiStar fill="currentColor" size={16} />{" "}
              <FiStar fill="currentColor" size={16} />{" "}
              <FiStar fill="currentColor" size={16} />{" "}
              <FiStar fill="currentColor" size={16} /> <FiStar size={16} />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="flex items-center gap-2 font-bold text-primary">
          <FiHeart /> محصولات لایک شده
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="min-w-30 bg-white border border-border p-3 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-lightback rounded-full mx-auto mb-2" />
              <p className="text-xs font-medium truncate">محصول نمونه {i}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="flex items-center gap-2 font-bold text-primary">
          <FiHeadphones /> پشتیبانی و تیکت‌ها
        </h3>
        <div className="bg-surface border border-border rounded-xl divide-y divide-border">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">پیگیری سفارش #1234</p>
              <p className="text-xs text-muted mt-1">
                آخرین پاسخ: کارشناس پشتیبانی (2 ساعت پیش)
              </p>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
              پاسخ داده شده
            </span>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">مشکل در پرداخت آنلاین</p>
              <p className="text-xs text-muted mt-1">
                آخرین پاسخ: کاربر (1 روز پیش)
              </p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              در حال بررسی
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
