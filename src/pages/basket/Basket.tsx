import { FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";

type CartItem = {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
};

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "کرم آبرسان سیمپل",
    brand: "Simple",
    price: 285000,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "سرم ویتامین C",
    brand: "Garnier",
    price: 420000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "ضد آفتاب بی‌رنگ",
    brand: "La Roche Posay",
    price: 510000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400&auto=format&fit=crop",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export default function Basket() {
  const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 1000000 ? 0 : 60000;
  const discount = 120000;
  const total = subtotal + shipping - discount;

  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <section className="container py-10 md:py-14" dir="rtl">
        <div className="card flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-hover text-primary">
            <FiShoppingBag size={36} />
          </div>

          <h1 className="font-heading text-2xl text-text md:text-3xl">
            سبد خرید شما خالی است
          </h1>

          <p className="mt-3 max-w-md text-base leading-8">
            هنوز محصولی به سبد خرید اضافه نکرده‌اید. می‌توانید به فروشگاه
            برگردید و محصولات مورد علاقه‌تان را انتخاب کنید.
          </p>

          <button className="btn-primary mt-6">مشاهده محصولات</button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-8 md:py-12" dir="rtl">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-heading text-3xl text-text md:text-4xl">
            سبد خرید
          </h1>
          <p className="mt-2 text-sm md:text-base">
            {itemsCount} کالا در سبد خرید شما قرار دارد
          </p>
        </div>

        <button className="btn-secondary w-full md:w-auto">ادامه خرید</button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* لیست محصولات */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-center"
              >
                <div className="h-28 w-full overflow-hidden rounded-2xl bg-lightback md:h-28 md:w-28">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="font-heading text-xl text-text">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-sm">{item.brand}</p>
                    </div>

                    <div className="text-right md:min-w-[140px]">
                      <p className="text-sm">قیمت واحد</p>
                      <p className="mt-1 font-heading text-lg text-primary">
                        {formatPrice(item.price)} تومان
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-2xl border border-border bg-bg">
                        <button className="flex h-10 w-10 items-center justify-center text-text transition hover:bg-hover">
                          <FiPlus size={18} />
                        </button>

                        <span className="min-w-10 text-center font-heading text-lg text-text">
                          {item.quantity}
                        </span>

                        <button className="flex h-10 w-10 items-center justify-center text-text transition hover:bg-hover">
                          <FiMinus size={18} />
                        </button>
                      </div>

                      <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-500 transition hover:bg-red-50">
                        <FiTrash2 size={16} />
                        حذف
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm">مجموع این آیتم</p>
                      <p className="mt-1 font-heading text-xl text-text">
                        {formatPrice(item.price * item.quantity)} تومان
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خلاصه سفارش */}
        <div className="lg:col-span-4">
          <div className="card sticky top-6 p-5 sm:p-6">
            <h3 className="font-heading text-2xl text-text">خلاصه سفارش</h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm">تعداد کالا</span>
                <span className="font-heading text-lg text-text">
                  {itemsCount}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm">جمع کل کالاها</span>
                <span className="font-heading text-lg text-text">
                  {formatPrice(subtotal)} تومان
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm">هزینه ارسال</span>
                <span className="font-heading text-lg text-text">
                  {shipping === 0 ? "رایگان" : `${formatPrice(shipping)} تومان`}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-sm">تخفیف</span>
                <span className="font-heading text-lg text-primary">
                  {formatPrice(discount)} تومان
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-heading text-xl text-text">
                  مبلغ نهایی
                </span>
                <span className="font-heading text-2xl text-primary">
                  {formatPrice(total)} تومان
                </span>
              </div>
            </div>

            <button className="btn-primary mt-6 w-full py-3 text-lg">
              ادامه فرایند خرید
            </button>

            <button className="mt-3 w-full rounded-xl border border-border px-5 py-3 text-text transition hover:bg-hover">
              بازگشت به فروشگاه
            </button>

            <div className="mt-5 rounded-2xl bg-hover p-4">
              <p className="text-sm leading-7">
                ارسال برای سفارش‌های بالای
                <span className="mx-1 font-heading text-primary">
                  ۱,۰۰۰,۰۰۰
                </span>
                تومان رایگان است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
