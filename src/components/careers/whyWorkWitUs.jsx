export function WhyWorkWithUs() {
    const benefits = [
        {
            title: "Innovative Culture",
            desc: "Work in a forward-thinking environment where ideas thrive and creativity is celebrated.",
            icon: "💡",
        },
        {
            title: "Flexible Workstyle",
            desc: "We value balance. Choose where and how you work to be at your best.",
            icon: "🧘‍♂️",
        },
        {
            title: "Growth Opportunities",
            desc: "Upskill with training, mentorship, and real career advancement paths.",
            icon: "📈",
        },
        {
            title: "Inclusive Community",
            desc: "Be part of a diverse team that values collaboration and respect.",
            icon: "🤝",
        },
    ];

    return (
        <section className="bg-[#f4f4f4] text-[#333333] py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work With Us</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                    At DigitalFlex, we’re committed to empowering our team with the tools and culture they need to thrive.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-[#ff6f3c] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
