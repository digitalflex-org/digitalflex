'use client';
import { motion, useInView } from "framer-motion";
const coreValues = [{
    title: "Providing Value",
    description: "Digital Flex offers significant value by allowing businesses to focus on operations while we manage their online presence. Through our expert business profile management, we ensure your brand image is professional and consistent, while your reputation remains untarnished. Our tailored solutions, backed by data-driven results, ensure that your business gains visibility and credibility."
}
];

const MissionVisionValues = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission, Vision & Values</h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                        At Digital Flex, everything we do is driven by purpose, fueled by innovation, and grounded in values that build lasting partnerships.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {/* Mission */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h3>
                            <p className="text-gray-600">
                                To empower businesses with digital tools and strategies that boost visibility, drive engagement, and foster growth in a competitive online world.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Vision</h3>
                            <p className="text-gray-600">
                                To become a trusted digital partner for brands seeking meaningful online impact through tailored marketing and innovative web solutions.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                                {coreValues[0].title}
                            </h3>
                            <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                <p>{coreValues[0].description}</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div >
        </section >
    );
};

export default MissionVisionValues;