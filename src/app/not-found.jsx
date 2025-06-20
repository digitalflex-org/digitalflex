import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className='flex flex-col items-center h-[350px] m-auto'>
            <h2 className='text-2xl'>Not Found</h2>
            <p>Could not find requested resource</p>

            <Link className='text-[#1d3c6a] flex gap-2' href='/'> <ArrowLeft className='text-[#1d3c6a]' /> Return Home</Link>


        </div>
    );
}
