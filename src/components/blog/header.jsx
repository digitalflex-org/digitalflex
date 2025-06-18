import React from 'react'
import Image from 'next/image'
import Card from '../utilities/card/card'


function BlogHeader() {
    return (
        <div className='bg-[#f4f4f4]'>
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex justify-center items-center m-auto bg-accent-foreground rounded-full ">
                <Image
                    src='/images/Digital_Flex_Logo.png'
                    alt="Digital Flex logo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <div className="text-center ">
                <h1 className="text-2xl font-bold text-gray-800">Digital Flex</h1>
                <p className="text-gray-600">Providing you with a digital profile that stands out</p>
            </div>
        </div>
    )
}

export default BlogHeader
