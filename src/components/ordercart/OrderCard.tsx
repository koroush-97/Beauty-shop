import {
  getOrderStatusLabel,
  getPaymentStatusLabel,
} from "../../utils/orderStatusLabel";
import type { Order } from "../../types/order.types";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="rounded-xl border border-border p-4 md:p-5 hover:border-primary transition">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-text">سفارش #{order.id}</p>
          <p className="text-sm text-muted">
            وضعیت: {getOrderStatusLabel(order.order_status)}
          </p>
          <p className="text-sm text-muted">
            پرداخت: {getPaymentStatusLabel(order.payment_status)}
          </p>
        </div>

        <div className="text-sm md:text-left space-y-1">
          <p className="text-text font-medium">
            {order.total_price.toLocaleString("fa-IR")} تومان
          </p>
          {order.tracking_code && (
            <p className="text-xs text-muted">
              کد رهگیری: {order.tracking_code}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
