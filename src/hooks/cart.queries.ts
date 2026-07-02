import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cartService } from "../services/cartService";
import type { AddToCartInput, GuestCartInput } from "../types/cart.types";

export const useCart = (guestId?: string) => {
  return useQuery({
    queryKey: ["cart", guestId ?? "user"],
    queryFn: () => cartService.getCart(guestId),
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddToCartInput) => cartService.addToCart(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.guest_id ?? "user"],
      });
    },
  });
};

export const useIncreaseCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, guestId }: { id: number | string; guestId?: string }) =>
      cartService.increaseQuantity(id, guestId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.guestId ?? "user"],
      });
    },
  });
};

export const useDecreaseCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, guestId }: { id: number | string; guestId?: string }) =>
      cartService.decreaseQuantity(id, guestId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.guestId ?? "user"],
      });
    },
  });
};

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, guestId }: { id: number | string; guestId?: string }) =>
      cartService.removeItem(id, guestId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.guestId ?? "user"],
      });
    },
  });
};

export const useMergeGuestCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: GuestCartInput) => cartService.mergeGuestCart(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.guest_id],
      });
      queryClient.invalidateQueries({
        queryKey: ["cart", "user"],
      });
    },
  });
};
