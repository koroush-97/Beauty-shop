import { API_ROUTES } from "../constants/apiRoutes";
import { mapUserFromApi } from "../utils/authMappers";
import api from "../lib/config/ApiClient";
import type {
  AuthUser,
  LoginInput,
  RegisterInput,
  LoginResponse,
  RegisterResponse,
  MeResponse,
  UpdateProfileInput,
  User,
} from "../types/auth_types";

type UpdateProfileResponse = {
  user: User;
};

export const authService = {
  register: async (data: RegisterInput): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>(
      API_ROUTES.AUTH.REGISTER,
      data,
    );
    return response.data;
  },

  login: async (data: LoginInput): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(API_ROUTES.AUTH.LOGIN, data);
    if (response.data.success && response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
    }
    return response.data;
  },

  me: async (): Promise<MeResponse> => {
    const response = await api.get<MeResponse>(API_ROUTES.AUTH.ME);
    return response.data;
  },

  updateProfile: async (data: UpdateProfileInput): Promise<AuthUser> => {
    const response = await api.patch<UpdateProfileResponse>(
      API_ROUTES.AUTH.ME,
      data,
    );

    return mapUserFromApi(response.data.user);
  },

  logout: () => {
    localStorage.removeItem("auth_token");
  },
};
