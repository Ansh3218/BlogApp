"use client";
import Link from "next/link";

export default function AuthDropdown() {
  return (
    <div className="flex items-center gap-8">
      <Link
        href="/logout"
        className="w-32 h-11 text-lg transition-all duration-300 flex items-center justify-center flex-shrink-0 rounded hover:scale-105 text-[var(--color-foreground)] border-2 border-[var(--hover-primary-blue-red)]"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="w-32 h-11 text-lg transition-all duration-300  hover:scale-105 flex shadow items-center justify-center flex-shrink-0 border rounded bg-[var(--hover-primary-blue-red)] text-white"
      >
        Sign Up
      </Link>
    </div>
  );
}
