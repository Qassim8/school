"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 py-3">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ${open ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
              ></span>
            </div>
          </button>

          {/* Call to Action Button - Desktop */}
          <Link href="#contact" className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow shadow-blue-200 cursor-pointer">
              تواصل معنا
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 border-t border-blue-100 mt-3">
            <div className="flex flex-col gap-4 text-blue-800 font-medium">
              <Link
                href="/"
                className="hover:text-blue-500 transition-colors py-2 px-2 rounded-lg hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="#about"
                className="hover:text-blue-500 transition-colors py-2 px-2 rounded-lg hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                عن المدرسة
              </Link>
              <Link
                href="#stage"
                className="hover:text-blue-500 transition-colors py-2 px-2 rounded-lg hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                المسارات التعليمية
              </Link>
              <Link
                href="#team"
                className="hover:text-blue-500 transition-colors py-2 px-2 rounded-lg hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                فريق العمل
              </Link>
              <Link
                href="#contact"
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all shadow shadow-blue-200">
                  تواصل معنا
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
