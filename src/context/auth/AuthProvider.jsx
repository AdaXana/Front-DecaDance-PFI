import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    console.log("stored:", stored);
    console.log("parsed:", JSON.parse(stored));
    return stored ? JSON.parse(stored) : null;
  });

  console.log("user en AuthProvider:", user);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    //localStorage.setItem("token", userData.token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const updateUser = (newData) => {
    const updated = { ...user, ...newData };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
