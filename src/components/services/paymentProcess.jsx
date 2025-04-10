const paymentFeatures = [
    {
        title: "Multiple Payment Options",
        description: "Choose from a variety of payment methods including credit cards, debit cards, and more for a seamless experience with Digital Flex.",
        icon: "💳", 
    },
    {
        title: "Secure Transactions",
        description: "Our platform uses top-notch security measures to ensure all your transactions are safe and protected.",
        icon: "🔒",
    },
    {
        title: "Flexible Payment Plans",
        description: "Opt for monthly or annual subscriptions with Digital Flex to suit your needs, and easily manage your billing cycle.",
        icon: "📅",
    },
];

const PaymentSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-[#f4f4f4]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#1d3c6a] mb-8">Secure and Convenient Payments</h2>
                <p className="text-lg text-[#333333] mb-12">
                    Experience a seamless payment process with Digital Flex, offering multiple options, secure transactions, and flexible plans.
                </p>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
                    {paymentFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                            <div className="text-4xl mb-6 text-[#ff6f3c]">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold text-[#1d3c6a] mb-4">{feature.title}</h3>
                            <p className="text-[#333333]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentSection;
