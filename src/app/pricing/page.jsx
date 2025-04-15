import Link from "next/link";

export const metadata = {
    title: "Digital Flex | Pricing",
    description: "Explore Digital Flex's transparent pricing for digital marketing,Google Business Profile Management, web hosting, SEO, PPC & more. Affordable plans tailored for businesses of all sizes. ",
    keywords: "digital marketing pricing, online marketing services, SEO pricing, PPC packages, Google Business Profile pricing, web hosting plans, email marketing cost, affordable marketing services, local SEO pricing, Digital Flex pricing"
}



const PricingPage = () => {
    const plans = [
        {
            name: "Essential",
            description: "Stay on top of your reviews with simple responses to keep your profile looking great!",
            price: "$189",
            features: ["Profile Optimization", "Review Management", "Posts & Updates", "Insights & Analytics"],
            highlighted: false,
            paymentLink: process.env.NEXT_PUBLIC_ESSENTIAL_PLAN_PAYMENT_LINK
        },
        {
            name: "Growth",
            description: "Engage with your customers and encourage feedback to build a stronger online presence.",
            price: "$489",
            features: ["Profile Optimization", "Review Management", "Posts & Updates", "Insights & Analytics", "Q&A Management", "Photos & Video Updates", "Business Attributes", "Booking & Appointment", "Products & Service Updates"],
            highlighted: true,
            paymentLink: process.env.NEXT_PUBLIC_GROWTH_PLAN_PAYMENT_LINK
        },
        {
            name: "Premium",
            description: "Let us handle everything, from review responses to building a glowing reputation for you!",
            price: "$989",
            features: ["Profile Optimization", "Review Management", "Posts & Updates", "Insights & Analytics", "Q&A Management", "Photos & Video Updates", "Business Attributes", "Booking & Appointment", "Product & Services Updates", "Special Offers & Discounts."],
            highlighted: false,
            paymentLink: process.env.NEXT_PUBLIC_PREMIUM_PLAN_PAYMENT_LINK
        },
    ];

    return (
        <section className="min-h-screen bg-[#f4f4f4] text-[#333333] py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing Plans</h2>
                <p className="text-[#333333] mb-16 text-lg">
                    Flexible Pricing for Tailored Google Business Profile Management
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl p-8 shadow-xl border transition-transform duration-300 transform hover:scale-105 ease-in-out ${plan.highlighted
                                ? "bg-[#ff6f3c] text-white border-[#f29c11]"
                                : "bg-white text-[#333333] border-[#f4f4f4]"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#004e89] text-white px-4 py-2 rounded-lg text-lg font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

                            <p
                                className={`text-lg mb-6 ${plan.highlighted ? "text-white" : "text-[#004e89]"
                                    }`}
                            >
                                {plan.description}
                            </p>
                            <p
                                className={`text-4xl font-bold mb-6 ${plan.highlighted ? "text-white" : "text-[#004e89]"
                                    }`}
                            >
                                {plan.price}
                            </p>
                            <ul className="space-y-3 text-sm mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="text-[#f29c11] font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${plan.highlighted
                                    ? "bg-[#d87d23] hover:bg-[#f29c11] shadow-lg"
                                    : "bg-[#004e89] text-white hover:bg-[#1d3c6a] shadow-md"
                                    }`}
                            >
                                <Link href={plan.paymentLink}> {plan.highlighted ? "Get Started" : "Select Plan"}</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPage;


