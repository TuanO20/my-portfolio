"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface NeoSocialButtonProps {
    icon: React.ElementType;
    href: string;
    className?: string;
}

export const NeoSocialButton = ({
    icon: Icon,
    href,
    className = ""
}: NeoSocialButtonProps) => {
    return (
        <a
            href={href}
            className={cn("group relative inline-block focus:outline-none touch-manipulation w-14 h-14", className)}
            target="_blank"
        >
            {/* Layer 1: Deep Shadow (Static Anchor) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black translate-x-1 translate-y-1 border-3 border-black rounded-lg"></div>

            {/* Layer 2: Top Content (The Button) */}
            <div className="relative z-10 w-full h-full bg-white border-3 border-black rounded-lg flex items-center justify-center transition-all duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
                <Icon className="w-6 h-6 text-black transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </div>
        </a>
    );
};
