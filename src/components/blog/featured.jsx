'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/lib/axios';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const FeaturedSection = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeaturedPosts();
    }, []);

    async function fetchFeaturedPosts() {
        try
        {
            const { data } = await api.get('blog/featured');
            if (data.success)
            {
                setFeaturedPosts(data.featuredPost);
            } else
            {
                console.warn("Unexpected response structure:", data);
                setFeaturedPosts([]);
            }
        } catch (error)
        {
            console.error("Error fetching blogs:", error.message);
            setFeaturedPosts([]);
        } finally
        {
            setLoading(false);
        }
    }

    return (
        <section className="bg-white rounded-lg shadow-md overflow-hidden my-4 flex justify-center">
            {loading ? (
                <div className="w-full p-6 text-[#333333] text-center">Loading featured posts...</div>
            ) : featuredPosts.length === 0 ? (
                <div className="w-full p-6 text-[#333333] text-center">No featured posts available.</div>
            ) : (
                <Carousel className="w-full max-w-[600px] relative my-auto">
                    <CarouselContent>
                        {featuredPosts.map((post) => (
                            <CarouselItem key={post._id} className="p-4">
                                <div className="rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                    {post.imageUrl && (
                                        <div className="w-full h-[200px]">
                                            <Image
                                                src={post.imageUrl || 'https://archive.org/download/placeholder-image/placeholder-image.jpg'}
                                                alt={`Image for ${post.title}`}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col justify-center bg-white">
                                        <p className="text-sm text-gray-500 mb-2">
                                            {post.category} • {post.date}
                                        </p>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
                                        <p className="text-gray-600 mb-6">{post.description}</p>
                                        <Link href={`/blog/${post.slug || post._id}`}>
                                            <span className="text-blue-600 font-semibold hover:underline">
                                                Read Full Article →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </section>
    );
};

export default FeaturedSection;
