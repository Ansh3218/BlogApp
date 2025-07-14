"use client";
import Image from "next/image";
import blog_front from "@/public/blogfront.png";
import BlogCard from "@/components/ui/BlogCard";
import PremierPlan from "@/components/ui/PremierPlan";
import Testimonials from "@/components/ui/Testimonials";
import { useBlog } from "@/context/BlogContext";
import React, { useState } from "react";

export default function HeroBanner() {
  const { blogs } = useBlog();

  // Custom typing effect
  const [currentText, setCurrentText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const strings = [
    "Travel blogs",
    "Food blogs",
    "Fashion blogs",
    "Lifestyle blogs",
    "Health & fitness blogs",
  ];

  React.useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = strings[currentIndex];

        if (isDeleting) {
          setCurrentText((prev) => prev.slice(0, -1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % strings.length);
          }
        } else {
          setCurrentText((prev) => current.slice(0, prev.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <>
      <section className="bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-12 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-40 items-start">
          {/* LEFT TEXT AREA */}
          <div className="flex flex-col gap-6">
            <h1 className="text-foreground text-5xl max-sm:text-4xl font-extrabold leading-tight">
              Best Blog Platforms: <br className="max-sm:hidden" />
              Find Your Choice in 15 Minutes <br />
              <span style={{ color: "var(--hover-primary-blue-red)" }}>
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Let's look at each option in detail, starting with the platform
              that powers nearly half the internet
            </p>
            {/* Search Bar */}
            <div className="mt-6">
              <button
                style={{ backgroundColor: "var(--hover-primary-blue-red)" }}
                className="flex items-center gap-4 px-12 py-3 cursor-pointer text-white font-medium rounded shadow-md hover:opacity-90 transition duration-200 text-lg"
              >
                See More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative w-full flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 w-full h-full rounded-3xl bg-muted" />
              <Image
                src={blog_front}
                alt="Hero Banner"
                width={550}
                height={550}
                className="rounded-3xl z-10 relative"
              />
              <div className="absolute -top-2 left-6 bg-card rounded-xl shadow-md p-3 flex items-center gap-2">
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-semibold">
                  500+
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--hero-text-color)" }}
                >
                  Available blog
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="pricing-container min-w-full h-0 min-h-[40rem] bg-[var(--bg-section-2)]">
          <div className="w-full h-full flex flex-col items-center justify-evenly">
            <div className="first-section text-center">
              <h3 className="text-4xl font-bold mb-3 dark:text-gray-100">
                Pricing Plans
              </h3>
              <h5 className="text-lg text-gray-600 dark:text-gray-300">
                Choose the plan that suits you best
              </h5>
            </div>
            <div className="second-section flex items-center gap-16">
              <PremierPlan />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="w-full h-0 min-h-[30rem] flex items-center flex-col justify-evenly">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-5 dark:text-gray-100">
              What Our Client Say
            </h2>
            <h4 className="text-xl dark:text-gray-100">
              Hear from our satisfied customers
            </h4>
          </div>
          <Testimonials />
        </div>
      </section>

      <div className="text-center py-12">
        <BlogCard blogs={blogs.slice(0, 3)} />
      </div>
    </>
  );
}
