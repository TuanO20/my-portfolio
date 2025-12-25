"use client";

import React from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

export const PortfolioPage = () => {
    return (
        <div className="min-h-screen bg-[#fffdf5] text-black overflow-x-hidden selection:bg-black selection:text-[#fffdf5]">
            {/* BACKGROUND DECORATION */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-dot-pattern"></div>
            </div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
                <HeroSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
};
