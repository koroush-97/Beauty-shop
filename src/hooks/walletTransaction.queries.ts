import { useQuery } from "@tanstack/react-query";
import { walletTransactionService } from "../services/walletTransactionService";

export const WALLET_TRANSACTION_KEYS = {
  all: ["wallet-transactions"] as const,
  byWalletId: (walletId: number | string) =>
    [...WALLET_TRANSACTION_KEYS.all, "wallet", walletId] as const,
  byUserId: (userId: number | string) =>
    [...WALLET_TRANSACTION_KEYS.all, "user", userId] as const,
};

export const useTransactionsByWalletId = (walletId?: number | string) => {
  return useQuery({
    queryKey: walletId
      ? WALLET_TRANSACTION_KEYS.byWalletId(walletId)
      : WALLET_TRANSACTION_KEYS.all,
    queryFn: () =>
      walletTransactionService.getTransactionsByWalletId(walletId!),
    enabled: !!walletId,
  });
};

export const useTransactionsByUserId = (userId?: number | string) => {
  return useQuery({
    queryKey: userId
      ? WALLET_TRANSACTION_KEYS.byUserId(userId)
      : WALLET_TRANSACTION_KEYS.all,
    queryFn: () => walletTransactionService.getTransactionsByUserId(userId!),
    enabled: !!userId,
  });
};
