'use client';
import React from 'react'

import BlogEditorsPage from '@/components/blog/blogEditorsPage'
import { useAuthGuard } from '@/components/utilities/hooks/useAuthGuard'
import Spinner from '@/components/spinner';


const page = () => {
    const { checking, user } = useAuthGuard(['admin', 'editor'])
    if (checking) return <Spinner />
    return (
        <div className='min-h-screen'>
            <BlogEditorsPage user={user} />
        </div>
    )
}

export default page