"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface NeoButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    icon?: React.ElementType;
    iconPosition?: 'left' | 'right';
    color?: string;
    className?: string;
    href?: string;
    download?: boolean;
    onClick?: () => void;
}

export const NeoButton = ({
    children,
    primary = false,
    icon: Icon,
    iconPosition = 'right',
    color = "bg-yellow-300",
    className = "",
    onClick,
    href,
    download
}: NeoButtonProps) => {
    const IconComponent = Icon ? (
        <Icon className={cn(
            "w-5 h-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:rotate-12",
            primary ? 'text-purple-300' : 'text-black'
        )} />
    ) : null;

    const content = (
        <>
            {/* Layer 1: Deep Shadow (Static Anchor) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black translate-x-2 translate-y-2 border-3 border-black rounded-lg"></div>

            {/* Layer 2: Middle Color Plate (The 'Glitch' Reveal) */}
            <div className={cn(
                "absolute top-0 left-0 w-full h-full border-3 border-black rounded-lg transition-transform duration-200 ease-out z-0 translate-x-1 translate-y-1 group-hover:translate-x-3 group-hover:translate-y-3 group-active:translate-x-1 group-active:translate-y-1",
                color
            )}></div>

            {/* Layer 3: Top Content (The Button) */}
            <div className={cn(
                "relative z-10 font-heading font-bold text-lg px-8 py-4 border-3 border-black rounded-lg flex items-center justify-center gap-3 transition-all duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:translate-y-1",
                primary ? 'bg-black text-white' : 'bg-white text-black'
            )}>
                {iconPosition === 'left' && IconComponent}
                <span className="relative z-10 tracking-wide">{children}</span>
                {iconPosition === 'right' && IconComponent}

                {/* Layer 4: Internal Shine Effect (Primary Only) */}
                {primary && (
                    <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
                        <div className="absolute top-0 -left-full w-[50%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-700 ease-in-out"></div>
                    </div>
                )}
            </div>
        </>
    );

    const commonClasses = cn("group relative inline-block focus:outline-none touch-manipulation min-w-[180px]", className);

    if (href) {
        return (
            <a
                href={href}
                className={commonClasses}
                onClick={onClick}
                target="_blank"
                download={download}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={commonClasses}
        >
            {content}
        </button>
    );
};
