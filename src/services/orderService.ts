import ApiClient from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type {
  Order,
  CreateOrderInput,
  UpdateOrderInput,
} from "../types/order.types";

export const orderService = {
  async getOrders(): Promise<Order[]> {
    const response = await ApiClient.get<Order[]>(API_ROUTES.ORDERS.GET_ALL);

    return response.data;
  },

  async getOrderById(id: number | string): Promise<Order> {
    const response = await ApiClient.get<{ order: Order }>(
      API_ROUTES.ORDERS.GET_BY_ID(id),
    );
    return response.data.order;
  },

  async createOrder(data: CreateOrderInput): Promise<Order> {
    const response = await ApiClient.post<{ order: Order }>(
      API_ROUTES.ORDERS.CREATE,
      data,
    );
    return response.data.order;
  },

  async updateOrder(
    id: number | string,
    data: UpdateOrderInput,
  ): Promise<Order> {
    const response = await ApiClient.put<{ order: Order }>(
      API_ROUTES.ORDERS.UPDATE_STATUS(id),
      data,
    );
    return response.data.order;
  },
};
