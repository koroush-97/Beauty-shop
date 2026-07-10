import OrdersList from "../OrderList/OrderList";

export default function SendProducts() {
  return (
    <OrdersList
      statuses={["shipped", "delivered"]}
      emptyMessage="سفارش ارسال‌شده‌ای ندارید."
    />
  );
}
