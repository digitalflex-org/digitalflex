import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Phone, Mail, Clock, MapPin} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1d3c6a] text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and About */}
                <div>
                    <Link href="/" className="flex flex-col items-center gap-2 mb-4">
                        <div className='flex items-center gap-2'>
                            <Image src="/images/Digital_Flex_Logo.png" alt="Digital Flex" width={100} height={100} />
                            <span className="text-2xl font-bold">Digital Flex</span>
                        </div>
                        <p className="text-sm text-gray-300">
                            At Digital Flex, we specialize in breathing fresh life into your digital marketing strategy, focusing on Google Business Profile management among other services. Experience the blend of professionalism and modern digital solutions.
                        </p>
                    </Link>

                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#ffeb3b]">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-[#ff6f3c]">Home</Link></li>
                        <li><Link href="/about" className="hover:text-[#ff6f3c]">About</Link></li>
                        <li><Link href="/services" className="hover:text-[#ff6f3c]">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-[#ff6f3c]">Contact</Link></li>
                        <li><Link href="/appointment" className="hover:text-[#ff6f3c]">Book Appointment</Link></li>
                    </ul>
                </div>

                {/* Social + Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#ffeb3b]">Connect with Us</h4>
                    <div className="flex  flex-col gap-4 mb-4">
                        <a href="#" className="hover:text-[#ff6f3c] flex"><Phone size={20} /> <span className='ml-2'> +1 (888) 818-3618</span></a>
                        <a href="#" className="hover:text-[#ff6f3c] flex"><Mail size={20} /> <span className='ml-2'>
                            sales@digitalflex.org</span></a>
                        <a href="#" className="hover:text-[#ff6f3c] flex"><Clock size={20} /> <span className='ml-2'>
                            Mon - Fri: 9:00am - 5:00pm</span></a>
                        <a href="#" className="hover:text-[#ff6f3c] flex"><MapPin size={20} /> <span className='ml-2'><h3 className='font-semibold'>Head quaters</h3>
                            Singapore
                            540 Sims Avenue, Sims Avenue Centre, #03-05 S387603 </span></a>
                        <a href="#" className="hover:text-[#ff6f3c] flex ml-4"><span className='ml-2'><h3 className='font-semibold'>Branch Office</h3>
                           Africa | US </span></a>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="hover:text-[#ff6f3c]"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-[#ff6f3c]"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-[#ff6f3c]"><Linkedin size={20} /></a>
                    </div>
                    {/*<p className="text-sm text-gray-300">support@digitalflex.org</p> */}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Digital Flex. All rights reserved.
            </div>
        </footer>
    );
}
