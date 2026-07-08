import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { walletService } from "../services/walletService";
import { WALLET_TRANSACTION_KEYS } from "./walletTransaction.queries";

export interface WalletActionInput {
  amount: number;
  description?: string;
}

interface WalletActionVariables {
  userId: number | string;
  data: WalletActionInput;
}

export const WALLET_KEYS = {
  all: ["wallets"] as const,
  byUser: (userId: number | string) =>
    [...WALLET_KEYS.all, "user", userId] as const,
};

export const useWallet = (userId?: number | string) => {
  return useQuery({
    queryKey: userId ? WALLET_KEYS.byUser(userId) : WALLET_KEYS.all,
    queryFn: () => walletService.getWalletByUserId(userId!),
    enabled: !!userId,
  });
};

export const useDepositWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, data }: WalletActionVariables) =>
      walletService.deposit(userId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: WALLET_KEYS.byUser(variables.userId),
      });

      queryClient.invalidateQueries({ queryKey: WALLET_TRANSACTION_KEYS.all });
    },
  });
};

export const useWithdrawWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, data }: WalletActionVariables) =>
      walletService.withdraw(userId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: WALLET_KEYS.byUser(variables.userId),
      });

      queryClient.invalidateQueries({ queryKey: WALLET_TRANSACTION_KEYS.all });
    },
  });
};
