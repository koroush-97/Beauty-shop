import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productService.getProducts,
  });
};

export const useProductById = (id: number | string) => {
  return useQuery({
    queryKey: ["product", "id", id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
};

export const useProductBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["product", "slug", slug],
    queryFn: () => productService.getProductBySlug(slug),
    enabled: !!slug,
  });
};
