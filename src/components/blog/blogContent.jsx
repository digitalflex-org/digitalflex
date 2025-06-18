'use client';
import React, { useEffect, useState } from 'react';
import SearchSection from './searchSection';
import { ChartBar, CalendarDays, Sparkles } from 'lucide-react';
import FeaturedSection from './featured';
import { api } from '@/lib/axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL



const BlogContents = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const router = useRouter();
    useEffect(() => {
        async function fetchPosts() {
            try
            {
                const { data } = await api.get(`${baseUrl}/blog`);
                console.log(data);
                if (data.success)
                {
                    // console.log(data)
                    setBlogs(data.blogposts)
                }
                else
                {
                    console.warn("Unexpected response structure:", data);
                    setBlogs([]);
                }
            } catch (error)
            {
                console.error("Error fetching blogs:", error.message);
                setBlogs([]);
            }
        }
        fetchPosts();

    }, []);

    return (
        <main className="p-6 max-w-5xl mx-auto">

            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Explore Our Blog</h1>
                <p className="text-gray-500 mt-1">Insights, tutorials, and updates to power your digital journey.</p>
            </header>

            <SearchSection />
            <div className=''>
                <section className='flex mt-4 items-center'>
                    <h3 className='inline-flex gap-1 text-2xl items-center'><span className='transform skew-y-12 scale-50 animate-pulse'><Sparkles className='' /></span>Featured Blogs</h3>
                </section>
                <FeaturedSection />
            </div>

            <section className="mt-10 space-y-8">
                {blogs.map((post) => (
                    <article
                        key={post._id}
                        className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                            {post.title}
                        </h2>

                        <div className="flex items-center text-sm text-gray-500 gap-6 mb-2">
                            <span className="flex items-center gap-1">
                                <ChartBar className="h-4 w-4" />
                                {post.category.map((item, i) => (
                                    <span key={i}>{item}{i < post.category.length - 1 ? ', ' : ''}</span>
                                ))}
                            </span>
                            <span className="flex items-center gap-1">
                                <CalendarDays className="h-4 w-4" />
                                {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                        </div>

                        <p className="text-gray-700 mb-3">
                            {post.content.substring(0, 160)}...
                        </p>

                        <Link href={`/blog/${post._id}`}>
                            <span className="text-blue-500 font-medium hover:underline">Read more →</span>
                        </Link>

                    </article>
                ))}
            </section>
        </main>
    );
};

export default BlogContents;
