export interface ProductImage {
  id: number;
  product_id: number;
  image_url: string;
}

export interface AddProductImageResponse {
  message: string;
  imageId: number;
}
