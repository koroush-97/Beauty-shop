export interface Wallet {
  id: number;
  user_id: number;
  balance: number;
  updated_at: string;
}

export interface WalletActionInput {
  amount: number;
  description?: string;
}

export interface WalletActionResponse {
  message: string;
  newBalance: number;
}

export interface WalletActionInput {
  amount: number;
  description?: string;
}
