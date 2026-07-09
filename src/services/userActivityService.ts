import api from "../lib/config/ApiClient";
import { API_ROUTES } from "../constants/apiRoutes";
import type {
  CreateUserActivityInput,
  CreateUserActivityResponse,
  UserActivitiesResponse,
} from "../types/userActivity_types";

export const userActivityService = {
  async create(
    data: CreateUserActivityInput,
  ): Promise<CreateUserActivityResponse> {
    const response = await api.post<CreateUserActivityResponse>(
      API_ROUTES.USER_ACTIVITY.CREATE,
      data,
    );
    return response.data;
  },

  async getAll(): Promise<UserActivitiesResponse> {
    const response = await api.get<UserActivitiesResponse>(
      API_ROUTES.USER_ACTIVITY.GET_ALL,
    );
    return response.data;
  },

  async getByUserId(userId: number | string): Promise<UserActivitiesResponse> {
    const response = await api.get<UserActivitiesResponse>(
      API_ROUTES.USER_ACTIVITY.GET_BY_USER(userId),
    );
    return response.data;
  },
};
