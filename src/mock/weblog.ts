import type { BlogCard } from "../types/WeblogTypes";

import imag1 from "../assets/photo/webLogphoto/rozh.png";
import imag2 from "../assets/photo/webLogphoto/scrap.png";

import imag4 from "../assets/photo/webLogphoto/makeup.jpg";
import imag5 from "../assets/photo/webLogphoto/atr.jpg";
import imag6 from "../assets/photo/webLogphoto/nail.webp";
import imag7 from "../assets/photo/webLogphoto/Beauty.webp";
import imag8 from "../assets/photo/webLogphoto/spring-style-8.webp";
import hair from "../assets/photo/webLogphoto/hair.jpeg";

export const mockPosts: BlogCard[] = [
  {
    id: 1,
    category: "ترندهای دنیای زیبایی",
    title: "۱۰ رژ لب برتر برای هر نوع پوست",
    imageUrl: imag1,
    description:
      "در این مقاله بررسی می‌کنیم که چگونه با توجه به تناژ پوست خود، بهترین انتخاب را در رنگ و ماندگاری رژ لب داشته باشید.",
    date: "4 اسفند 1404",
  },
  {
    id: 2,
    category: "مراقبت از پوست",
    title: "چطوری به درستی اسکراب کنیم؟",
    imageUrl: imag2,
    description:
      "اسکراب کردن پوست اگر به درستی انجام نشود می‌تواند آسیب‌زا باشد. در اینجا گام‌های اصلی یک اسکراب اصولی را می‌خوانیم.",
    date: "8 بهمن 1404",
  },
  {
    id: 3,
    category: "ترندهای دنیای مد",
    title: "استایل‌های بهاری ۲۰۲۶ که باید بشناسید",
    imageUrl: imag8,
    description:
      "با نزدیک شدن به فصل بهار، طراحان مد از پالت‌های رنگی جذاب و متفاوتی رونمایی کرده‌اند که در این پست بررسی می‌کنیم.",
    date: "25 دی 1404",
  },
  {
    id: 4,
    category: "مراقبت از مو",
    title: "رازهای داشتن موهای ابریشمی و درخشان",
    imageUrl: hair,
    description:
      "آیا موهایتان وز شده است؟ با این ۵ ترفند ساده در روتین شستشوی مو، درخشش طبیعی را به آن‌ها بازگردانید.",
    date: "12 آذر 1404",
  },
  {
    id: 5,
    category: "خودآرایی",
    title: "آموزش گام‌به‌گام آرایش روزانه اداری",
    imageUrl: imag4,
    description:
      "یک آرایش ملایم و سریع که در کمتر از ۱۰ دقیقه انجام می‌شود و برای محیط کار و قرارهای رسمی بسیار مناسب است.",
    date: "29 آبان 1404",
  },
  {
    id: 6,
    category: "عطر و ادکلن",
    title: "چگونه عطر مناسب فصل خود را انتخاب کنیم؟",
    imageUrl: imag5,
    description:
      "رایحه‌ها در فصل‌های مختلف واکنش‌های متفاوتی دارند. راهنمای کامل انتخاب عطر گرم برای زمستان و خنک برای تابستان.",
    date: "15 مهر 1404",
  },
  {
    id: 7,
    category: "بهداشت ناخن",
    title: "مانیکور در خانه: راهنمای حرفه‌ای",
    imageUrl: imag6,
    description:
      "صرفه‌جویی در هزینه با انجام یک مانیکور تمیز و زیبا در خانه. ابزارهای مورد نیاز و مراحل انجام آن را اینجا یاد بگیرید.",
    date: "3 شهریور 1404",
  },
  {
    id: 8,
    category: "ترندهای دنیای زیبایی",
    title: "کانتورینگ صورت؛ ساده‌تر از همیشه",
    imageUrl: imag7,
    description:
      "کانتورینگ می‌تواند فرم صورت شما را تغییر دهد. یاد بگیرید چگونه با استفاده از پالت کانتور، زوایای صورت خود را برجسته کنید.",
    date: "20 مرداد 1404",
  },
];
