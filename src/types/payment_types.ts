export type PaymentStatus = "pending" | "success" | "failed";

export interface Payment {
  id: number;
  user_id: number;
  order_id: number;
  amount: number;
  payment_method: string;
  status: PaymentStatus;
  transaction_code: string;
  created_at: string;
}

export interface InitiatePaymentInput {
  payment_method: string;
}

export interface InitiatePaymentResponse {
  message: string;
  payment_id: number;
  transaction_code: string;
}

export type PaymentStatusResponse = Payment;
