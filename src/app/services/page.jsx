import FAQSection from '@/components/services/faq';
import PaymentSection from '@/components/services/paymentProcess';
import ElevateYourBrandSection from '@/components/services/valueProp';
import Image from 'next/image';  // Optional, for images if needed

const services = [
    {
        title: "Bespoke Website Development",
        description: "We create stunning websites tailored to your brand’s identity, ensuring optimal performance and user experience.",
        icon: "🌐",
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
                    <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
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
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                                <div className="text-4xl mb-6 text-[#ff6f3c]">{service.icon}</div>
                                <h3 className="text-2xl font-semibold text-[#333333] mb-4">{service.title}</h3>
                                <p className="text-[#333333]">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-[#1d3c6a] text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl mb-8">Let us help you create a compelling digital strategy and elevate your online presence.</p>
                <button className="bg-[#ffeb3b] text-[#333333] px-6 py-3 rounded-lg font-semibold hover:bg-[#f29c11] transition">
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