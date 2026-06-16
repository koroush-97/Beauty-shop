export interface Product {
  id: string;
  title: string;
  price: number;
  discount_price?: number;
  image_url: string;
  category: string;
  is_amazing_offer: boolean;
}
