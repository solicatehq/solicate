import React, { useLayoutEffect, useRef } from 'react';
import MuxPlayer from "@mux/mux-player-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
    {
        id: 1,
        title: 'Amtams',
        role: 'Hometreats Bakery Shop',
        year: '2025',
        image: '/images/amtams-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://amtams.solicate.pecup.in',
        playbackId: '6SzwPC3JhX023IB1Uy4k301qgBKvWqEVKYeEEatjKygeI',
        description: 'A cozy digital storefront for artisanal baked goods, featuring warm aesthetics and seamless ordering.'
    },
    {
        id: 2,
        title: 'Chlorophyll',
        role: 'Organic Laboratory',
        year: '2025',
        image: '/images/chlorophyll-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://chlorophyll.solicate.pecup.in',
        playbackId: 'Pzu8MmdZbCkG173BqyFv3DWSGtO02OrN02woMeGdvJRX8',
        description: 'An immersive platform for an organic laboratory, highlighting sustainable practices through visual storytelling.'
    },
    {
        id: 3,
        title: 'Kajal',
        role: 'UGC Portfolio',
        year: '2025',
        image: '/images/kajal-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kajal.solicate.pecup.in',
        playbackId: '9UTutoAr02u1oS02yDpS00ZfGfYlwSOaj02OtqzUXzzFnnQ',
        description: 'A dynamic portfolio showcasing user-generated content with a focus on bold typography and fluid transitions.'
    },
    {
        id: 4,
        title: 'Kernelspace',
        role: 'Technical Lab',
        year: '2025',
        image: '/images/kernelspace-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://kernelspace.solicate.pecup.in',
        playbackId: 'VnfaCxXQPMQVNYoIGUDBYPVewBbqmuM00vksMSuhBXdw',
        description: 'A cutting-edge interface for a tech lab, emphasizing precision, data visualization, and modern design principles.'
    },
    {
        id: 5,
        title: 'Vaani',
        role: 'Music Studio',
        year: '2025',
        image: '/images/vaani-img.png',
        aspectRatio: 'aspect-video',
        link: 'https://vaani.solicate.pecup.in',
        playbackId: '8RNpU01rebBYdeGxyUa52HJSPPDBfjQFJJHEv9KV00RgE',
        description: 'A sonic visual experience for a music studio, capturing the essence of sound through rhythmically paced motion.'
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const videoRef = useRef<any>(null); // Using any for MuxPlayer ref compatibility

    const handleMouseEnter = () => {
        if (videoRef.current?.play) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current?.pause) {
            videoRef.current.pause();
            if (videoRef.current.currentTime) {
                videoRef.current.currentTime = 0;
            }
        }
    };

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-[70vw] md:w-[40vw] shrink-0 flex flex-col gap-6 interactive cursor-none hover-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`relative ${project.aspectRatio || 'aspect-[4/3]'} overflow-hidden bg-faded-stone/20 rounded-sm`}>
                {/* Video Layer (Bottom) */}
                {project.playbackId && (
                    <MuxPlayer
                        playbackId={project.playbackId}
                        metadata={{
                            video_id: `video-${project.id}`,
                            video_title: project.title,
                            viewer_user_id: "user-id-007",
                        }}
                        streamType="on-demand"
                        autoPlay={false}
                        controls={false}
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ aspectRatio: '16/9', '--controls': 'none' } as React.CSSProperties}
                        ref={videoRef}
                    />
                )}

                {/* Image Layer (Top) */}
                <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${project.playbackId ? 'group-hover:opacity-0' : 'group-hover:scale-105 transition-transform'}`}
                />
            </div>
            <div className="flex justify-between items-start border-t border-soft-pewter pt-4 transition-colors duration-300 group-hover:border-nordic-charcoal">
                <div className="max-w-[80%]">
                    <h3
                        className="font-display text-lg md:text-xl text-nordic-charcoal inline-block mr-3"
                        data-cursor-variant="project-name"
                    >
                        {project.title}
                    </h3>
                    <span className="text-sm text-nordic-charcoal/60 block mb-2">{project.role}</span>
                    {project.description && (
                        <p className="text-xs md:text-sm text-nordic-charcoal/50 leading-relaxed max-w-md">
                            {project.description}
                        </p>
                    )}
                </div>
                <span className="text-sm font-mono text-nordic-charcoal/40">{project.year}</span>
            </div>
        </a>
    );
};

export const SelectedWork: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            const container = containerRef.current;
            if (!track || !container) return;

            // Calculate movement amount: total width of track minus viewport width
            // We scroll horizontally by this amount
            const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

            gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    // The duration of the scroll is pinned to the distance we need to travel + some buffer
                    end: () => `+=${track.scrollWidth - window.innerWidth + 200}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="selected-work" className="h-screen w-full overflow-hidden bg-arctic-linen flex items-center relative">
            {/* Label */}
            <div className="absolute top-12 left-6 md:left-12 z-20">
                <div className="text-xs uppercase tracking-widest text-nordic-charcoal/50">
                    Selected Work (01—{String(projects.length).padStart(2, '0')})
                </div>
            </div>

            <div ref={trackRef} className="flex gap-12 md:gap-24 px-12 md:px-24 w-max h-full items-center">
                {/* Intro Spacer */}
                <div className="w-[5vw] md:w-[10vw] shrink-0" />

                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                {/* 'Add Yours' Card */}
                <div className="w-[70vw] md:w-[40vw] shrink-0 flex items-center justify-center gap-6 group cursor-pointer relative">
                    <svg width="220" height="48" className="overflow-visible">
                        <line x1="0" y1="24" x2="180" y2="24" className="stroke-nordic-charcoal/30 stroke-1" />
                        <circle cx="186" cy="24" r="6" className="fill-transparent stroke-nordic-charcoal/30 stroke-1" />
                        <circle
                            cx="186" cy="24" r="24"
                            style={{ transformOrigin: '186px 24px' }}
                            className="fill-birchwood/20 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                        />
                    </svg>
                    <span className="font-display text-xl text-nordic-charcoal/40 italic transition-colors duration-300 group-hover:text-nordic-charcoal/80">
                        Add Yours here :D
                    </span>
                </div>

                {/* Outro Spacer */}
                <div className="w-[20vw] shrink-0" />
            </div>
        </section>
    );
};

