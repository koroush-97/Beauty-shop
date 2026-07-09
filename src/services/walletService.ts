import { API_ROUTES } from "../constants/apiRoutes";
import ApiClient from "../lib/config/ApiClient";
import type {
  Wallet,
  WalletActionInput,
  WalletActionResponse,
} from "../types/wallet_types";

export const walletService = {
  async getWalletByUserId(userId: number | string): Promise<Wallet> {
    const response = await ApiClient.get<Wallet>(
      API_ROUTES.WALLET.GET_BY_USER_ID(userId),
    );
    return response.data;
  },

  async deposit(
    userId: number | string,
    data: WalletActionInput,
  ): Promise<WalletActionResponse> {
    const response = await ApiClient.post<WalletActionResponse>(
      API_ROUTES.WALLET.DEPOSIT(userId),
      data,
    );
    return response.data;
  },

  async withdraw(
    userId: number | string,
    data: WalletActionInput,
  ): Promise<WalletActionResponse> {
    const response = await ApiClient.post<WalletActionResponse>(
      API_ROUTES.WALLET.WITHDRAW(userId),
      data,
    );
    return response.data;
  },
};
