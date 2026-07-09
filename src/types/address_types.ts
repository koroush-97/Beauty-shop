export interface Address {
  id: number;
  user_id: number;
  province: string;
  city: string;
  full_address: string;
  postal_code: string;
  created_at?: string;
}

export interface CreateAddressInput {
  province: string;
  city: string;
  full_address: string;
  postal_code: string;
}

export type UpdateAddressInput = CreateAddressInput;
