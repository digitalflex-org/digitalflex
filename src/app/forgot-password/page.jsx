'use client';

import { useState } from 'react';
import { api } from '@/lib/axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try
        {
            const res = await api.post('/auth/forgot-password', { email });
            toast.success(res.data?.message || 'Check your email for reset link');
        } catch (err)
        {
            console.error(err);
            toast.error(err.response?.data?.message || 'Something went wrong');
        } finally
        {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center text-blue-700 hidden">Forgot Password</h2>
                <p className="text-center text-gray-600 text-sm">
                    Enter your email to receive a password reset link.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold 
                transition-transform duration-200 hover:scale-105 uppercase ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className="text-center text-sm text-gray-600">
                    Remembered your password?{' '}
                    <Link href="/auth?tab=signin" className="text-blue-700 font-semibold hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
