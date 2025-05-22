'use client';
// import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { signinValidation } from 'validations/auth.validation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from 'lib/axios';


const Signin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();
   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try
        {
            signinValidation(formData);
            const data = { ...formData };
            const res = await api.post('/auth/signin', data);
            console.log('response signin form data:', res);
            if (res.status === 200)
            {
                // await setDataToLocalStorage('auth_token')                
                toast.success('Signed in successfully!');
                setTimeout(() => {
                    router.push('/onboarding');
                }, 1500);
            }
        } catch (error)
        {
            console.error('Error logging in:', error.message);
            toast.error(error?.message || 'Error signing in');
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
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold transition-transform duration-200 hover:scale-105 uppercase"
                    >
                        Sign In
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
