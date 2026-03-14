"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-blue-800 font-medium">
            <Link
              href="/"
              className="hover:text-blue-500 transition-colors py-5"
            >
              الرئيسية
            </Link>
            <Link
              href="#about"
              className="hover:text-blue-500 transition-colors py-5"
            >
              عن المدرسة
            </Link>
            <Link
              href="#stage"
              className="hover:text-blue-500 transition-colors py-5"
            >
              المسارات التعليمية
            </Link>
            <Link
              href="#team"
              className="hover:text-blue-500 transition-colors py-5"
            >
              فريق العمل
            </Link>
          </div>

          {/* Call to Action Button */}
          <Link href="#contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow shadow-blue-200 cursor-pointer">
              تواصل معنا
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
