import OrdersList from "../OrderList/OrderList";

export default function ReturtendProducts() {
  return (
    <OrdersList
      statuses={["returned"]}
      emptyMessage="سفارش مرجوع‌شده‌ای ندارید."
    />
  );
}
