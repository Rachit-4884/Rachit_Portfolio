"use client";

import { stats, tools } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 bg-gray-50 dark:bg-navy-dark"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                        Leadership & Impact
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-navy p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-800 ${isVisible ? "animate-scale-in" : "opacity-0"
                                }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold text-navy dark:text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools Row */}
                <div className="bg-white dark:bg-navy p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                    <h3 className="text-xl font-semibold text-navy dark:text-white mb-6 text-center">
                        Core Competencies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-100 dark:bg-navy-light text-navy dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gold hover:text-navy dark:hover:bg-gold dark:hover:text-navy transition-colors cursor-default"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
