'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { api } from '@/lib/axios';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/authContext';

export const useAuthGuard = (allowedRoles = [], redirect = '/auth?tab=signin') => {
    const { user, loading } = useAuth();
    const [checking, setChecking] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading)
        {
            if (user && allowedRoles.includes(user.role))
            {
                setChecking(false);
            } else
            {
                const encodedPath = encodeURIComponent(pathname);
                toast.warn("You're not authorized to perform this action!");
                const separator = redirect.includes('?') ? '&' : '?';
                router.replace(`${redirect}${separator}callbackUrl=${encodedPath}`);
            }
        }
    }, [user, loading, allowedRoles, redirect, pathname, router]);

    return { checking: loading || checking, user };
};
