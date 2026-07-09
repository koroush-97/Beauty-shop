import { API_ROUTES } from "../constants/apiRoutes";
import ApiClient from "../lib/config/ApiClient";
import type {
  InitiatePaymentInput,
  InitiatePaymentResponse,
  PaymentStatusResponse,
} from "../types/payment_types";

export const paymentService = {
  async initiatePayment(
    orderId: number | string,
    data: InitiatePaymentInput,
  ): Promise<InitiatePaymentResponse> {
    const response = await ApiClient.post<InitiatePaymentResponse>(
      API_ROUTES.PAYMENTS.INITIATE(orderId),
      data,
    );
    return response.data;
  },

  async simulateSuccess(transactionCode: string): Promise<{ message: string }> {
    const response = await ApiClient.post<{ message: string }>(
      API_ROUTES.PAYMENTS.SUCCESS(transactionCode),
    );
    return response.data;
  },

  async simulateFail(transactionCode: string): Promise<{ message: string }> {
    const response = await ApiClient.post<{ message: string }>(
      API_ROUTES.PAYMENTS.FAIL(transactionCode),
    );
    return response.data;
  },

  async getPaymentStatusByOrder(
    orderId: number | string,
  ): Promise<PaymentStatusResponse> {
    const response = await ApiClient.get<PaymentStatusResponse>(
      API_ROUTES.PAYMENTS.GET_BY_ORDER(orderId),
    );
    return response.data;
  },
};
