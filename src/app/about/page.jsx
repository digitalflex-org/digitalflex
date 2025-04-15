import Image from "next/image";
import about from "../../assets/aboutus.jpg";
import MissionVisionValues from "../../components/about/MissionVision";
import MeetTheFounder from "../../components/about/MeetTheFounder";
import FlexValues from "../../components/about/flexValues";
import TestimonialSlider from "../../components/utilities/testimonials/testimonials";




export const metadata = {
    title: "Digital Flex | About",
    description: "Learn more about Digital Flex, a leading digital marketing agency specializing in Google Business Profile management and innovative digital marketing strategies.",
    keywords: "Digital Flex, digital marketing, Google Business Profile, SEO, online visibility, business growth, website development, social media marketing, content creation",
    authors: [{ name: "Digital Flex", url: "https://www.digitalflex.org" }],

}

const AboutPage = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <Image
                            src={about}
                            alt="About Digital Flex"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                        
                    </div>
                    {/* Content Section */}
                    <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Digital Flex</h2>
                        <p className="text-gray-600 mb-4">
                            Digital Flex empowers businesses to thrive in the digital landscape. Specializing in Google Business Profile management and comprehensive digital marketing solutions, we tailor our services to meet your unique needs, ensuring a robust online presence that drives growth and engagement.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Our team of experts is dedicated to delivering impactful results through innovative strategies and personalized solutions. We believe in a customer-centric approach, working closely with you to achieve your business objectives and enhance your brand's digital footprint.
                        </p>
                        <p className="text-gray-600">
                            At Digital Flex, we stay ahead of the curve with the latest trends and technologies in digital marketing, ensuring that your business remains competitive in today's fast-paced digital world.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <MissionVisionValues />
            </div>
            <div>
                <MeetTheFounder />
            </div>
            <div>
                <FlexValues />
            </div>
            <div>
                <TestimonialSlider />
            </div>
        </div>
    );

}

export default AboutPage