import { createContext } from "react";
import type { AuthUser } from "../../types/auth_types";

export type AuthContextType = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
