'use client';
import { useEffect, useRef, useState } from 'react';
import { fetchBlogs } from '@/lib/actions/dashboard/dashboard';
import { CalendarDays, Tags, Sparkles, Pen, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { stripHtml } from '../utilities/stripHtml';
import { useDebouncedCallback } from '@/lib/actions/debounce';
import { useRouter } from 'next/navigation';

export default function EditorsBlogPosts({ user = null }) {
    const [blogs, setBlogs] = useState([]);
    const hasFetched = useRef(false);
    const router = useRouter();

    useEffect(() => {
        if (!hasFetched.current)
        {
            getBlogs();
            hasFetched.current = true;
        }
    }, []);

    const getBlogs = async () => {
        try
        {
            const res = await fetchBlogs();
            setBlogs(res.blogposts || []);
        } catch (error)
        {
            console.error('Failed to fetch blogs:', error);
        }
    };
    const handleViewPost = useDebouncedCallback((id) => {
        router.push(`/blog/${id}`);
    }, 500);

    return (
        <div className="min-h-screen bg-gray-50 font-serif">
            <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#004e89]">Editor's Blog Posts</h1>
                {/* <UserLogout user={user} /> */}
            </header>

            <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {blogs.length === 0 ? (
                    <p className="text-center text-gray-500 col-span-full">No blog posts yet.</p>
                ) : (
                    blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100 overflow-hidden flex flex-col"
                        >
                            {blog.imageUrl && (
                                <Image
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-xl font-semibold text-[#1d3c6a] mb-2 line-clamp-2">{blog.title}</h2>

                                <div className="text-sm text-gray-500 mb-3 space-y-1 flex items-center gap-x-4 flex-wrap">
                                    <div className="flex items-center gap-1">
                                        <CalendarDays className="w-4 h-4" /><span className='pt-1'>
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <Tags className="w-4 h-4" /> <span className='text-sm'>
                                            {blog.category.join(', ')}

                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                                    {stripHtml(blog.content).substring(0, 150)}...
                                </p>
                                <div className='flex justify-between'>

                                    <button onClick={() => handleViewPost(blog._id)} className="mt-auto inline-block text-[#004e89] font-medium hover:underline"
                                    >
                                        View full post →
                                    </button>
                                    <div className='flex gap-2 text-[#004e89] cursor-pointer'>
                                        <span><Pen /></span>
                                        <span><Trash2 /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </main>
        </div>
    );
}

