"use client";

import React from 'react';
import { Layers, Briefcase, Star } from 'lucide-react';
import { NeoButton } from './NeoButton';



export const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 relative">

                {/* Decorative 'Sticker' */}
                <div className="absolute -top-8 right-0 md:right-12 transform rotate-6 z-20 scale-75 md:scale-100 origin-right">
                    <div className="bg-yellow-300 text-black font-hand font-bold text-2xl px-6 py-2 border-3 border-black rounded-full neo-shadow whitespace-nowrap">
                        Hello there! I&apos;m Tommy 👋
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-black leading-[0.9] tracking-tighter">
                    CREATIVE
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 [-webkit-text-stroke:3px_black]">
                        DEVELOPER
                    </span>
                    <span className="block">& BLOCKCHAIN</span>
                    <span className="block text-4xl md:text-6xl mt-2 text-gray-500">ENGINEER</span>
                </h1>

                <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed border-l-4 border-black pl-6 py-2 bg-white/50">
                    I build <span className="bg-green-300 px-1 border-2 border-black">pixel-perfect</span> frontends and <span className="bg-purple-300 px-1 border-2 border-black">secure</span> smart contracts.
                    Turning complex logic into buttery smooth user experiences.
                </p>

                <div className="flex flex-wrap gap-6 pt-6">
                    <NeoButton primary href="#experience" icon={Layers} color="bg-purple-400">
                        View My Work
                    </NeoButton>
                    <NeoButton href="/TranAnhTuan_CV.pdf" download icon={Briefcase} color="bg-yellow-300">
                        Download CV
                    </NeoButton>
                </div>
            </div>

            <div className="lg:col-span-5 relative">
                {/* Abstract Geometric Composition */}
                <div className="relative w-full aspect-square md:aspect-4/5">
                    {/* Main Image Frame */}
                    <div className="absolute inset-4 bg-white border-3 border-black neo-shadow-lg overflow-hidden z-20">
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                            {/* Generative-style art placeholder */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                            {/* Retro Computer Character (CSS Illustration) */}
                            <div className="relative z-10 flex flex-col items-center justify-center scale-110 md:scale-125 transform hover:rotate-3 transition-transform duration-500 cursor-pointer group">
                                {/* Monitor */}
                                <div className="w-56 h-48 bg-[#f0f0f0] border-3 border-black rounded-2xl neo-shadow relative flex flex-col items-center p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                    {/* Screen */}
                                    <div className="w-full h-full bg-[#1a1a1a] border-3 border-black flex flex-col items-center justify-center overflow-hidden relative rounded-lg">
                                        {/* Scanning Line */}
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-500/10 to-transparent w-full h-full animate-scan pointer-events-none"></div>

                                        {/* Matrix Text Bg */}
                                        <div className="absolute inset-0 opacity-20 text-[8px] text-green-400 font-mono leading-none break-all p-2 select-none">
                                            {`0x12F3...9A\nmining_block()\nsuccess: true\ngas_limit: 21000\n<SuiMove>\n// Todo: Sleep\nwhile(alive) {\n  code();\n}`}
                                        </div>

                                        {/* Face Expression */}
                                        <div className="text-green-400 font-mono font-black text-5xl z-10 whitespace-nowrap group-hover:hidden">
                                            {`•_•`}
                                        </div>
                                        <div className="text-green-400 font-mono font-black text-5xl z-10 whitespace-nowrap hidden group-hover:block animate-bounce">
                                            {`>_<`}
                                        </div>
                                    </div>
                                </div>

                                {/* Neck */}
                                <div className="w-20 h-6 bg-gray-300 border-x-3 border-b-3 border-black mx-auto"></div>

                                {/* Body / Stand */}
                                <div className="w-48 h-12 bg-[#f0f0f0] border-3 border-black rounded-xl neo-shadow flex items-center justify-center gap-3 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                    {/* Decorative Slots */}
                                    <div className="w-full h-1 bg-gray-300 absolute top-2 border-b-2 border-black/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 border-3 border-black rounded-full z-10 animate-bounce delay-700"></div>
                    <div className="absolute -bottom-6 -left-6 w-full h-24 bg-black z-0 skew-y-3"></div>
                    <div className="absolute top-1/2 -right-4 md:-right-12 bg-white border-3 border-black p-4 rotate-12 z-30 shadow-xl scale-75 md:scale-100 origin-center">
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                        <p className="font-heading font-bold text-center mt-1">1+ Years</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
