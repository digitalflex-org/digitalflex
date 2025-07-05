'use client';
import { Poppins } from 'next/font/google';
import { motion, useInView } from 'framer-motion';



import Image from 'next/image';
import { Banknote, Globe, Mail, SearchCheck, Server, UserRoundCheck } from 'lucide-react'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['600'],
    display: 'swap',
    variable: '--font-poppins'
});

const services = [
    {
        title: 'Bespoke Website Development',
        description: 'Create stunning websites tailored to the unique identity of your brand, ensuring optimal performance.',
        icon: Globe,
        isComponent: true,
    },
    {
        title: 'Secure Hosting Services',
        description: 'Experience reliability with our top-notch hosting solutions and 24/7 technical assistance.',
        icon: Server,
        isComponent: true,
    },
    {
        title: 'Local SEO Enhancement',
        description: 'Maximize your visibility on search engines for local audiences, driving more clients to your doorstep.',
        icon: SearchCheck,
        isComponent: true,
    },
    {
        title: 'Custom Professional Emails',
        description: 'Enhance your professionalism with personalized email addresses reflecting your brand.',
        icon: Mail,
        isComponent: true,
    },
    {
        title: 'Streamlined Payment Integration',
        description: 'Seamlessly connect with various payment platforms to facilitate smooth transactions.',
        icon: Banknote,
        isComponent: true,
    },
    {
        title: 'User-Friendly Booking System',
        description: 'Allow your clients to effortlessly schedule appointments through your website, enhancing engagement.',
        icon: UserRoundCheck,
        isComponent: true,
    },
];

export default function TailoredSolutionsSection() {
    return (
        <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-3xl font-extrabold text-[#333333] text-center mb-12 ${poppins.className}`}>
                        Tailored Digital Solutions for Your Brand
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mt-4"
                                >
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4 ">
                                        {service.isComponent ? (
                                            <service.icon size={24} />
                                        ) : (
                                            <Image className='text-[#004e89]' src={service.icon} alt={service.title} width={24} height={24} />
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm">{service.description}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}