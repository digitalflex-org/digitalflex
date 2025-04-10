const valuePropositions = [
    {
        title: "Reduce Your Marketing Costs by 30%",
        description: "Optimize your marketing strategies with our expert solutions, leading to significant cost savings.",
        icon: "💰", 
    },
    {
        title: "Enhance Your Business Value by 20%",
        description: "Our tailored digital marketing approaches are designed to boost your business's market value.",
        icon: "📈",
    },
    {
        title: "Achieve Lasting Results with Improved Metrics",
        description: "Benefit from sustained growth through enhanced metrics and analytics, ensuring long-term success.",
        icon: "📊", 
    },
];

const ElevateYourBrandSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-[#f4f4f4]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#1d3c6a] mb-8">Elevate Your Brand</h2>
                <p className="text-lg text-[#333333] mb-12">
                    Digital Flex offers value in 3 key areas to help your business thrive in the digital landscape.
                </p>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
                    {valuePropositions.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                            <div className="text-4xl mb-6 text-[#ff6f3c]">{item.icon}</div>
                            <h3 className="text-2xl font-semibold text-[#1d3c6a] mb-4">{item.title}</h3>
                            <p className="text-[#333333]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ElevateYourBrandSection;
