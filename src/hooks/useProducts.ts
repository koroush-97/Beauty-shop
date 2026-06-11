import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabase";
import type { Product } from "../types/Product";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) throw new Error(error.message);
      return data as Product[];
    },
  });
};
