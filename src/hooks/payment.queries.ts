// src/queries/payment.queries.ts

import { useMutation, useQuery } from "@tanstack/react-query";
import { paymentService } from "../services/paymentService";
import type { InitiatePaymentInput } from "../types/payment_types";

export const PAYMENT_KEYS = {
  all: ["payments"] as const,
  byOrder: (orderId: number | string) =>
    [...PAYMENT_KEYS.all, "order", orderId] as const,
};

export const usePaymentStatusByOrder = (orderId?: number | string) => {
  return useQuery({
    queryKey: orderId ? PAYMENT_KEYS.byOrder(orderId) : PAYMENT_KEYS.all,
    queryFn: () => paymentService.getPaymentStatusByOrder(orderId!),
    enabled: !!orderId,
  });
};

export const useInitiatePayment = () => {
  return useMutation({
    mutationFn: ({
      orderId,
      data,
    }: {
      orderId: number | string;
      data: InitiatePaymentInput;
    }) => paymentService.initiatePayment(orderId, data),
  });
};

export const useSimulateSuccessPayment = () => {
  return useMutation({
    mutationFn: (transactionCode: string) =>
      paymentService.simulateSuccess(transactionCode),
  });
};

export const useSimulateFailedPayment = () => {
  return useMutation({
    mutationFn: (transactionCode: string) =>
      paymentService.simulateFail(transactionCode),
  });
};
