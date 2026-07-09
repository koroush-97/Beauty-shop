import apiClient from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type { ApiSuccessResponse } from "../types/api_types";
import type { Product } from "../types/product_types";

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<ApiSuccessResponse<Product[]>>(
      API_ROUTES.products.getAll,
    );
    return response.data.data;
  },

  getProductById: async (id: number | string): Promise<Product> => {
    const response = await apiClient.get<ApiSuccessResponse<Product>>(
      API_ROUTES.products.getById(id),
    );
    return response.data.data;
  },

  getProductBySlug: async (slug: string): Promise<Product> => {
    const response = await apiClient.get<ApiSuccessResponse<Product>>(
      API_ROUTES.products.getBySlug(slug),
    );
    return response.data.data;
  },
};
