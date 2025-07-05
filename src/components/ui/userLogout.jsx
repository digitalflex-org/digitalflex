import React, { useState } from 'react'
import { ChevronDown, ChevronUp, UserCircle } from 'lucide-react';
import { Logout } from '@/lib/actions/dashboard/dashboard';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const UserLogout = ({ user }) => {

    const [toggled, setToggled] = useState(false);
    const router = useRouter();
    // console.log('user data:', user);

    const handleLogout = async () => {
        try
        {
            const res = await Logout();
            if (res.status === 200)
            {
                toast.success('Logged Out')
                router.push('/auth?tab=signin');
            }

        } catch (error)
        {
            console.error('Error Logging Out', error)
        }
    }



    return (
        <div className="relative flex items-center space-x-3">
            <UserCircle className="w-8 h-8 text-[#004e89]" />

            <div className="flex flex-col items-start">
                <button
                    onClick={() => setToggled(!toggled)}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-800 focus:outline-none hover:underline"
                >
                    <span className='hidden md:block capitalize'>{user?.preferred_name || user?.email}</span>
                    {toggled ? <ChevronUp className="w-4 h-4 text-[#004e89]" /> : <ChevronDown className="w-4 h-4 text-[#004e89]" />}
                </button>

                {toggled && (
                    <div className="absolute right-0 mt-10 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <button
                            onClick={() => handleLogout()}
                            className="block w-full text-left px-4 py-2 text-sm text-[#004e89] hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserLogout