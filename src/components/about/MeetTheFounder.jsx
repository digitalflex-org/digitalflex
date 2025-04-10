import Image from 'next/image';
import Norh from '@public/images/norh_sharif.png';

const foundersBio = [
    {
        name: "Norh Sharif",
        title: "Founder & CEO",
        description:
            "the founder of Digital Flex, and I bring over a decade of experience in banking sales, business consulting, marketing, and retail sales across Southeast Asia. My journey began in Singapore, where I had the opportunity to work with top brands in marketing and strategy. Having led marketing efforts and strategies in industries ranging from beauty to real estate to insurance to E-commerce, I’ve now brought my expertise to Africa, Canada and the United States. My focus is to help SMEs navigate the complexities of online reputation management and digital marketing.",
        personalNote:
            `"My journey has been driven by a belief that success is built on relationships, integrity, and a willingness to adapt. With the right mindset and support, your business can reach new heights. I’m here to guide you, help you grow, and open doors for local and international opportunities. Let’s achieve greatness together!"`,
    },
];

const MeetTheFounder = () => {
    return (
        <section className="bg-gray-100 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Founder Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={Norh}
                        alt="Norh Sharif - Founder of Digital Flex"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <div className=''>
                        <h2 className="text-xl text-background font-semibold mt-4 text-center md:text-center">{foundersBio[0].name}</h2>
                        <p className="text-gray-600 text-center md:text-center">{foundersBio[0].title}</p>
                    </div>
                </div>

                {/* Founder Bio */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Founder</h2>
                    <div>
                        {foundersBio.map((founder, index) => (
                            <article key={index}>
                                <p className="text-gray-600 mb-4">
                                    <span className="font-semibold text-gray-800">{founder.name}</span>, {founder.description}
                                </p>
                                <p className="text-gray-600 italic">{founder.personalNote}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetTheFounder;
