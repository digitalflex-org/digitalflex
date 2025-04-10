const MissionVisionValues = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
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
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3">Our Core Values</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            <li>Innovation & Creativity</li>
                            <li>Client-Centric Approach</li>
                            <li>Integrity & Transparency</li>
                            <li>Data-Driven Results</li>
                            <li>Long-Term Partnerships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;