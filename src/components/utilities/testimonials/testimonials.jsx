'use client';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './style.css';


const testimonials = [
    {
        name: 'Honey',
        feedback:
            'Digital Flex helped us optimize our marketing budget, resulting in more leads and increased sales. Their strategies worked wonders for our real estate business!',
    },
    {
        name: 'Jonathan',
        feedback:
            'Thanks to Digital Flex, we overcame ad restrictions and saw successful campaigns that boosted sales and improved our online presence. Highly recommended!',
    },
    {
        name: 'Lynn',
        feedback:
            'With Digital Flex, we saw a 300% increase in clients and 1,200 new leads. Their strategy lowered costs and boosted conversions. Results speak for themselves!',
    },
    {
        name: 'Siti Aminah',
        feedback:
            'Digital Flex’s strategies delivered results in just two weeks. We saw increased engagement, foot traffic, and online orders. Truly effective marketing!',
    },
];


const TestimonialSlider = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4"
        >
            <section className="bg-transparent py-2 px-6 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">
                        Testimonials
                    </h2>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        className="pb-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 rounded-lg shadow-lg mx-4 h-full flex flex-col justify-between">
                                    <div>
                                        <p className="text-gray-600 italic mb-4">
                                            "{testimonial.feedback}"
                                        </p>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            - {testimonial.name}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom pagination container */}
                    <div className="custom-swiper-pagination mt-6 flex justify-center"></div>

                </div>
            </section>
        </motion.div>
    );
};

export default TestimonialSlider;
