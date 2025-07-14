"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogCard = ({ blogs, varient = "home" }) => {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    // Safe client-only check
    setIsHome(pathname === "/");
  }, [pathname]);

  return (
    <section className="py-16">
      <div className="max-w-8xl mx-auto px-6 text-center">
        <h2
          className={`font-bold mb-2 ${
            varient === "home" ? "text-3xl" : "text-5xl"
          }`}
        >
          Top Blogs
        </h2>
        <p className="mb-10">
          {varient === "home"
            ? "Check out our most popular blog posts"
            : "Explore all our latest blog posts"}
        </p>
        <div className="grid grid-cols-3 gap-12 justify-self-center">
          {blogs?.map((blog, index) => (
            <span
              key={index}
              className="rounded-xl shadow-md min-h-[25rem] h-auto w-96 border-2 p-5 text-left flex flex-col justify-between items-start"
            >
              <div className="relative w-full h-[200px] mb-4 rounded-md overflow-hidden hover:scale-[103%] transition duration-300">
                <Image
                  src={blog.image || "/default.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-base font-bold mb-2">
                {blog.title.length > 35
                  ? blog.title.slice(0, 35) + "..."
                  : blog.title}
              </h3>
              <p className="text-sm text-gray-600">
                {blog.description.length > 80
                  ? blog.description.slice(0, 80) + "..."
                  : blog.description}
              </p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className="inline-block mt-6 px-7 py-2 text-lg rounded-md border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition duration-200"
              >
                Read More
              </Link>
            </span>
          ))}
        </div>

        {isHome && (
          <div className="mt-20">
            <Link
              href="/blogs"
              className="py-3 px-12 border-2 border-gray-800 rounded-lg text-lg transition hover:text-white duration-300 hover:bg-gray-900"
            >
              See More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCard;
