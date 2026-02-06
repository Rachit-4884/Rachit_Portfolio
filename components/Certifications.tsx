"use client";

import { certifications } from "@/lib/data";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-navy-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                        Certifications
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-navy p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold group hover:-translate-y-2"
                        >
                            {/* Badge Icon */}
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gold/20 transition-colors">
                                <svg
                                    className="w-8 h-8 text-gold"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            {/* Certification Name */}
                            <h3 className="text-center font-semibold text-navy dark:text-white mb-2 text-sm leading-tight">
                                {cert.name}
                            </h3>

                            {/* Issuer */}
                            <p className="text-center text-xs text-gray-600 dark:text-gray-400 mb-3">
                                {cert.issuer}
                            </p>

                            {/* Verify Link */}
                            <a
                                href={cert.verifyUrl}
                                className="block text-center text-xs text-gold hover:text-gold-dark font-medium transition-colors"
                            >
                                Verify →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
