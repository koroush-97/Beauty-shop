import { AiFillWallet } from "react-icons/ai";
import { FiPlus, FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

export default function Wallet() {
  return (
    <div className="space-y-8" dir="rtl">
      <div>
        <h2 className="font-heading text-2xl text-text">کیف پول من</h2>
        <p className="text-sm text-muted mt-1">مدیریت اعتبار و شارژ حساب</p>
      </div>

      <div className="bg-linear-to-l from-primary to-secondary p-6 md:p-8 rounded-3xl shadow-lg shadow-primary/20 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <AiFillWallet />
            <span className="text-sm">موجودی قابل برداشت</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            1,250,000{" "}
            <span className="text-xl font-normal opacity-80">تومان</span>
          </h2>
        </div>

        <button className="mt-8 flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-yellow hover:text-text transition-all">
          <FiPlus />
          شارژ کیف پول
        </button>

        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="space-y-4">
        <h3 className="font-heading text-lg text-text">آخرین تراکنش‌ها</h3>

        {[1, 2].map((item) => (
          <div
            key={item}
            className="card p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${item === 1 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
              >
                {item === 1 ? (
                  <FiArrowDownLeft size={20} />
                ) : (
                  <FiArrowUpRight size={20} />
                )}
              </div>
              <div>
                <p className="font-bold text-text">
                  {item === 1 ? "شارژ کیف پول" : "خرید از فروشگاه"}
                </p>
                <p className="text-xs text-muted">1404/03/22 - 14:32</p>
              </div>
            </div>
            <div
              className={`font-bold ${item === 1 ? "text-green-600" : "text-red-600"}`}
            >
              {item === 1 ? "+ 500,000" : "- 120,000"} تومان
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
