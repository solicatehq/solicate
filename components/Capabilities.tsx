import React from 'react';
import { Capability } from '../types';

const capabilities: Capability[] = [
    { title: 'Strategy', description: ['Market Position', 'Digital Roadmap', 'Content Direction'] },
    { title: 'Brand', description: ['Visual Identity', 'Design Systems', 'Art Direction'] },
    { title: 'Web', description: ['Frontend Architecture', 'Creative Development', 'Headless CMS'] },
    { title: 'Product', description: ['UI/UX Design', 'Prototyping', 'User Research'] },
    { title: 'Systems', description: ['Component Libraries', 'Documentation', 'Governance'] },
];

export const Capabilities: React.FC = () => {
    return (
        <section id="capabilities" className="relative py-32 px-6 md:px-24 bg-[#EEECE7] min-h-screen flex flex-col justify-center">
            <div className="absolute top-12 left-6 md:left-12 text-xs uppercase tracking-widest text-[#2E2E2E]/50 z-20">
                Capabilities
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-20">
                    <h2 className="font-serif-display text-5xl md:text-7xl text-[#2E2E2E] leading-[0.9] max-w-4xl">
                        Holistic design <br />
                        <span className="text-[#A88C5D] italic">ecosystems</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 md:p-12 border border-[#2E2E2E]/10 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:bg-[#E5E2DD] hover:border-[#2E2E2E]/20 ${index === 0 ? 'md:col-span-2' : ''}`}
                        >
                            <div className="mb-8">
                                <h3 className="font-serif-display text-3xl md:text-4xl text-[#2E2E2E] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <ul className="flex flex-wrap gap-2">
                                    {item.description.map((desc, i) => (
                                        <li key={i} className="px-3 py-1 rounded-full border border-[#2E2E2E]/20 text-[#2E2E2E]/70 text-xs md:text-sm uppercase tracking-wide group-hover:border-[#2E2E2E]/40 transition-colors duration-500">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-8 h-8 rounded-full border border-[#2E2E2E]/20 flex items-center justify-center self-end group-hover:bg-[#2E2E2E] group-hover:text-[#EEECE7] transition-all duration-500">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:rotate-45">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
