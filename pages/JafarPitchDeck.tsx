import React, { useEffect } from 'react';
import { Download } from 'lucide-react';

export function JafarPitchDeck() {
    const handlePrint = () => {
        window.print();
    };

    useEffect(() => {
        const originalPrintColorAdjust = document.documentElement.style.getPropertyValue('-webkit-print-color-adjust');
        const originalPrintColorAdjustStandard = document.documentElement.style.getPropertyValue('print-color-adjust');

        document.documentElement.style.setProperty('-webkit-print-color-adjust', 'exact', 'important');
        document.documentElement.style.setProperty('print-color-adjust', 'exact', 'important');

        return () => {
            if (originalPrintColorAdjust) {
                document.documentElement.style.setProperty('-webkit-print-color-adjust', originalPrintColorAdjust);
            } else {
                document.documentElement.style.removeProperty('-webkit-print-color-adjust');
            }
            if (originalPrintColorAdjustStandard) {
                document.documentElement.style.setProperty('print-color-adjust', originalPrintColorAdjustStandard);
            } else {
                document.documentElement.style.removeProperty('print-color-adjust');
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#EEECE7] text-[#2E2E2E] font-sans-ui selection:bg-[#D35400] selection:text-[#EEECE7] print:bg-[#EEECE7] print:text-[#2E2E2E]">
            <style>
                {`
          @media print {
            @page {
              size: A4 landscape;
              margin: 0;
            }
            body {
              background-color: #EEECE7 !important;
              color: #2E2E2E !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .no-print {
              display: none !important;
            }
            .print-section {
              width: 297mm !important;
              height: 210mm !important;
              min-height: 210mm !important;
              max-height: 210mm !important;
              padding: 15mm 20mm !important;
              margin: 0 !important;
              page-break-after: always !important;
              page-break-inside: avoid !important;
              break-after: page !important;
              break-inside: avoid !important;
              overflow: hidden !important;
              box-sizing: border-box !important;
              border: none !important;
            }
            .prevent-break {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            html.lenis {
              height: auto;
            }
            .mix-blend-overlay {
              display: none !important;
            }
          }
        `}
            </style>

            {/* Download Button */}
            <div className="fixed top-8 right-8 z-50 no-print">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-3 px-6 py-3 border border-[#2E2E2E]/30 bg-[#EEECE7]/80 backdrop-blur-md text-[#2E2E2E] text-xs uppercase tracking-[0.2em] hover:bg-[#2E2E2E] hover:text-[#EEECE7] transition-all duration-300 group"
                    style={{ fontFamily: 'Inter Tight, sans-serif' }}
                >
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    Download PDF
                </button>
            </div>

            <div className="max-w-[1200px] mx-auto">
                {/* 1. Cover / Hero Page */}
                <section className="relative min-h-[100vh] flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b border-[#2E2E2E]/10 print-section">
                    <div className="max-w-5xl">
                        <p className="text-[#2E2E2E]/60 text-sm md:text-base uppercase tracking-[0.2em] mb-10 print:mb-4 font-medium opacity-80 print:text-xs">
                            Jafar Alisha <span className="mx-2">—</span> Head of Performance Marketing, Solicate
                        </p>
                        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-[7.5rem] print:text-6xl leading-[1.05] tracking-tight mb-12 print:mb-6 max-w-5xl block">
                            Turning Paid Ads <br className="hidden md:block print:block" />
                            Into a Predictable <br className="hidden lg:block print:block" />
                            <span className="text-[#2E2E2E]/70 italic">Revenue Engine.</span>
                        </h1>
                    </div>
                </section>

                {/* 2. The Problem vs. The Philosophy */}
                <section className="relative min-h-[100vh] flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b border-[#2E2E2E]/10 print-section">
                    <div className="grid grid-cols-1 lg:grid-cols-2 print:grid-cols-2 gap-16 lg:gap-24 print:gap-12 w-full">
                        {/* The Problem */}
                        <div className="prevent-break flex flex-col justify-center">
                            <h2 className="text-[#2E2E2E]/50 text-xs uppercase tracking-[0.25em] mb-8 print:mb-4 border-b border-[#2E2E2E]/10 pb-4 print:pb-2 inline-block self-start">The Problem</h2>
                            <p className="text-3xl md:text-5xl print:text-3xl font-serif-display leading-[1.2] text-[#2E2E2E]/70">
                                "Most media buyers are button-clickers. That's the truth. If your creatives suck, your ads will fail."
                            </p>
                        </div>

                        {/* The Philosophy (Solicate Edge) */}
                        <div className="prevent-break flex flex-col justify-center lg:border-l print:border-l border-[#2E2E2E]/10 lg:pl-16 print:pl-10">
                            <h2 className="text-[#D35400] text-xs uppercase tracking-[0.25em] mb-8 print:mb-4 border-b border-[#D35400]/30 pb-4 print:pb-2 inline-block self-start">The Solicate Edge</h2>
                            <p className="text-xl md:text-2xl print:text-lg leading-[1.6] text-[#2E2E2E] font-light">
                                I don't 'run ads'. I build a <strong className="font-medium">revenue system</strong>. I focus 70% on creatives, fix funnels and landing pages, understand unit economics <span className="text-[#D35400] italic">(profit &gt; vanity ROAS)</span>, and think like a business owner with zero emotional attachment to failing ads.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. The 7-Step Revenue System */}
                <section className="relative min-h-[100vh] flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b border-[#2E2E2E]/10 print-section">
                    <div className="w-full">
                        <h2 className="font-serif-display text-4xl md:text-6xl print:text-5xl mb-16 lg:mb-24 print:mb-10 text-center pb-8 print:pb-4 border-b border-[#2E2E2E]/10 max-w-2xl mx-auto">The 7-Step Revenue System</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-4 gap-x-12 print:gap-x-6 gap-y-16 lg:gap-y-20 print:gap-y-8">
                            {[
                                { num: '01', title: 'Deep Audit', desc: 'Product, margins, website, funnel, competitors.' },
                                { num: '02', title: 'Numbers First', desc: 'Break-even CPA, target ROAS, realistic scaling plan.' },
                                { num: '03', title: 'Creative Strategy', desc: 'Hooks, angles, UGC concepts, ad scripting.' },
                                { num: '04', title: 'Launch Phase', desc: 'Structured testing (creatives + audiences).' },
                                { num: '05', title: 'Optimization', desc: 'Kill losers fast, scale winners aggressively.' },
                                { num: '06', title: 'Scaling', desc: 'Budget scaling + creative iteration loop.' },
                                { num: '07', title: 'Reporting', desc: 'Clear metrics: CPA, ROAS, MER (not vanity metrics).' }
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col prevent-break">
                                    <span className="text-sm print:text-xs text-[#D35400] font-mono mb-4 print:mb-2 border border-[#D35400]/30 rounded-full w-10 h-10 print:w-7 print:h-7 flex items-center justify-center shrink-0">{step.num}</span>
                                    <h3 className="text-xl print:text-sm font-medium mb-3 print:mb-1 text-[#2E2E2E] tracking-wide">{step.title}</h3>
                                    <p className="text-[#2E2E2E]/70 text-base print:text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. The Proof (Track Record) */}
                <section className="relative min-h-[100vh] flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b border-[#2E2E2E]/10 print-section">
                    <div className="w-full">
                        <p className="text-[#2E2E2E]/60 text-xs uppercase tracking-[0.25em] mb-8 print:mb-4 font-medium">The Proof</p>
                        <h2 className="font-serif-display text-4xl md:text-6xl print:text-5xl mb-24 print:mb-12 max-w-3xl leading-[1.15]">
                            "I focus on profitable growth, not fake vanity wins."
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-16 md:gap-8 border-y border-[#2E2E2E]/10 py-16 print:py-8">
                            <div className="flex flex-col prevent-break justify-center md:border-r print:border-r border-[#2E2E2E]/10 pr-8">
                                <span className="font-serif-display text-6xl md:text-8xl lg:text-[7rem] print:text-6xl mb-6 print:mb-3 text-[#2E2E2E] block">₹4L<span className="text-4xl print:text-3xl text-[#D35400]">+</span></span>
                                <p className="text-[#2E2E2E]/70 text-xs uppercase tracking-[0.15em] leading-relaxed max-w-[200px]">Revenue scaled for D2C store (from ₹0)</p>
                            </div>
                            <div className="flex flex-col prevent-break justify-center md:border-r print:border-r border-[#2E2E2E]/10 md:px-8 print:px-8">
                                <span className="font-serif-display text-6xl md:text-8xl lg:text-[7rem] print:text-6xl mb-6 print:mb-3 text-[#2E2E2E] block">40<span className="text-4xl print:text-3xl text-[#D35400]">%</span></span>
                                <p className="text-[#2E2E2E]/70 text-xs uppercase tracking-[0.15em] leading-relaxed max-w-[200px]">Reduction in CPA via creative optimization</p>
                            </div>
                            <div className="flex flex-col prevent-break justify-center md:pl-8 print:pl-8">
                                <span className="font-serif-display text-6xl md:text-8xl lg:text-[7rem] print:text-6xl mb-6 print:mb-3 text-[#2E2E2E] block">4<span className="text-4xl print:text-3xl text-[#D35400]">x</span></span>
                                <p className="text-[#2E2E2E]/70 text-xs uppercase tracking-[0.15em] leading-relaxed max-w-[200px]">Consistent ROAS on winning campaigns</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Ideal Partner Profile & 6. The 90-Day Reality (Stacked for Print flow) */}
                <section className="relative min-h-[100vh] flex flex-col justify-center p-8 md:p-16 lg:p-24 print-section">
                    <div className="grid grid-cols-1 lg:grid-cols-2 print:grid-cols-2 gap-24 print:gap-12 w-full">

                        {/* 5. Ideal Partner Profile */}
                        <div className="prevent-break">
                            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl print:text-5xl mb-8 print:mb-6">Who we work with.</h2>
                            <p className="text-[#2E2E2E]/70 text-lg print:text-sm leading-relaxed mb-12 print:mb-6">
                                Not everyone is a fit. Ads won't save a broken or confused brand. We partner with founders who are serious about building predictable revenue engines.
                            </p>

                            <div className="space-y-6 print:space-y-4">
                                {[
                                    "D2C E-commerce brand.",
                                    "Minimum ₹3L/month revenue OR highly serious about scaling.",
                                    "Proven product & decent PMF (not testing random junk).",
                                    "Clear margins and break-even CPA known.",
                                    "Ad Budget: ₹30K–₹1L/month minimum."
                                ].map((req, idx) => (
                                    <div key={idx} className="flex items-start gap-5 print:gap-3">
                                        <div className="w-1.5 h-1.5 mt-2.5 print:mt-1.5 bg-[#D35400] transform rotate-45 shrink-0" />
                                        <p className="text-[#2E2E2E] font-light text-base md:text-lg print:text-sm">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 6. The 90-Day Reality */}
                        <div className="prevent-break lg:border-l print:border-l border-[#2E2E2E]/10 lg:pl-16 print:pl-10 flex flex-col justify-center">
                            <p className="text-[#D35400] text-xs uppercase tracking-[0.25em] mb-6 print:mb-4 font-medium">The 90-Day Reality</p>
                            <h2 className="font-serif-display text-3xl md:text-5xl print:text-4xl mb-6 print:mb-4 leading-tight">What success actually looks like.</h2>
                            <p className="text-[#2E2E2E]/70 mb-12 print:mb-6 italic tracking-wide print:text-sm">No "viral ad" hype. Just solid structural growth.</p>

                            <div className="space-y-6 print:space-y-3 text-left">
                                {[
                                    "Consistent profitable campaigns running.",
                                    "Clear understanding of winning creatives + audiences.",
                                    "Stable cost per acquisition.",
                                    "Scalable ad system.",
                                    "Foundation to scale to 4x–6x revenue."
                                ].map((outcome, idx) => (
                                    <div key={idx} className="flex items-center gap-5 print:gap-3 p-5 print:p-3 bg-[#EEECE7] border border-[#2E2E2E]/5 hover:border-[#2E2E2E]/20 transition-colors">
                                        <p className="text-xl print:text-lg font-serif-display text-[#D35400] italic shrink-0">0{idx + 1}</p>
                                        <p className="text-[#2E2E2E] text-sm md:text-base print:text-xs tracking-wide font-light">{outcome}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* 7. Contact / Next Steps */}
                <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-24 print-section">
                    <div className="w-full max-w-3xl mx-auto prevent-break">
                        <p className="text-[#D35400] text-xs uppercase tracking-[0.25em] mb-8 print:mb-4 font-medium">Ready to scale?</p>
                        <h2 className="font-serif-display text-4xl md:text-6xl print:text-5xl mb-12 print:mb-8 leading-tight">
                            Let's build your revenue engine.
                        </h2>

                        <div className="flex flex-col items-center justify-center gap-6 print:gap-4">
                            <span className="font-serif-display text-3xl md:text-5xl print:text-4xl text-[#2E2E2E]">Jafar Alisha</span>

                            <div className="flex flex-col items-center gap-4 mt-2 print:gap-2">
                                <span className="text-[#2E2E2E]/80 text-lg md:text-xl print:text-base font-medium tracking-wider">
                                    9030808621
                                </span>
                                <span className="text-[#2E2E2E]/80 text-lg md:text-xl print:text-base font-medium tracking-wide">
                                    work.jafaralisha@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className="mt-24 print:mt-16 pt-8 print:pt-4 border-t border-[#2E2E2E]/10 flex flex-col md:flex-row print:flex-row items-center justify-between text-xs tracking-widest uppercase text-[#2E2E2E]/50 w-full">
                            <span>Solicate Performance</span>
                            <span className="mt-4 md:mt-0 print:mt-0">© {new Date().getFullYear()}</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
