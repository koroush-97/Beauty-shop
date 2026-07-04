import OrdersList from "../OrderList/OrderList";

export default function CancelledProducts() {
  return (
    <OrdersList
      statuses={["cancelled"]}
      emptyMessage="سفارش لغوشده‌ای ندارید."
    />
  );
}
