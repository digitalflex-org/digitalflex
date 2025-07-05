'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '@/components/utilities/card/card';
import Button from '@/components/utilities/button/buton';
import { Menu, X } from 'lucide-react';
// import { useAuthGuard } from '@/components/utilities/hooks/useAuthGuard';
import { toast } from 'react-toastify';
import UserLogout from '@/components/ui/userLogout';
import BlogEditor from './BlogEditor';
import EditorsBlogPosts from './EditorsBlogPosts';


export default function BlogEditorsPage({ user }) {
    // console.log(props);

    const [section, setSection] = useState('add-post');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const hasFetched = useRef(false);

    const sections = ['blog-posts', 'add-post'];

    useEffect(() => {
        if (!hasFetched.current)
        {
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

                <h1 className="text-xl font-bold text-[#004e89]">Blog Panel</h1>
                <UserLogout user={user} />

            </header>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                <aside
                    className={`
    fixed top-20 lg:top-1 sm:h-screen left-0 z-30 min-h-screen w-64 bg-white md:min-h-full shadow-md p-4 space-y-4 transform transition-transform duration-300 ease-in-out
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


                <main className="w-full lg:flex-1 p-1 rounded-none space-y-4 overflow-y-auto">
                    <Card className="p-4 rounded-none">
                        <h2 className="text-lg font-semibold text-black capitalize mb-4 hidden">
                            {section.replace('-', ' ')}
                        </h2>
                        {/* Rendering page content and modal here here */}
                        {section === 'blog-posts' && <EditorsBlogPosts />}
                        {section === 'add-post' && <BlogEditor />}
                    </Card>
                </main>
            </div>
        </div>
    );
}
