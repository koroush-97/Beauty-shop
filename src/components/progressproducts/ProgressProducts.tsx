import OrdersList from "../OrderList/OrderList";

export default function ProgressProducts() {
  return (
    <OrdersList
      statuses={["processing"]}
      emptyMessage="سفارش جاری‌ای ندارید."
    />
  );
}
