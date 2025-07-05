import TestimonialSlider from '../../components/utilities/testimonials/testimonials';
import './homeSection.css';
import TailoredSolutionsSection from './tailoredService';
import WhyChoose from './whyChoose';

export const metadata = {
    title: "Digital Flex | Home",
    description: "Digital Flex is a leading digital marketing agency specializing in Google Business Profile management and innovative digital marketing strategies.",
    keywords: "Digital Flex, digital marketing, Google Business Profile, SEO, online visibility, business growth, website development, social media marketing, content creation",
    authors: [{ name: "Digital Flex", url: "https://www.digitalflex.org" }],
}


const HomeSection = () => {
    return (

        <div className="z-10 bg-[#f4f4f4] w-full pt-5 md:px-12 mx-5 pb-10">
            <WhyChoose />
            <div className='mt-2'>
                <TailoredSolutionsSection />
            </div>
            <div className='pt-2'>
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default HomeSection;
