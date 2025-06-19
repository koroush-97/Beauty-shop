import { NavLink, Outlet } from "react-router-dom";

export default function Account() {
  return (
    <section className="container py-8 md:py-12" dir="rtl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* sidebar */}
        <aside className="lg:col-span-3">
          <div className="card p-4 md:p-5">
            <h2 className="font-heading text-lg mb-4">پنل کاربری</h2>

            <nav className="flex flex-col gap-2">
              <NavLink
                to="/account"
                end
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition
                  ${isActive ? "bg-hover text-primary" : "hover:bg-hover"}`
                }
              >
                اطلاعات حساب کاربری
              </NavLink>

              <NavLink
                to="/account/user-orders"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition
                  ${isActive ? "bg-hover text-primary" : "hover:bg-hover"}`
                }
              >
                لیست سفارشات
              </NavLink>

              <NavLink
                to="/account/user-payments"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition
                  ${isActive ? "bg-hover text-primary" : "hover:bg-hover"}`
                }
              >
                تراکنش ها
              </NavLink>

              <NavLink
                to="/account/user-wallet"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition
                  ${isActive ? "bg-hover text-primary" : "hover:bg-hover"}`
                }
              >
                کیف پول
              </NavLink>

              <NavLink
                to="/account/user-activity"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition
                  ${isActive ? "bg-hover text-primary" : "hover:bg-hover"}`
                }
              >
                فعالیت ها
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition
                  ${isActive ? "bg-hover text-primary" : "hover:bg-hover"}`
                }
              >
                خروج
              </NavLink>
            </nav>
          </div>
        </aside>

        {/* content */}
        <main className="lg:col-span-9">
          <div className="card p-5 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
}
