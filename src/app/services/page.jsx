import FAQSection from '../../components/services/faq';
import PaymentSection from '../../components/services/paymentProcess';
import ElevateYourBrandSection from '../../components/services/valueProp';
import Image from 'next/image';  // Optional, for images if needed

const services = [
    {
        title: "Google Business Profile Management",
        description: "Optimize and manage your Google Business Profile to enhance local search visibility, attract customers, and improve business credibility.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width="32" height="32" fill="#004e89" >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
        )
    },
    {
        title: "Bespoke Website Development",
        description: "We create stunning websites tailored to your brand’s identity, ensuring optimal performance and user experience.",
        icon: "🌐",
    },
    {
        title: "PPC",
        description: "Maximize ROI with targeted pay-per-click campaigns that drive immediate traffic and increase conversions through Google Ads and other platforms.",
        icon: "",
    },
    {
        title: "SEO Optimization",
        description: "Our team maximizes your website’s visibility on search engines, driving organic traffic and improving rankings.",
        icon: "🔍",
    },

    {
        title: "Branding & Digital Strategy",
        description: "We craft a comprehensive digital strategy that aligns with your business goals, enhancing your online presence.",
        icon: "📈",
    },
    {
        title: "Email Marketing",
        description: "Build personalized email campaigns that drive engagement, nurture leads, and increase sales with tailored messaging and effective segmentation.",
        icon: "✉️",
    },
    {
        title: "Social Media Management",
        description: "Engage with your audience effectively across platforms with tailored social media strategies and content creation.",
        icon: "📱",
    },
];

const ServicesPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-[#004e89] text-white py-20">
                <div className="max-w-7xl mx-auto text-center">
                    {/*<h1 className="text-5xl font-extrabold mb-4">Our Services</h1>*/}
                    <h3 className='text-4xl font-extrabold mb-4'>Comprehensive Digital Marketing Solutions for Your Business</h3>
                    <p className="text-xl mb-8">We offer tailored solutions to help your business grow online and engage with your audience effectively.</p>
                    <button className="bg-[#ff6f3c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#f29c11] transition">
                        Get in Touch
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 md:px-12 bg-[#f4f4f4]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#1d3c6a] mb-12">Our Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                            >
                                <div className="text-4xl mb-6 text-[#ff6f3c] flex justify-center items-center h-12">
                                    {typeof service.icon === 'string' ? (
                                        service.icon
                                    ) : (
                                        <div className="w-8 h-8 flex justify-center items-center">{service.icon}</div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-semibold text-[#333333] mb-4">{service.title}</h3>
                                <p className="text-[#333333]">{service.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-[#004e89] text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl mb-8">Let us help you create a compelling digital strategy and elevate your online presence.</p>
                <button className="bg-[#ff6f3c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d87d23] transition">
                    Contact Us
                </button>
            </section>

            <div>
                <ElevateYourBrandSection />
            </div>
            <div>
                <PaymentSection />
            </div>
            <div>
                <FAQSection />
            </div>
        </div>
    );
};

export default ServicesPage;