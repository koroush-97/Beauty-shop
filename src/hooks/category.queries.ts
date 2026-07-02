import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/categoryService";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getCategories,
  });
};

export const useCategoryBySlug = (slug?: string) => {
  return useQuery({
    queryKey: ["categories", slug],
    queryFn: () => categoryService.getCategoryBySlug(slug as string),
    enabled: !!slug,
  });
};
