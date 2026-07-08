import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { authService } from "../services/authService";
import { useAuth } from "./useAuth";
import type { UpdateProfileInput } from "../types/auth_types";

export function useUpdateProfile() {
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (data: UpdateProfileInput) => authService.updateProfile(data),
    onSuccess: (updatedUser) => {
      setUser(updatedUser);
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      console.error(
        error.response?.data?.message || "خطا در بروزرسانی پروفایل",
      );
    },
  });
}
