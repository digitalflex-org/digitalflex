'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '@/components/utilities/card/card';
import Button from '@/components/utilities/button/buton';
import ApplicantsSection from './sections/applicantSection';
import { Cross, Dot, UserCircle } from 'lucide-react';
import { fetchActiveUsers } from '@/lib/actions/dashboard/dashboard';
import Overview from './sections/overview/overview';
import { useAuthGuard } from '@/components/utilities/hooks/useAuthGuard';


export default function AdminDashboard({ user }){
    // console.log(props);
    
    const [section, setSection] = useState('overview');
    const [activeUsers, setActiveUsers] = useState([]);
    // const [user, setUser] = useState(null);
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
        <div className="min-h-screen flex flex-col bg-gray-50 font-serif">
            <header className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
                <h1 className="text-xl font-bold text-blue-800">Admin Dashboard</h1>
                <div className="flex items-center space-x-3">
                    <UserCircle className="w-8 h-8 text-gray-600" />
                    <span className="md:text-sm md:font-medium text-gray-800">
                        {user?.email || 'Welcome Admin' }
                    </span>
                </div>
            </header>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                <aside className="w-full lg:w-1/5 bg-white shadow-md p-4 space-y-4">
                    <nav className="flex lg:flex-col flex-row gap-2 text-blue-800">
                        {sections.map((item) => (
                            <Button
                                key={item}
                                variant={section === item ? 'default' : 'outline'}
                                onClick={() => setSection(item)}
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
                        {/* Render appropriate content here */}
                        {section === 'applicants' && <ApplicantsSection />}
                        {section === 'overview' && <Overview />}
                    </Card>
                </main>

                <section className="w-full lg:w-1/5 bg-white border-t lg:border-t-0 lg:border-l shadow-inner p-4 mb-4">
                    <h3 className="text-md font-semibold font-sans text-gray-700 mb-3">
                        Online
                        <span className="text-sm text-gray-500 ml-2">
                            (Active Users: {activeUsers.length || 0})
                        </span>
                    </h3>

                    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 min-h-[80%] text-sm text-gray-700 space-y-2">
                        {activeUsers.length > 0 ? (
                            activeUsers.map((user, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                                    <span>{user.preferred_name}</span>
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
