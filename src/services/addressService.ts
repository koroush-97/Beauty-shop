import ApiClient from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type {
  Address,
  CreateAddressInput,
  UpdateAddressInput,
} from "../types/address_types";

export const addressService = {
  async getAddresses(): Promise<Address[]> {
    const response = await ApiClient.get<{ addresses: Address[] }>(
      API_ROUTES.ADDRESSES.GET_ALL,
    );
    return response.data.addresses;
  },

  async getAddressById(id: number | string): Promise<Address> {
    const response = await ApiClient.get<{ address: Address }>(
      API_ROUTES.ADDRESSES.GET_BY_ID(id),
    );
    return response.data.address;
  },

  async createAddress(data: CreateAddressInput): Promise<Address> {
    const response = await ApiClient.post<{ address: Address }>(
      API_ROUTES.ADDRESSES.CREATE,
      data,
    );
    return response.data.address;
  },

  async updateAddress(
    id: number | string,
    data: UpdateAddressInput,
  ): Promise<Address> {
    const response = await ApiClient.put<{ address: Address }>(
      API_ROUTES.ADDRESSES.UPDATE(id),
      data,
    );
    return response.data.address;
  },

  async deleteAddress(id: number | string): Promise<{ message: string }> {
    const response = await ApiClient.delete<{ message: string }>(
      API_ROUTES.ADDRESSES.DELETE(id),
    );
    return response.data;
  },
};
