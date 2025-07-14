"use client";
import Link from "next/link";

export default function NavLink() {
  return (
    <div className="link-con flex flex-col md:flex-row gap-6 px-5 text-lg">
      <Link
        href="/"
        className="text-card-foreground hover:text-[var(--hover-primary-blue-red)] transition duration-200"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-card-foreground hover:text-[var(--hover-primary-blue-red)] transition duration-200"
      >
        About
      </Link>
      <Link
        href="/blogs"
        className="text-card-foreground hover:text-[var(--hover-primary-blue-red)] transition duration-200"
      >
        Blogs
      </Link>
      <Link
        href="/contact"
        className="text-card-foreground  hover:text-[var(--hover-primary-blue-red)] transition duration-200"
      >
        Contact
      </Link>
    </div>
  );
}
