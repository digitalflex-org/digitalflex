'use client';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '@/lib/axios';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const validateUser = async () => {
        try
        {
            const res = await api.get('/auth/me');
            const user = res.data.user;
            console.log('user data:', user);
            setUser(user)

        } catch (error)
        {
            console.error('Failed to fetch user:', error);
            setUser(null);
        } finally
        {
            setLoading(false);
        }
    }

    useEffect(() => {
        validateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);