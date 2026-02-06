"use client";

import { testimonials } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setIsAutoPlaying(false);
    };

    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-navy">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
                        Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Testimonial Card */}
                    <div className="bg-gradient-to-br from-gold/5 to-gold/10 dark:from-gold/10 dark:to-gold/5 p-8 md:p-12 rounded-xl shadow-xl border-2 border-gold/20 min-h-[300px] flex flex-col justify-center">
                        {/* Quote Icon */}
                        <svg
                            className="w-12 h-12 text-gold/30 mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        {/* Quote */}
                        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed italic">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        {/* Author */}
                        <div>
                            <p className="font-bold text-navy dark:text-white">
                                {testimonials[currentIndex].author}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {testimonials[currentIndex].role}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white dark:bg-navy-light rounded-full shadow-lg hover:bg-gold hover:text-navy transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white dark:bg-navy-light rounded-full shadow-lg hover:bg-gold hover:text-navy transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-gold w-8"
                                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gold/50"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
