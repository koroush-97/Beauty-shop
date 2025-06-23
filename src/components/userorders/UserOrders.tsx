import { NavLink, Outlet } from "react-router-dom";

export default function UserOrders() {
  const tabs = [
    { to: "", label: "جاری", end: true },
    { to: "send-success", label: "فرستاده شده" },
    { to: "cancelled", label: "لغو شده" },
    { to: "returend", label: "مرجوع شده" },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      {/* header */}
      <div>
        <h2 className="font-heading text-xl md:text-2xl text-text">
          لیست سفارشات
        </h2>
        <p className="text-sm mt-1">
          وضعیت سفارش‌های خود را در این بخش مشاهده کنید
        </p>
      </div>

      {/* tabs */}
      <div className="border-b border-border">
        <nav className="flex gap-2 sm:gap-4 overflow-x-auto  overflow-y-hidden pb-2">
          {tabs.map((tab) => (
            <NavLink
              key={tab.label}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `relative whitespace-nowrap px-4 py-2 text-sm font-medium transition
                ${isActive ? "text-primary" : "text-muted hover:text-text"}`
              }
            >
              {({ isActive }) => (
                <>
                  {tab.label}

                  {/* active underline */}
                  <span
                    className={`absolute right-0 left-0 -bottom-2.5 h-0.75 rounded-full transition
                    ${isActive ? "bg-yellow" : "bg-transparent"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* content */}
      <div className="min-h-50">
        <Outlet />
      </div>
    </div>
  );
}
