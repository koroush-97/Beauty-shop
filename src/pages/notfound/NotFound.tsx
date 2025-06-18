// src/pages/notFound/NotFound.tsx
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4">
      <div className="text-center">
        <h1 className="text-[120px] font-black text-primary/20 select-none">
          404
        </h1>

        <h2 className="text-3xl font-bold text-text -mt-10">
          صفحه مورد نظر پیدا نشد!
        </h2>
        <p className="text-muted mt-4 max-w-sm mx-auto">
          به نظر می‌رسد این صفحه وجود ندارد یا به آدرس دیگری منتقل شده است.
          بیایید شما را به خانه برگردانیم.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl hover:opacity-90 transition shadow-lg shadow-primary/20"
        >
          بازگشت به خانه <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
