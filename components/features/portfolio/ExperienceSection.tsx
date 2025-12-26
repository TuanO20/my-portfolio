"use client";

import React from 'react';
import { Briefcase, GraduationCap, Award, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EXPERIENCE, EDUCATION, AWARDS } from '@/lib/constants';

const SectionTitle = ({ title, subtitle, icon: Icon, color = "bg-yellow-300" }: {
    title: string;
    subtitle?: string;
    icon?: React.ElementType;
    color?: string;
}) => (
    <div className="mb-12 relative inline-block">
        <div className={cn(
            "absolute -top-9 -left-2 md:-left-6 w-12 h-12 border-3 border-black rounded-full flex items-center justify-center z-10 transform -rotate-12",
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

export const ExperienceSection = () => {
    return (
        <section id="experience" className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Working Experience */}
            <div>
                <SectionTitle
                    title="Experience"
                    subtitle="Where I've been cooking..."
                    icon={Briefcase}
                    color="bg-purple-300"
                />

                <div className="space-y-8 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-6 top-4 bottom-4 w-1 bg-black rounded-full"></div>

                    {EXPERIENCE.map((job, i) => (
                        <div key={i} className="relative pl-12 md:pl-16 group">
                            {/* Timeline Dot */}
                            <div className={cn(
                                "absolute left-0 md:left-2 top-0 w-8 h-8 md:w-8 md:h-8 border-3 border-black rounded-full z-10 group-hover:scale-125 transition-transform duration-200",
                                job.color
                            )}></div>

                            <Card className="hover:translate-x-2 hover:bg-blue-100 transition-all duration-200">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <h3 className="text-2xl font-heading font-bold">{job.role}</h3>
                                    <span className="font-heading font-black text-sm bg-black text-white px-3 py-1 rounded-full border-2 border-black">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="font-bold text-lg text-gray-700 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                    {job.company}
                                </p>
                                <div className="text-gray-700 mb-4 leading-relaxed font-medium">
                                    <ul className="list-disc list-outside ml-5 space-y-2">
                                        {Array.isArray(job.description) ? (
                                            job.description.map((desc, idx) => (
                                                <li className="text-justify" key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
                                            ))
                                        ) : (
                                            <li dangerouslySetInnerHTML={{ __html: job.description as string }} />
                                        )}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        job.tech.map(t => (
                                            <span key={t} className="text-xs font-black uppercase tracking-wider px-2 py-1 bg-gray-100 border-2 border-black rounded-md">
                                                {t}
                                            </span>
                                        ))
                                    }
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education & Awards */}
            <div className="space-y-16">

                {/* Education */}
                <div>
                    <SectionTitle
                        title="Education"
                        subtitle="Where I learned stuff..."
                        icon={GraduationCap}
                        color="bg-blue-300"
                    />
                    <div className="space-y-6">
                        {EDUCATION.map((edu, i) => (
                            <div key={i} className="bg-white border-3 border-black p-0 neo-shadow relative overflow-hidden group hover:translate-x-2 hover:bg-blue-100 transition-all duration-300 cursor-default">
                                {/* Expanding Bar */}
                                <div className="h-full w-4 group-hover:w-6 transition-all duration-300 absolute left-0 top-0 bottom-0 bg-blue-300 border-r-3 border-black"></div>

                                <div className="p-6 pl-10 pr-12 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-heading font-bold group-hover:underline decoration-2 decoration-black underline-offset-2 transition-all">{edu.degree}</h3>
                                            <p className="text-gray-600 font-medium group-hover:text-black transition-colors">{edu.school}</p>
                                            <p className='text-gray-600 font-medium group-hover:text-black transition-colors'>{edu.year}</p>
                                        </div>
                                        {/* Reveal Arrow */}
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black" />
                                    </div>
                                    <p className="text-sm mt-2 text-gray-500 group-hover:text-gray-700 transition-colors">{edu.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards */}
                <div>
                    <SectionTitle
                        title="Honors"
                        subtitle="Shiny things I won!"
                        icon={Award}
                        color="bg-orange-300"
                    />
                    <div className="grid grid-cols-1 gap-4">
                        {AWARDS.map((award, i) => (
                            <div key={i} className={cn(
                                "flex items-center gap-4 p-4 border-3 border-black neo-shadow-hover transition-all cursor-default",
                                award.color
                            )}>
                                <div className="bg-white border-3 border-black p-2 rounded-full">
                                    <Star className="w-6 h-6 text-black fill-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-black text-lg leading-tight">{award.title}</h3>
                                    <p className="font-hand font-bold text-xl opacity-75">{award.org} • {award.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
