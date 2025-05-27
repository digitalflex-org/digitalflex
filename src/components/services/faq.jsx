'use client';
import { useState } from 'react';

const faqItems = [
    {
        question: "How can I get started with Digital Flex's marketing solutions?",
        answer: "Getting started is simple! Visit our website to fill out a consultation form, and one of our digital marketing specialists will contact you to discuss your needs and how our solutions can benefit your business.",
    },
    {
        question: "What services does Digital Flex provide?",
        answer: "Digital Flex specializes in services such as SEO, SEM, PPC, Review Editorial, Google Business Profile Management, and Social Media Management.",
    },
    {
        question: "Are there any payment options available for your services?",
        answer: "Yes, we provide various payment options including monthly and annual subscriptions through Stripe. Clients can view invoices and manage payments easily through their account.",
    },
    {
        question: "What is your process for client consultation?",
        answer: "Once you book a consultation, our team will reach out to understand your specific needs and tailor our services to meet your requirements, ensuring complete clarity throughout the process.",
    },
    {
        question: "How can I track my progress with Digital Flex?",
        answer: "You can track your progress through our client dashboard, which shows stages such as Proposed Services, Approved Services, and Acted On Services, along with notifications about updates.",
    },
    {
        question: "What should I do if I have issues with my services?",
        answer: "If you face any issues, our customer service team is available to assist you! You can contact us through our website or by phone, and we will provide prompt support to resolve any concerns.",
    },
    {
        question: "Can I upgrade my services in the future?",
        answer: "Absolutely! As your marketing needs evolve, we can work with you to expand your services, whether it’s increasing your SEO efforts or enhancing your social media strategy.",
    },
    {
        question: "What kind of guarantees do you offer on your services?",
        answer: "We provide a satisfaction guarantee on our services, ensuring that you will receive the highest quality support for your digital marketing needs, or we'll work to make it right.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (openIndex === index)
        {
            setOpenIndex(null);
        } else
        {
            setOpenIndex(index);
        }
    };

    return (
        <section className="py-16 px-6 md:px-12 bg-[#f4f4f4]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#1d3c6a] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-xl font-semibold text-[#1d3c6a]">{item.question}</h3>
                               
                                <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    &#9650; {/* Up Arrow */}
                                </span>
                            </div>
                            <div
                                className={`mt-4 text-[#333333] transition-all duration-300 max-h-0 overflow-hidden ${openIndex === index ? 'max-h-[200px] ease-in' : ''}`}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
