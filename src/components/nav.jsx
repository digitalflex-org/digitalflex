'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-[#1d3c6a] text-white sticky top-0 z-40 shadow-md">
            <div className="max-w-7xl max-h-[85px] mx-auto px-4 py-4 flex justify-between items-center">
                {/* company Logo & Name */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/Digital_Flex_Logo.png"
                        alt="Digital Flex Logo"
                        width={80}
                        height={30}
                        className="object-contain"
                    />
                    <span className="text-2xl font-bold">Digital Flex</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className="hover:text-[#ff6f3c] transition-colors"
                        >
                            {name}
                        </Link>
                    ))}
                    <Link
                        href="/appointment"
                        className="ml-2 bg-[#ff6f3c] text-white px-4 py-2 rounded-xl hover:bg-[#d87d23] transition"
                    >
                        Book Appointment
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Navigation"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden bg-[#1d3c6a] px-4 pb-4 space-y-2">
                    {navLinks.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className="block py-2 hover:text-[#ff6f3c] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            {name}
                        </Link>
                    ))}
                    <Link
                        href="/appointment"
                        className="block text-center bg-[#ff6f3c] px-4 py-2 rounded-xl hover:bg-[#d87d23] transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Book Appointment
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;
