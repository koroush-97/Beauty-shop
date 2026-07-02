import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addressService } from "../services/addressService";
import type {
  CreateAddressInput,
  UpdateAddressInput,
} from "../types/address_types";

export const addressQueryKeys = {
  all: ["addresses"] as const,
  detail: (id: number | string) => ["addresses", id] as const,
};

export const useAddresses = () => {
  return useQuery({
    queryKey: addressQueryKeys.all,
    queryFn: addressService.getAddresses,
  });
};

export const useAddressById = (id?: number | string) => {
  return useQuery({
    queryKey: addressQueryKeys.detail(id as number | string),
    queryFn: () => addressService.getAddressById(id as number | string),
    enabled: !!id,
  });
};

export const useCreateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAddressInput) =>
      addressService.createAddress(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressQueryKeys.all });
    },
  });
};

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number | string;
      data: UpdateAddressInput;
    }) => addressService.updateAddress(id, data),
    onSuccess: (updatedAddress) => {
      queryClient.invalidateQueries({ queryKey: addressQueryKeys.all });
      queryClient.invalidateQueries({
        queryKey: addressQueryKeys.detail(updatedAddress.id),
      });
    },
  });
};

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) => addressService.deleteAddress(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressQueryKeys.all });
    },
  });
};
