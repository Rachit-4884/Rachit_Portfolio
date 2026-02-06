"use client";

import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-navy-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                        Flagship Initiatives
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Enterprise-scale projects delivering measurable business impact
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-navy p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold group"
                        >
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 group-hover:text-gold dark:group-hover:text-gold transition-colors">
                                {project.title}
                            </h3>

                            {/* Problem */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gold uppercase mb-2">
                                    Problem
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>

                            {/* Action */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gold uppercase mb-2">
                                    Action
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {project.action}
                                </p>
                            </div>

                            {/* Impact */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gold uppercase mb-2">
                                    Impact
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {project.impact.map((item, iIndex) => (
                                        <li
                                            key={iIndex}
                                            className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                                        >
                                            <svg
                                                className="w-4 h-4 text-gold mr-2 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="px-3 py-1 bg-gray-100 dark:bg-navy-light text-navy dark:text-gray-300 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Large Featured Project - First one gets special treatment */}
                <div className="mt-8 bg-gradient-to-br from-navy to-navy-light p-8 md:p-12 rounded-xl shadow-2xl border border-gold">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full mb-4">
                                FEATURED INITIATIVE
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {projects[0].title}
                            </h3>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <p className="leading-relaxed mb-4">{projects[0].action}</p>
                        </div>
                        <div className="bg-navy-dark p-6 rounded-lg">
                            <h4 className="text-gold font-semibold mb-3">Key Results</h4>
                            <ul className="space-y-2">
                                {projects[0].impact.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="text-gold mr-2">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
