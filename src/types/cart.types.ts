export interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface CartResponse {
  success: boolean;
  items: CartItem[];
  total: number;
}

export interface CartMessageResponse {
  success: boolean;
  message: string;
}

export interface AddToCartInput {
  product_id: number;
  guest_id?: string;
}

export interface GuestCartInput {
  guest_id: string;
}
