"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const headlines = [
    "Driving Enterprise Products from Strategy to Scalable Impact",
    "Transforming Analytics into Business Value",
    "Product, Program & Platform Leadership at Scale",
];

export default function Hero() {
    const [currentHeadline, setCurrentHeadline] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentHeadline((prev) => (prev + 1) % headlines.length);
                setIsVisible(true);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!mounted) {
        return (
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark"
            >
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        {headlines[0]}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {personalInfo.bio}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Animated Headline */}
                <h1
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-500 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4"
                        }`}
                >
                    {headlines[currentHeadline]}
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                    {personalInfo.bio}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                    <button
                        onClick={() => scrollToSection("#experience")}
                        className="px-8 py-4 bg-gold hover:bg-gold-dark text-navy font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gold/50 w-full sm:w-auto"
                    >
                        View Experience
                    </button>
                    <button
                        onClick={() => scrollToSection("#contact")}
                        className="px-8 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
