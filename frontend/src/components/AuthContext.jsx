import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);

    const login = (token) => {
        setAuthData(token);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setAuthData(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
