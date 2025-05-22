'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from 'lib/axios';

export const useAuthGuard = (role, redirect = '/auth?tab=signin') => {
    const [checking, setChecking] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const validateUser = async () => {
            try
            {
                const res = await api.get('/auth/me');
                const user = res.data.user;

                if (role && user.role !== role)
                {
                    router.replace(redirect);
                } else
                {
                    setChecking(false);
                }
            } catch (error)
            {
                router.replace(redirect);
            }
        };

        validateUser();
    }, [role, redirect, router]);
    return checking; 
};
