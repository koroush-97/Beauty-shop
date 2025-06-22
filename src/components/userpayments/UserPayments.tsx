import { FiCreditCard, FiClock, FiCalendar } from "react-icons/fi";
import StatusBadge from "../statusBadge/StatusBadge";

const payments = [
  {
    id: 1,
    card: "6037-****-****-4512",
    amount: "320,000",
    date: "1404/03/22",
    time: "14:32",
    status: "موفق",
  },
  {
    id: 2,
    card: "5022-****-****-1109",
    amount: "150,000",
    date: "1404/03/20",
    time: "09:15",
    status: "ناموفق",
  },
  {
    id: 3,
    card: "6104-****-****-8821",
    amount: "1,200,000",
    date: "1404/03/18",
    time: "18:45",
    status: "موفق",
  },
];

export default function UserPayments() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div>
        <h2 className="font-heading text-xl md:text-2xl text-text">
          تراکنش‌ها
        </h2>
        <p className="text-sm mt-1 text-muted">
          تاریخچه پرداخت‌ها و تراکنش‌های بانکی شما
        </p>
      </div>

      {/* Desktop Table - Hidden on Mobile */}
      <div className="hidden md:block card overflow-hidden">
        <table className="w-full text-sm text-right">
          <thead className="bg-surface border-b border-border">
            <tr className="text-muted">
              <th className="px-6 py-4 font-normal">شماره کارت</th>
              <th className="px-6 py-4 font-normal">مبلغ (تومان)</th>
              <th className="px-6 py-4 font-normal">تاریخ</th>
              <th className="px-6 py-4 font-normal">زمان</th>
              <th className="px-6 py-4 font-normal">وضعیت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {payments.map((p) => (
              <tr key={p.id} className="hover:bg-hover transition">
                <td className="px-6 py-4 font-mono">{p.card}</td>
                <td className="px-6 py-4 font-bold text-text">{p.amount}</td>
                <td className="px-6 py-4 text-muted">{p.date}</td>
                <td className="px-6 py-4 text-muted">{p.time}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Hidden on Desktop */}
      <div className="md:hidden space-y-4">
        {payments.map((p) => (
          <div key={p.id} className="card p-4 space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <span className="flex items-center gap-2 text-sm font-mono text-text">
                <FiCreditCard className="text-yellow" />
                {p.card}
              </span>
              <StatusBadge status={p.status} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted mb-1">مبلغ</p>
                <span className="font-bold text-text">{p.amount}</span>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">تاریخ و زمان</p>
                <div className="flex items-center gap-2 text-xs text-text">
                  <FiCalendar /> {p.date} | <FiClock /> {p.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
