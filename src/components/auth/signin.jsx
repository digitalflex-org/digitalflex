'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '@/lib/axios';
import { ToastContainer, toast } from 'react-toastify';
import { signinValidation } from '@/validations/auth.validation';
import { useAuth } from '@/contexts/authContext';

const Signin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    // console.log('call back from the top:', callbackUrl);
    const router = useRouter();
    const { setUser } = useAuth() ?? {};

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try
        {
            signinValidation(formData);
            const res = await api.post('/auth/signin', formData);

            if (res.status === 200 && res.statusText === 'OK')
            {
                // console.log('server res:', res?.data)
                const userRole = res.data?.data?.userData?.role;
                // const userPreferred_name = res.data?.data?.userData?.preferred_name;
                // console.log(userPreferred_name)
                setUser(res.data?.data?.userData);

                // allowed roles or infer callbackUrl
                const restrictedRoutes = {
                    '/admin': ['admin'],
                    '/onboarding': ['applicant', 'admin'],
                };

                let isAuthorized = true;
                if (callbackUrl)
                {
                    const matched = Object.entries(restrictedRoutes).find(([path, roles]) =>
                        callbackUrl.startsWith(path)
                    );
                    if (matched)
                    {
                        const [, allowedRoles] = matched;
                        if (!allowedRoles.includes(userRole))
                        {
                            isAuthorized = false;
                        }
                    }
                }

                if (!isAuthorized)
                {
                    toast.warn('Unauthorized Action!');
                    return;
                }

                toast.success('Signed in successfully!');
                router.push(callbackUrl || '/');
            }
        } catch (error)
        {
            if (error?.status === 404)
            {
                toast.error('Kindly signup and try again!');
            } else
            {
                console.error('sign in error message :', error.message);
                toast.error('Error signing in');
            }
        } finally
        {
            setLoading(false);
        }
    };



    return (
        <div className="py-10 px-4">
            <ToastContainer />
            <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 w-full border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-2 w-full border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold transition-transform duration-200 hover:scale-105 uppercase ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="?tab=signup" className="text-blue-700 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
