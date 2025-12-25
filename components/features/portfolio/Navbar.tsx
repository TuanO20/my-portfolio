"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NeoButton } from './NeoButton';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? 'py-2 px-4' : 'py-6 px-4 md:px-12'
        )}>
            <div className={cn(
                "max-w-7xl mx-auto flex justify-between items-center",
                scrolled ? 'bg-white border-3 border-black neo-shadow p-3 rounded-full' : ''
            )}>
                <div className="flex items-center gap-2 ml-4">
                    <Image
                        src="/skills/tommy_logo.png"
                        alt="TommyDev Logo"
                        width={100}
                        height={100}
                        className="w-20 h-20 object-contain"
                    />
                    <span className={cn("font-heading font-bold text-xl", scrolled ? 'hidden md:block' : '')}>TommyDev.</span>
                </div>

                <div className="hidden md:flex gap-8 font-heading font-bold text-lg">
                    {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:underline decoration-4 decoration-yellow-400 underline-offset-4"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className={scrolled ? 'scale-75 origin-right transition-transform hidden md:block' : 'hidden md:block'}>
                        <NeoButton
                            className="min-w-fit"
                            icon={ArrowRight}
                            color="bg-yellow-300"
                        >
                            Let&apos;s Talk
                        </NeoButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 border-3 border-black bg-yellow-300 neo-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b-3 border-black p-4 flex flex-col gap-4 md:hidden neo-shadow animate-in slide-in-from-top-2">
                    {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-heading font-bold text-xl py-2 border-b-2 border-gray-100 hover:bg-gray-50 px-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <NeoButton
                        className="w-full justify-center"
                        icon={ArrowRight}
                        color="bg-yellow-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Let&apos;s Talk
                    </NeoButton>
                </div>
            )}
        </nav>
    );
};
