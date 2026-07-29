"use client";

import { useState, useEffect, createContext, useContext } from "react";

export type Role = "learner" | "parent" | "educator";

interface User {
  name: string;
  role: Role;
  avatar: string;
}

interface AuthContextProps {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("penpal_auth_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Auth context parse error:", e);
      }
    } else {
      // Default auto-login as learner for demo purposes
      const defaultUser: User = {
        name: "Alex",
        role: "learner",
        avatar: "✍️",
      };
      setUser(defaultUser);
      localStorage.setItem("penpal_auth_user", JSON.stringify(defaultUser));
    }
  }, []);

  const login = (role: Role) => {
    let name = "Alex";
    let avatar = "✍️";
    if (role === "parent") {
      name = "Sarah (Alex's Mom)";
      avatar = "👩‍👦";
    } else if (role === "educator") {
      name = "Mr. Henderson (SEN Specialist)";
      avatar = "👨‍🏫";
    }

    const newUser = { name, role, avatar };
    setUser(newUser);
    localStorage.setItem("penpal_auth_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("penpal_auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
