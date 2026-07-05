import apiClient from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type { Category } from "../types/category_types";
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const categoryService = {
  getCategories: async (): Promise<Category[]> => {
    const response = await apiClient.get<ApiResponse<Category[]>>(
      API_ROUTES.CATEGORIES.GET_ALL,
    );

    return response.data.data;
  },

  getCategoryBySlug: async (slug: string): Promise<Category> => {
    const response = await apiClient.get<ApiResponse<Category>>(
      API_ROUTES.CATEGORIES.GET_BY_SLUG(slug),
    );
    return response.data.data;
  },
};
