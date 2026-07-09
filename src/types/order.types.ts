export type OrderPaymentStatus = "pending" | "paid" | "failed";
export type OrderStatus =
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

export interface Order {
  id: number;
  user_id: number;
  address_id: number;
  total_price: number;
  payment_status: OrderPaymentStatus;
  order_status: OrderStatus;
  tracking_code: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateOrderInput {
  address_id: number;
}

export interface UpdateOrderInput {
  order_status?: OrderStatus;
  payment_status?: OrderPaymentStatus;
  tracking_code?: string;
}
