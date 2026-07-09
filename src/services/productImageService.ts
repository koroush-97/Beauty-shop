import apiClient from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type {
  ProductImage,
  AddProductImageResponse,
} from "../types/productImage_types";

export const productImageService = {
  getProductImages: async (
    productId: number | string,
  ): Promise<ProductImage[]> => {
    const response = await apiClient.get<ProductImage[]>(
      API_ROUTES.PRODUCT_IMAGES.GET_BY_PRODUCT_ID(productId),
    );
    return response.data;
  },

  addProductImage: async (
    productId: number | string,
    imageUrl: string,
  ): Promise<AddProductImageResponse> => {
    const response = await apiClient.post<AddProductImageResponse>(
      API_ROUTES.PRODUCT_IMAGES.ADD(productId),
      { image_url: imageUrl },
    );
    return response.data;
  },

  deleteProductImage: async (
    imageId: number | string,
  ): Promise<{ message: string }> => {
    const response = await apiClient.delete<{ message: string }>(
      API_ROUTES.PRODUCT_IMAGES.DELETE(imageId),
    );
    return response.data;
  },
};
