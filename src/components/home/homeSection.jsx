import TestimonialSlider from '../../components/utilities/testimonials/testimonials';
import './homeSection.css';

export const metadata = {
    title: "Digital Flex | Home",
    description: "Digital Flex is a leading digital marketing agency specializing in Google Business Profile management and innovative digital marketing strategies.",
    keywords: "Digital Flex, digital marketing, Google Business Profile, SEO, online visibility, business growth, website development, social media marketing, content creation",
    authors: [{ name: "Digital Flex", url: "https://www.digitalflex.org" }],
}

const reasons = [
    { title: "Our Promise", description: "Committed to delivering impactful results that drive your business forward." },
    { title: "Our Strategy", description: "Merging innovative approaches with expert insights to maximize your digital footprint." },
];

const HomeSection = () => {
    return (

        <div className="z-10 bg-gray-200 w-full pt-5 md:px-12 mx-5 pb-10 rounded-lg">
            <div className="">
                <h2 className="text-header text-center">Why choose us?</h2>
                <div className=''>
                    <p className="text-black p-5 text-center">At Digital Flex we specialize in enhancing your online visibility through meticulous Google Business Profile management and innovative digital marketing strategies. Our customized solutions aim to engage customers, improve brand perception, and ultimately expand your business reach in today's competitive landscape.</p>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
                        {reasons.map((reason, index) => (
                            <div key={index} className="card w-full max-w-sm bg-white p-5 rounded-lg shadow-md mx-auto">
                                <h2 className="text-xl text-center font-semibold mb-2">{reason.title}</h2>
                                <p className="text-black text-center">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-6'>
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default HomeSection;
