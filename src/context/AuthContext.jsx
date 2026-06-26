import { createContext, useContext, useState, useEffect } from 'react';
import socket from '../api/socket';
import { mockUsers } from '../data/mockData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('mock-jwt-token');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser(mockUsers.student);
      }
    } else {
      setUser(mockUsers.student);
      localStorage.setItem('user', JSON.stringify(mockUsers.student));
      localStorage.setItem('token', 'mock-jwt-token');
    }
    setLoading(false);
  }, []);

  const login = (userData, tokenValue = 'mock-jwt-token') => {
    setUser(userData);
    setToken(tokenValue);
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // In demo mode, logout resets to student role so visitors never get stuck on a blank login screen without a way back in
    setUser(mockUsers.student);
    setToken('mock-jwt-token');
    localStorage.setItem('user', JSON.stringify(mockUsers.student));
  };

  const switchRole = (roleKey) => {
    const newUser = mockUsers[roleKey] || mockUsers.student;
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('token', 'mock-jwt-token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, switchRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
