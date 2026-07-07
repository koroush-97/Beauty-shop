import { useOrders } from "../../hooks/order.queries";
import OrderCard from "../ordercart/OrderCard";

interface Props {
  statuses: string[];
  emptyMessage: string;
}

export default function OrdersList({ statuses, emptyMessage }: Props) {
  const { data: orders = [], isLoading, isError } = useOrders();

  const filteredOrders = orders.filter((o) =>
    statuses.includes(o.order_status),
  );

  if (isLoading)
    return <div className="p-4 text-sm text-muted">در حال بارگذاری...</div>;

  if (isError)
    return (
      <div className="p-4 text-sm text-red-500">خطا در دریافت اطلاعات</div>
    );

  if (filteredOrders.length === 0)
    return (
      <div className="p-6 text-sm text-muted rounded-xl border border-border">
        {emptyMessage}
      </div>
    );

  return (
    <div className="space-y-4">
      {filteredOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
