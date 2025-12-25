"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SkillLogo = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    return <Image src={src} alt={alt} width={32} height={32} className={cn("w-6 h-6 object-contain", className)} />;
};

const SKILLS = [
    { name: "Move", color: "bg-purple-200", image: "/skills/move.svg" },
    { name: "Solidity", color: "bg-gray-300", image: "/skills/solidity.svg", className: "w-8 h-8" },
    { name: "Rust", color: "bg-orange-200", image: "/skills/rust.svg", className: "w-8 h-8" },
    { name: "TypeScript", color: "bg-blue-200", image: "/skills/typescript.svg" },
    { name: "ReactJS", color: "bg-cyan-50", image: "/skills/react.png", className: "w-8 h-8" },
    { name: "NextJS", color: "bg-gray-200", image: "/skills/next-js.svg" },
    { name: "Hardhat", color: "bg-yellow-100", image: "/skills/hardhat.png", className: "w-8 h-8" },
    { name: "Thirdweb", color: "bg-purple-300", image: "/skills/thirdweb-icon.svg" },
    { name: "TailwindCSS", color: "bg-cyan-100", image: "/skills/tailwind.png" }
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="w-full overflow-hidden py-12 border-y-3 border-black bg-white -mx-4 md:-mx-8 px-4 md:px-8 transform -rotate-1 shadow-lg">
            <div className="flex animate-marquee whitespace-nowrap" style={{ animationDuration: "15s" }}>
                {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
                    <div
                        key={i}
                        className={cn(
                            "inline-flex items-center gap-4 pl-6 pr-10 py-4 border-3 border-black rounded-full font-heading font-bold text-xl neo-shadow hover:scale-105 transition-transform cursor-default bg-white mr-4",
                            skill.color
                        )}
                    >
                        <SkillLogo src={skill.image} alt={skill.name} className={skill.className} />
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
};
