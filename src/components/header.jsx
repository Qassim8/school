"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo - تكبير اللوجو قليلاً ليعطي فخامة */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="h-16 md:h-20 w-auto transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Links - استخدام خط أعرض وألوان الهوية */}
          <div className="hidden md:flex items-center gap-10 text-blue-950 font-bold">
            {[
              { name: "الرئيسية", href: "/" },
              { name: "عن المؤسسة", href: "#about" },
              { name: "المسارات", href: "#stage" },
              { name: "فريق العمل", href: "#team" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2 overflow-hidden"
              >
                <span className="group-hover:text-red-600 transition-colors duration-300">
                  {link.name}
                </span>
                {/* خط سفلي أحمر يظهر عند التحويم */}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Call to Action - الزر الأحمر المميز */}
          <div className="hidden md:block">
            <Link href="#contact">
              <button className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-950 transition-all duration-300 shadow-lg shadow-red-200 hover:shadow-blue-200 transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                سجل الآن
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button - تحسين شكل الهامبرجر بالأزرق الداكن */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-2xl bg-gray-50 text-blue-950 transition-colors border border-gray-100"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - قائمة الموبايل بلمسات حمراء */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[500px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}
        >
          <div className="py-6 space-y-2 border-t border-gray-100 mt-2">
            {[
              { name: "الرئيسية", href: "/" },
              { name: "عن المؤسسة", href: "#about" },
              { name: "المسارات التعليمية", href: "#stage" },
              { name: "فريق العمل", href: "#team" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-right font-bold text-blue-950 py-4 px-6 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block pt-4"
              onClick={() => setOpen(false)}
            >
              <button className="w-full bg-red-500 text-white py-4 rounded-2xl font-black shadow-lg shadow-red-100">
                تواصل معنا
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
