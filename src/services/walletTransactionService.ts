import { API_ROUTES } from "../constants/apiRoutes";
import ApiClient from "../lib/config/ApiClient";
import type { WalletTransaction } from "../types/walletTransaction_types";

export const walletTransactionService = {
  async getTransactionsByWalletId(
    walletId: number | string,
  ): Promise<WalletTransaction[]> {
    const response = await ApiClient.get<WalletTransaction[]>(
      API_ROUTES.WALLET_TRANSACTIONS.BY_WALLET_ID(walletId),
    );
    return response.data;
  },

  async getTransactionsByUserId(
    userId: number | string,
  ): Promise<WalletTransaction[]> {
    const response = await ApiClient.get<WalletTransaction[]>(
      API_ROUTES.WALLET_TRANSACTIONS.BY_USER_ID(userId),
    );
    return response.data;
  },
};
