"use client";

import { experience } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-navy">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

                    {/* Experience Items */}
                    {experience.map((exp, index) => (
                        <div key={index} className="relative mb-12 md:mb-16">
                            {/* Timeline Dot */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white dark:border-navy z-10"></div>

                            {/* Content Card */}
                            <div
                                className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                                    }`}
                            >
                                <div className="bg-gray-50 dark:bg-navy-light p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold">
                                    {/* Company & Role */}
                                    <div className="mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-white mb-1">
                                            {exp.company}
                                            {exp.contractor && (
                                                <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                                                    {" "}
                                                    ({exp.contractor})
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-lg font-semibold text-gold mb-1">
                                            {exp.role}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {exp.location} • {exp.period}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li
                                                key={hIndex}
                                                className="flex items-start text-gray-700 dark:text-gray-300"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-sm md:text-base">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
