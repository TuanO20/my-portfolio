"use client";

import React from 'react';
import Image from 'next/image';
import { Code2, ExternalLink } from 'lucide-react';

import { cn } from '@/lib/utils';
import { PROJECTS } from '@/lib/constants';

const SectionTitle = ({ title, subtitle, icon: Icon, color = "bg-yellow-300" }: {
    title: string;
    subtitle?: string;
    icon?: React.ElementType;
    color?: string;
}) => (
    <div className="mb-12 relative inline-block">
        <div className={cn(
            "absolute -top-6 -left-2 md:-left-6 w-12 h-12 border-3 border-black rounded-full flex items-center justify-center z-10 transform -rotate-12",
            color
        )}>
            {Icon && <Icon className="w-6 h-6 text-black" />}
        </div>
        <div className="relative z-0">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase tracking-tight">
                {title}
            </h2>
            <div className={cn(
                "h-4 w-full absolute bottom-1 -z-10 border border-black border-t-0 neo-shadow opacity-100",
                color
            )}></div>
        </div>
        {subtitle && (
            <p className="font-hand text-2xl mt-2 text-gray-600 font-bold transform rotate-2">
                {subtitle}
            </p>
        )}
    </div>
);

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

export const ProjectsSection = () => {
    return (
        <section id="projects">
            <SectionTitle
                title="Typical Projects"
                subtitle="Code that actually compiles."
                icon={Code2}
                color="bg-green-300"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, i) => (
                    <div key={i} className="group relative">
                        {/* Folder Tab */}
                        <div className="absolute -top-3 left-4 w-32 h-6 bg-black border-3 border-black rounded-t-lg z-0"></div>

                        <Card className="h-full flex flex-col relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                            {/* Image Placeholder */}
                            <div className="w-full h-48 border-3 border-black mb-6 relative overflow-hidden bg-black">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain p-4"
                                />
                                {/* Overlay Stats */}
                                <div className="absolute bottom-0 right-0 bg-white border-t-3 border-l-3 border-black px-3 py-1 font-heading font-black text-sm">
                                    {project.stats}
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
                                    <h3 className="text-2xl font-heading font-black mt-1 group-hover:underline decoration-4 decoration-green-300">{project.title}</h3>
                                </div>
                                <a href={project.website} target="_blank" className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            <p
                                className="text-gray-700 font-medium mb-6 grow"
                                dangerouslySetInnerHTML={{ __html: project.description }}
                            />

                            <div className="pt-4 border-t-3 border-black/10 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs font-bold bg-gray-100 border-2 border-black rounded text-gray-700">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};
