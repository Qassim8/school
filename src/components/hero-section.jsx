import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const HeroSection = () => {
  const ref = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden animate-on-scroll"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-bl-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-right">
            <span className="tracking-widest inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-6">
              في مؤسسة امال الكباشي
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              نصنع قادة المستقبل <br />
              <span className="text-blue-500">ببيئة تعليمية ملهمة</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              في مدارسنا، لا نقدم مجرد دروس، بل نبني شخصية الطالب ليكون مبدعاً
              ومتميزاً في مسيرته الجامعية والمهنية. انضم إلى عائلة مدارس الريادة
              الثانوية اليوم.
            </p>

            {/* Stats Snippet */}
            <div className="mt-2 flex gap-8 items-center border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-blue-900">+700</p>
                <p className="text-sm text-gray-500">طالب متميز</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-blue-900">100%</p>
                <p className="text-sm text-gray-500">قبول جامعي</p>
              </div>
            </div>
          </div>

          {/* Hero Image / Illustration Placeholder */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-4/3 bg-blue-200 flex items-center justify-center">
                {/* استبدل هذا بـ <img src="/school-hero.jpg" /> */}
                <span className="text-blue-500 font-medium">
                  صورة تعبيرية للطلاب أو المبنى
                </span>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full -z-10 blur-2xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
