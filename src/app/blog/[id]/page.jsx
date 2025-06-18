'use client';
import { api } from '@/lib/axios';
import { ChartBarIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const BlogContent = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!id) return;

        const fetchPost = async () => {
            try
            {
                const { data } = await api.get(`/blog/blog?identifier=${id}`);
                setPost(data.blogPost);
            } catch (err)
            {
                setError('Error fetching blog post: ' + err.message);
            }
        };

        fetchPost();
    }, [id]);

    if (error)
    {
        console.log('error fetching blogpost', error)
        toast.error('Error Fetching post')
    }

    if (!post)
    {
        return <p>Loading blog post...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div key={post._id} className="flex flex-col bg-amber-50 p-6 rounded-md shadow-sm">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h2>

                {post.imageUrl && (
                    <div className="mb-4">
                        <Image
                            src={post.imageUrl}
                            width={800}
                            height={450}
                            className="rounded-md"
                            alt={`Image for ${post.title}`}
                        />
                    </div>
                )}

                <div className="flex gap-4 text-sm text-gray-600 mb-4 flex-wrap">
                    <p className="flex items-center gap-1">
                        <ChartBarIcon className="h-4 w-4" />
                        {post.category?.join(', ')}
                    </p>
                    <p>
                        <span className="font-medium">Posted on</span>{' '}
                        {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                </div>

                <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>
            </div>
        </div>
    );
};

const Blog = () => {
    return (
        <div>
            <BlogContent />
        </div>
    );
};

export default Blog;
