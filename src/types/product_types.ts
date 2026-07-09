export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number | string;
  discount_price: number | string | null;
  stock: number;
  category_id: number;
  brand: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}
