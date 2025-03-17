// src/app/utils/auth.js
"use client";

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Create an authentication context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Admin credentials (in a real app, these would come from a secure backend)
const ADMIN_EMAIL = 'admin@dshgsonic.com';
const ADMIN_PASSWORD = 'Admin@123';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simple authentication - match against hard-coded credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const userData = { email, role: 'admin' };
      setUser(userData);
      localStorage.setItem('adminUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Higher-order component to protect routes
export function withAuth(Component) {
  return function ProtectedRoute(props) {
    const { user, loading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/admin/login');
      }
    }, [loading, isAuthenticated, router]);

    if (loading) {
      return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return isAuthenticated ? <Component {...props} /> : null;
  };
}