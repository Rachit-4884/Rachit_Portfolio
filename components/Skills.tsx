"use client";

import { skills } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-navy">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-navy-light p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-navy dark:text-white mb-6 flex items-center">
                                <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        className="px-4 py-2 bg-white dark:bg-navy text-navy dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-gold dark:hover:border-gold hover:text-gold dark:hover:text-gold transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
