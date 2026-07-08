import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { reviewService } from "../services/reviewService";
import type { CreateReviewInput } from "../types/review_types";

export const REVIEW_KEYS = {
  all: ["reviews"] as const,
  byProduct: (productId: number | string) =>
    [...REVIEW_KEYS.all, "product", productId] as const,
};

export const useReviewsByProduct = (productId?: number | string) => {
  return useQuery({
    queryKey: productId ? REVIEW_KEYS.byProduct(productId) : REVIEW_KEYS.all,
    queryFn: () => reviewService.getByProductId(productId!),
    enabled: !!productId,
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productId,
      data,
    }: {
      productId: number | string;
      data: CreateReviewInput;
    }) => reviewService.create(productId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: REVIEW_KEYS.byProduct(variables.productId),
      });
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      reviewId,
      //   productId,
    }: {
      reviewId: number | string;
      productId: number | string;
    }) => reviewService.delete(reviewId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: REVIEW_KEYS.byProduct(variables.productId),
      });
    },
  });
};
