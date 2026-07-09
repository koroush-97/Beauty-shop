export type WalletTransactionType = "deposit" | "withdraw";

export interface WalletTransaction {
  id: number;
  wallet_id: number;
  type: WalletTransactionType;
  amount: number;
  description: string;
  created_at: string;
}

export interface WalletTransactionsResponse {
  transactions: WalletTransaction[];
}

export interface WalletTransactionByUserResponse {
  userId: number;
  walletId?: number;
  transactions: WalletTransaction[];
}
