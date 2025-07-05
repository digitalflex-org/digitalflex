'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '@/lib/axios';

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const resetToken = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!password || !confirmPassword)
        {
            setError('Both fields are required.');
            return;
        }

        if (password !== confirmPassword)
        {
            setError('Passwords do not match.');
            return;
        }

        if (!resetToken)
        {
            setError('Reset token missing. Please use the link from your email.');
            return;
        }

        try
        {
            const res = await api.post(`/auth/reset-password/${resetToken}`, {
                newPassword: password,
            });

            setSuccess(res.data.message || 'Password has been reset successfully!');
            setTimeout(() => {
                router.push('/auth?tab=signin');
            }, 3000);
        } catch (err)
        {
            if (err.response?.data?.message)
            {
                setError(err.response.data.message);
            } else
            {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded bg-white p-8 shadow">
                <h1 className="mb-6 text-center text-2xl font-bold text-blue-700">Reset Your Password</h1>
                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
                {success && <p className="mb-4 text-sm text-green-500">{success}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading reset form…</div>}>
            <ResetPassword />
        </Suspense>
    );
}