'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '@/components/utilities/card/card';
import Button from '@/components/utilities/button/buton';
import ApplicantsSection from './sections/applicantSection';
import { Menu, X } from 'lucide-react';
import { fetchActiveUsers, Logout } from '@/lib/actions/dashboard/dashboard';
import Overview from './sections/overview/overview';
import { useAuthGuard } from '@/components/utilities/hooks/useAuthGuard';
import CareerSection from './sections/careerSection';
import { toast } from 'react-toastify';
import UserLogout from '@/components/ui/userLogout';


export default function AdminDashboard({ user }) {
    // console.log(props);

    const [section, setSection] = useState('overview');
    const [activeUsers, setActiveUsers] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const hasFetched = useRef(false);

    const sections = ['overview', 'applicants', 'careers', 'onboarding', 'settings'];

    useEffect(() => {
        if (!hasFetched.current)
        {
            const getActiveUsers = async () => {
                const users = await fetchActiveUsers();
                setActiveUsers(users);
            };
            getActiveUsers();
            hasFetched.current = true;
        }
    }, []);



    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-serif justify-around">
            <header className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
                <button
                    className="lg:hidden p-2 text-[#004e89]"
                    onClick={() => setIsSidebarOpen((prev) => !prev)}
                    aria-label="Toggle Navigation Menu"
                >
                    {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <h1 className="text-xl font-bold text-[#004e89]">Admin Dashboard</h1>
                <UserLogout user={user} />

            </header>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                <aside
                    className={`
    fixed top-20 lg:top-1 sm:h-screen left-0 z-30 h-full w-64 bg-white shadow-md p-4 space-y-4 transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:relative lg:translate-x-0 lg:w-1/5 lg:block
  `}
                >
                    <div className="flex justify-end items-center lg:hidden mb-4">
                        <button onClick={() => setIsSidebarOpen(false)} aria-label="Close Sidebar">
                            <X className="w-6 h-6 text-gray-600 " />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-2 text-[#004e89]">
                        {sections.map((item) => (
                            <Button
                                key={item}
                                variant={section === item ? 'default' : 'outline'}
                                onClick={() => {
                                    setSection(item);
                                    setIsSidebarOpen(false);
                                }}
                                className="uppercase whitespace-nowrap cursor-pointer"
                            >
                                {item.replace('-', ' ')}
                            </Button>
                        ))}
                    </nav>
                </aside>


                <main className="w-full lg:flex-1 p-4 space-y-4 overflow-y-auto">
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold text-black capitalize mb-4">
                            {section.replace('-', ' ')}
                        </h2>
                        {/* Rendering page content and modal here here */}
                        {section === 'applicants' && <ApplicantsSection />}
                        {section === 'overview' && <Overview />}
                        {section === 'careers' && <CareerSection />}
                    </Card>
                </main>

                <section className="w-full lg:w-1/5 bg-white border-t lg:border-t-0 lg:border-l shadow-inner p-4 mb-4">
                    <h3 className="text-md font-semibold font-sans text-gray-700 mb-3">
                        Online
                        <span className="text-sm text-black ml-2">
                            (Active Users: {activeUsers.length || 0})
                        </span>
                    </h3>

                    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 min-h-[80%] text-sm text-gray-700 space-y-2">
                        {activeUsers.length > 0 ? (
                            activeUsers.map((user, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                                    <span className='capitalize'>{user.preferred_name}</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No active users or applicants online.</p>
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
}
