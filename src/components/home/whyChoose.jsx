'use client';
import { Poppins } from "next/font/google";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['600'],
    display: 'swap',
    variable: '--font-poppins'
});

const reasons = [
    { title: "Our Promise", description: "Committed to delivering impactful results that drive your business forward." },
    { title: "Our Strategy", description: "Merging innovative approaches with expert insights to maximize your digital footprint." },
];


const WhyChoose = () => {
    const ref = useRef(null);
    const isHeadingInView = useInView(ref, { once: true })
    return (
        <div>
            <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isHeadingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h2 className={`text-header text-center ${poppins.className}`}>Why choose us?</h2>
                <div className=''>
                    <p className="text-black p-5 text-center">At Digital Flex we specialize in enhancing your online visibility through meticulous Google Business Profile management and innovative digital marketing strategies. Our customized solutions aim to engage customers, improve brand perception, and ultimately expand your business reach in today's competitive landscape.</p>
                </div>
            </motion.div>
            <div className='w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="card w-full max-w-sm bg-white p-5 rounded-lg shadow-md mx-auto"
                        >
                            <div key={index} className="card w-full max-w-sm bg-white p-5 rounded-lg shadow-md mx-auto">
                                <h2 className="text-xl text-center font-semibold mb-2">{reason.title}</h2>
                                <p className="text-black text-center">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChoose;