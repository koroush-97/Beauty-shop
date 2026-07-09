import api from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type { CreateReviewInput, Review } from "../types/review_types";

export const reviewService = {
  getByProductId: async (productId: number | string): Promise<Review[]> => {
    const { data } = await api.get(
      API_ROUTES.REVIEWS.GET_BY_PRODUCT(productId),
    );
    return data;
  },

  create: async (
    productId: number | string,
    payload: CreateReviewInput,
  ): Promise<{ message: string; reviewId: number }> => {
    const { data } = await api.post(
      API_ROUTES.REVIEWS.CREATE(productId),
      payload,
    );
    return data;
  },

  delete: async (reviewId: number | string): Promise<{ message: string }> => {
    const { data } = await api.delete(API_ROUTES.REVIEWS.DELETE(reviewId));
    return data;
  },
};
