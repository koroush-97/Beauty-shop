export interface User {
  id: number;
  full_name: string;
  email: string;
  role: "user" | "admin" | string;
  avatar?: string;
  phone?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  full_name: string;
  email: string;
  password: string;
}

export interface MeResponse {
  success: boolean;
  user: User;
}

export type UpdateProfileInput = {
  full_name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  password?: string;
};

/* =========================
   Frontend/UI Types
========================= */

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role?: string;
  avatar?: string;
  phone?: string;
  password?: string;
}

export interface ProfileFormValues {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  password?: string;
}
