import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserData(user);
        setIsAuthenticated(true);
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem('user_data', JSON.stringify({ userToken: token, user: user }));
   setToken(token);
    setUserData(user);
    setIsAuthenticated(true);

  };
  const logout = () => {
    localStorage.removeItem('user_data');
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider 
  value={{ token, userData, isAuthenticated, login, logout }}>
    {children}
  </AuthContext.Provider>;
  
};

export const useAuth = () => useContext(AuthContext);
