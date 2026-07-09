import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userActivityService } from "../services/userActivityService";
import type { CreateUserActivityInput } from "../types/userActivity_types";

export const USER_ACTIVITY_KEYS = {
  all: ["user-activities"] as const,
  allActivities: () => [...USER_ACTIVITY_KEYS.all, "all"] as const,
  byUser: (userId: string | number) =>
    [...USER_ACTIVITY_KEYS.all, "user", userId] as const,
};

export const useAllUserActivities = () => {
  return useQuery({
    queryKey: USER_ACTIVITY_KEYS.allActivities(),
    queryFn: () => userActivityService.getAll(),
  });
};

export const useUserActivitiesByUserId = (userId: string | number) => {
  return useQuery({
    queryKey: USER_ACTIVITY_KEYS.byUser(userId),
    queryFn: () => userActivityService.getByUserId(userId),
    enabled: !!userId,
  });
};

export const useCreateUserActivity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserActivityInput) =>
      userActivityService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: USER_ACTIVITY_KEYS.all,
      });
    },
  });
};
