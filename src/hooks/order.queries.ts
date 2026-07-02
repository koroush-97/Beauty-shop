import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "../services/orderService";
import type { CreateOrderInput } from "../types/order.types";

export const orderQueryKeys = {
  all: ["orders"] as const,
  detail: (id: number | string) => ["orders", id] as const,
};

export const useOrders = () => {
  return useQuery({
    queryKey: orderQueryKeys.all,
    queryFn: orderService.getOrders,
  });
};

export const useOrderById = (id?: number | string) => {
  return useQuery({
    queryKey: orderQueryKeys.detail(id as number | string),
    queryFn: () => orderService.getOrderById(id as number | string),
    enabled: !!id,
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrderInput) => orderService.createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orderQueryKeys.all });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
