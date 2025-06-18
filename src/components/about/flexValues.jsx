'use client';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Award, Compass, Star } from "lucide-react";

const FlexValues = () => {
    const values = [
        {
            title: "Future-Focused",
            description:
                "We are committed to staying ahead of the curve, constantly innovating and adapting to the ever-evolving digital landscape. Our forward-thinking approach ensures that your business is always prepared for tomorrow’s challenges.",
            icon: <Lightbulb className="w-12 h-12 text-blue-500" />,

        },
        {
            title: "Leadership",
            description:
                "We take pride in setting trends, not following them. Our leadership comes from our deep expertise, ability to drive impactful results, and inspire confidence in our clients.",
            icon: <Compass className="w-12 h-12 text-green-500" />,
        },
        {
            title: "Excellence",
            description:
                "Excellence is at the heart of everything we do. From providing top-tier customer service to delivering exceptional results, we strive for perfection and never settle for mediocrity.",
            icon: <Award className="w-12 h-12 text-yellow-500" />,
        },
        {
            title: "Xperience",
            description:
                "We prioritize providing an unparalleled experience for our clients. Every interaction, strategy, and solution is crafted with care to ensure satisfaction, long-term success, and a smooth, seamless journey.",
            icon: <Star className="w-12 h-12 text-red-500" />,
        },
    ];

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                            >
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FlexValues;
