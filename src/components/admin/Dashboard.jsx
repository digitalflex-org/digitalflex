'use client';
import { useState } from 'react';
import Card from 'components/utilities/card/card';
import Button from 'components/utilities/button/buton';
import { UserCircle } from 'lucide-react';

export default function AdminDashboard() {
    const [section, setSection] = useState('overview');
    const [user, setUser] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
                <h1 className="text-xl font-bold text-blue-800">Admin Dashboard</h1>
                <div className="flex items-center space-x-3">
                    <UserCircle className="w-8 h-8 text-gray-600" />
                    <span className="mobile-admin-info md:text-sm md:font-medium text-gray-800">
                        Welcome, {user || 'Admin'}
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/5 bg-white shadow-md p-4 space-y-4 min-h-[auto] ">
                    <nav className="flex lg:flex-col flex-row gap-2 overflow-hidden text-blue-800">
                        {['overview', 'careers', 'onboarding', 'settings'].map((item) => (
                            <Button
                                key={item}
                                variant={section === item ? 'default' : 'outline'}
                                onClick={() => setSection(item)}
                                className="capitalize whitespace-nowrap"
                            >
                                {item.replace('-', ' ')}
                            </Button>
                        ))}
                    </nav>
                </aside>

                {/* Main Section */}
                <main className="w-full lg:flex-1 p-4 space-y-4 overflow-y-auto">
                    <Card className="p-6 min-h-[auto]">
                        <h2 className="text-lg font-semibold text-black capitalize mb-4">
                            {section.replace('-', ' ')}
                        </h2>
                        {section === 'overview' && <div className='text-blue-900'>Dashboard stats and overview widgets...</div>}
                        {section === 'add-data' && <div className='text-blue-900'>Add new data form goes here...</div>}
                        {section === 'careers' && <div className='text-blue-900'>Modify existing data form goes here...</div>}
                        {section === 'settings' && <div className='text-blue-900'>Admin settings controls...</div>}
                    </Card>
                </main>

                {/* Right Panel */}
                <section className="w-full lg:w-2/5 bg-white border-t lg:border-t-0 lg:border-l shadow-inner p-4">
                    <h3 className="text-md font-medium text-gray-600 mb-2">Live Output</h3>
                    <div className="bg-gray-100 p-3 rounded-md text-sm text-gray-700 min-h-[300px]">
                        Outputs of changes will be displayed here...
                    </div>
                </section>
            </div>
        </div>
    );
}
