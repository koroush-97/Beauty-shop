import apiClient from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type {
  AddToCartInput,
  CartMessageResponse,
  CartResponse,
  GuestCartInput,
} from "../types/cart.types";

export const cartService = {
  async getCart(guestId?: string): Promise<CartResponse> {
    const response = await apiClient.get<CartResponse>(API_ROUTES.CART.GET, {
      params: guestId ? { guest_id: guestId } : {},
    });
    return response.data;
  },

  async addToCart(data: AddToCartInput): Promise<CartMessageResponse> {
    const response = await apiClient.post<CartMessageResponse>(
      API_ROUTES.CART.ADD,
      data,
    );
    return response.data;
  },

  async increaseQuantity(
    id: number | string,
    guestId?: string,
  ): Promise<CartMessageResponse> {
    const response = await apiClient.post<CartMessageResponse>(
      API_ROUTES.CART.INCREASE(id),
      guestId ? { guest_id: guestId } : {},
    );
    return response.data;
  },

  async decreaseQuantity(
    id: number | string,
    guestId?: string,
  ): Promise<CartMessageResponse> {
    const response = await apiClient.post<CartMessageResponse>(
      API_ROUTES.CART.DECREASE(id),
      guestId ? { guest_id: guestId } : {},
    );
    return response.data;
  },

  async removeItem(
    id: number | string,
    guestId?: string,
  ): Promise<CartMessageResponse> {
    const response = await apiClient.delete<CartMessageResponse>(
      API_ROUTES.CART.REMOVE(id),
      {
        data: guestId ? { guest_id: guestId } : {},
      },
    );
    return response.data;
  },

  async mergeGuestCart(data: GuestCartInput): Promise<CartMessageResponse> {
    const response = await apiClient.post<CartMessageResponse>(
      API_ROUTES.CART.MERGE,
      data,
    );
    return response.data;
  },
};
