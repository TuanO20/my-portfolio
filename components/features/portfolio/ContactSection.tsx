"use client";

import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NeoButton } from './NeoButton';
import { NeoSocialButton } from './NeoSocialButton';
import { SOCIALS } from '@/lib/constants';

const Card = ({ children, className = "", color = "bg-white" }: {
    children: React.ReactNode;
    className?: string;
    color?: string;
}) => (
    <div className={cn(
        "border-3 border-black neo-shadow p-6",
        color,
        className
    )}>
        {children}
    </div>
);



export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-yellow-300 transform rotate-3 border-3 border-black neo-shadow-lg"></div>
                <Card className="relative transform -rotate-2 bg-white max-w-2xl mx-4 md:mx-auto">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
                        Ready to Build the Future?
                    </h2>
                    <p className="font-medium text-gray-600 mb-8 font-hand text-2xl">
                        I am currently available for freelance work and full-time positions.
                        <br />Send me a message and let&apos;s create something epic.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                        <NeoButton
                            primary
                            icon={Mail}
                            iconPosition="left"
                            color="bg-green-400"
                            className="text-xl"
                            href={`mailto:${SOCIALS[2].link}`}
                        >
                            {SOCIALS[2].link}
                        </NeoButton>

                        <div className="flex gap-4 justify-center">
                            <NeoSocialButton href={SOCIALS[1].link} icon={Linkedin} />
                            <NeoSocialButton href={SOCIALS[0].link} icon={Github} />
                        </div>
                    </div>
                </Card>
            </div>

            <footer className="mt-24 font-heading font-bold text-gray-400">
                © 2026 Tommy Dev. Practice makes perfect.
            </footer>
        </section>
    );
};
