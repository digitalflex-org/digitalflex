'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { api } from '@/lib/axios';

function ActivatePage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activationToken = searchParams.get('token');

    const [status, setStatus] = useState('loading');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!activationToken)
        {
            setStatus('error');
            setMessage('Activation token is missing. Please check your email link.');
            return;
        }

        const activateAccount = async () => {
            try
            {
                const res = await api.post(`/api/auth/activate`, { activationToken });

                setStatus('success');
                setMessage(res.data.message || 'Your account has been successfully activated! You can now log in.');

                setTimeout(() => {
                    router.push('/auth?tab=signin');
                }, 3000);
            } catch (err)
            {
                setStatus('error');
                if (err.response?.data?.message)
                {
                    setMessage(err.response.data.message);
                } else
                {
                    setMessage('An unexpected error occurred. Please try again later.');
                }
            }
        };

        activateAccount();
    }, [activationToken, router]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
                {status === 'loading' && (
                    <>
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        <h1 className="text-xl font-semibold text-gray-700">Activating your account…</h1>
                        <p className="text-sm text-gray-500 mt-2">Please wait a moment.</p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <h1 className="text-2xl font-bold text-green-600">Success 🎉</h1>
                        <p className="text-gray-700 mt-2">{message}</p>
                        <p className="text-gray-500 mt-4 text-sm">Redirecting to login…</p>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <h1 className="text-2xl font-bold text-red-600">Error</h1>
                        <p className="text-gray-700 mt-2">{message}</p>
                        <a href="/contact" className="text-blue-600 hover:underline mt-4 inline-block">Contact Support</a>
                    </>
                )}
            </div>
        </main>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <ActivatePage />
        </Suspense>
    );
}