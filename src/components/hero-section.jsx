import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-36 overflow-hidden" id="home">
      {/* الخلفية: دمج الأزرق مع لمحة حمراء خفيفة */}
      <div className="absolute top-0 right-0 -z-10 w-full lg:w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] lg:rounded-bl-[200px]" />
      <div className="absolute top-1/4 left-0 -z-10 w-24 h-24 bg-red-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* الجانب الأيمن: المحتوى النصي مع تطعيم أحمر */}
          <div className="flex-1 text-right order-2 lg:order-1">
            <span className="inline-block py-2 px-6 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 border border-red-100">
              مؤسسة آمال كباشي التعليمية
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-blue-900 leading-[1.15] mb-6">
              نصنع قادة المستقبل <br />
              <span className="text-red-600">ببيئة تعليمية ملهمة</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              في مدارسنا، لا نقدم مجرد دروس، بل نبني شخصية الطالب ليكون مبدعاً
              ومتميزاً. انضم إلى عائلة مدارس الريادة واضمن لأبنائك مستقبلاً
              مشرقاً.
            </p>

            {/* أرقام سريعة - لون أحمر للأرقام */}
            <div className="flex gap-10 items-center border-t border-gray-100 pt-8 justify-start">
              <div>
                <p className="text-3xl font-black text-red-600">+700</p>
                <p className="text-sm text-gray-500 font-medium">طالب متميز</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-black text-red-600">100%</p>
                <p className="text-sm text-gray-500 font-medium">قبول جامعي</p>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: الصورة مع الـ Overlay المعالج */}
          <div className="flex-1 relative w-full order-1 lg:order-2">
            <div className="relative z-10 w-full aspect-4/3 rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-10 border-white transform rotate-3 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/1 (8).jpg"
                alt="طلاب مؤسسة آمال كباشي"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* --- الـ Overlay السحري لتحسين الجودة --- */}
              {/* 1. طبقة تدرج لوني زرقاء حمراء لإخفاء النويز (Noise) */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-900/40 via-transparent to-red-900/20" />

              {/* 2. طبقة تغبيش خفيفة جداً (Overlay Texture) لزيادة الحدة الوهمية */}
              <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              {/* 3. تظليل سفلي للنصوص (في حال أضفت نصوص فوق الصورة) */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />
            </div>

            {/* عناصر ديكورية حمراء خلف الصورة */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-200/30 rounded-full -z-10 blur-3xl animate-pulse" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
