import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthUser } from "../../types/auth_types";
import { authService } from "../../services/authService";
import { mapUserFromApi } from "../../utils/authMappers";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const restore = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        setIsAuthLoading(false);
        return;
      }

      try {
        const meRes = await authService.me();

        setUser(mapUserFromApi(meRes.user));
      } catch (err) {
        localStorage.removeItem("auth_token");
        setUser(null);
        console.log(err);
      } finally {
        setIsAuthLoading(false);
      }
    };

    restore();
  }, []);

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isAuthLoading,
      setUser,
      logout,
    }),
    [user, isAuthLoading],
  );

  if (isAuthLoading) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
