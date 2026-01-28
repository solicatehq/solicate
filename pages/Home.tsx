import React from 'react';
import { Hero } from '../components/Hero';
import { ShowcaseCategories } from '../components/landing/ShowcaseCategories';
import { Capabilities } from '../components/Capabilities';
import { Process } from '../components/Process';
import { Ethos } from '../components/Ethos';
import { Principles } from '../components/Principles';
import { Testimonials } from '../components/Testimonials';


export const Home: React.FC = () => {
    return (
        <main className="relative z-10 bg-[#EEECE7] shadow-2xl rounded-b-[3rem]">
            <Hero />
            <Ethos
                text="We design great websites, landing pages, e-commerce websites, and build full stack apps."
                highlightWords={["websites", "landing pages", "e-commerce", "full stack apps"]}
                highlightColor="#D35400"
            />
            <ShowcaseCategories />
            <Capabilities />
            <Principles
                text="Our principles are rooted in clarity, defined by honesty, and built to endure."
                highlightWords={["clarity", "honesty", "endure"]}
                highlightColor="#D35400"
            />
            <Process />
            <Testimonials />
        </main>
    );
};
