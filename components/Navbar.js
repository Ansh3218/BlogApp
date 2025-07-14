"use client";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import AuthDropdown from "./ui/AuthDropdown";
import NavLink from "./ui/NavLink";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-btn";
import { useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(60);
    }, 100);
    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);
  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur shadow-md">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold font-sans">NextBlog</span>
            </Link>
          </div>

          {/* Desktop User Icon with Popover */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <div className="hidden md:flex space-x-8">
                <NavLink />
              </div>
              <ModeToggle />
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-2xl cursor-pointer">
                    <FaRegUserCircle />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="relative flex justify-center items-center gap-8 w-80 h-24 text-black p-4 mt-3 mr-5">
                  <AuthDropdown />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-8">
            <ModeToggle />
            <div>
              <Sheet>
                <SheetTrigger>
                  <HiMenu className="h-8 w-8 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="max-[480px]:w-full">
                  <SheetHeader className="cursor-pointer">
                    <SheetTitle className="text-lg font-bold text-blue-600">
                      Welcome 👋
                    </SheetTitle>
                    <SheetDescription className="text-sm mb-4">
                      Navigate and manage your account
                    </SheetDescription>
                  </SheetHeader>

                  <div className="flex itece flex-col gap-24 mt-4">
                    <NavLink />
                    <div className="absolute border-t border-gray-300 bottom-0 w-full flex max-md:justify-center p-5 max-[480px]:flex-col">
                      <AuthDropdown />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
