'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    {
        name: 'Careers',
        href: '/careers',
        children: [
            { name: 'Applicants', href: '/applicants' },
            { name: 'Blog', href: '/blog' },
        ],
    },
    { name: 'Contact', href: '/contact' },
];

const Nav = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const isActive = (href) => pathname === href;
    const closeToggle = (name) => {
        setDropdownOpen(prev => prev = null);
    }

    const toggleDropdown = (name) => {
        setDropdownOpen(prev => (prev === name ? null : name));
    };

    return (
        <nav className="bg-[#1d3c6a] text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
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
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map(({ name, href, children }) => (
                        <div key={name} className="relative">
                            <div className="flex items-center gap-1">
                                <Link
                                    href={href}
                                    className={`hover:text-[#ff6f3c] transition-colors ${isActive(href) ? 'font-semibold' : ''}`}
                                >
                                    {name}
                                </Link>
                                {children && (
                                    <button
                                        onClick={() => toggleDropdown(name)}
                                        className="text-white hover:text-[#ff6f3c] transition"
                                        aria-label={`Toggle ${name} submenu`}
                                    >
                                        {dropdownOpen === name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                )}
                            </div>

                            {/* Dropdown Menu */}
                            {children && dropdownOpen === name && (
                                <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40 z-10">
                                    {children.map(child => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className={`block px-4 py-2 hover:bg-[#ff6f3c] hover:text-white transition ${isActive(child.href) ? 'font-semibold' : ''
                                                }`}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/appointment"
                        className="ml-2 bg-[#ff6f3c] text-white px-4 py-2 rounded-xl hover:bg-[#d87d23] transition"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                    aria-label="Toggle Navigation"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden bg-[#1d3c6a] px-4 pb-4 space-y-3">
                    {navigation.map(({ name, href, children }) => (
                        <div key={name}>
                            <div className="flex items-center justify-between">
                                <Link
                                    href={href}
                                    className="block py-2 hover:text-[#ff6f3c] transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {name}
                                </Link>
                                {children && (
                                    <button
                                        onClick={() => toggleDropdown(name)}
                                        className="text-white"
                                        aria-label={`Toggle ${name} submenu`}
                                    >
                                        {dropdownOpen === name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                )}
                            </div>
                            {children && dropdownOpen === name && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {children.map(child => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className="block text-sm hover:text-[#ff6f3c] transition"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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
