import React from "react";
import Image from "next/image";
import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const images = [
    "/1 (1).jpg",
    "/1 (2).jpg",
    "/1 (3).jpg",
    "/1 (4).jpg",
    "/1 (7).jpg",
    "/1 (9).jpg",
    "/1 (10).jpg",
    "/1 (11).jpg",
    "/1 (12).jpg",
  ];

  return (
    <section className="py-24 overflow-hidden " data-aos="fade-up" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* الجانب الأيمن: المحتوى النصي مع تطعيم باللون الأحمر */}
          <div className="flex-1 text-right order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-blue-900 mb-6 sm:mb-8 leading-snug">
              من بذرة طموح.. <br />
              <span className="text-red-600">إلى صرح تعليمي متكامل</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                بدأت رحلتنا بفكرة بسيطة وبذرة صغيرة؛ حيث انطلقنا كمعهد تعليمي
                متواضع يهدف لتمكين الطلاب وتطوير مهاراتهم في بيئة داعمة.
              </p>

              <p className="bg-red-50 p-4 border-r-4 border-red-500 rounded-l-lg italic text-blue-900">
                "لم نكن نرى الجدران الأربعة، بل كنا نرى المستقبل في عيون
                طلابنا."
              </p>

              <p>
                بفضل الإصرار والجودة، كبر الحلم لنتحول اليوم إلى مؤسسة تعليمية
                رائدة، تفتخر بكونها{" "}
                <span className="text-red-600 font-bold">
                  معتمدة لدى السفارة السودانية
                </span>
                ، ومسجلة رسمياً تحت مظلة وزارة التضامن الاجتماعي.
              </p>
            </div>

            {/* نقاط الاعتماد الرسمي - أيقونات باللون الأحمر */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white flex items-start gap-3 p-4 rounded-xl border border-red-50 hover:shadow-md transition-shadow">
                <CheckCircle className="text-red-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900">اعتماد السفارة</h4>
                  <p className="text-sm text-gray-500">
                    منهج سوداني معتمد بالكامل
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-start gap-3 p-4 rounded-xl border border-blue-50 hover:shadow-md transition-shadow">
                <Award className="text-blue-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900">ترخيص رسمي</h4>
                  <p className="text-sm text-gray-500">مسجلة بوزارة التضامن</p>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: الصور مع الـ Overlay المزدوج (أزرق وأحمر) */}
          <div className="flex-1 relative order-1 lg:order-2 w-full">
            <div className="relative">
              {/* شبكة الصور */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 rounded-[30px] overflow-hidden border-8 border-white shadow-2xl relative z-10 p-2 bg-gray-50/50">
                {images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gray-200 overflow-hidden rounded-xl group"
                  >
                    <Image
                      src={imgSrc}
                      alt={`صورة ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* --- Overlay لتحسين الجودة وتوحيد الهوية --- */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-red-600/10 mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 border border-white/10 rounded-xl" />
                  </div>
                ))}
              </div>

              {/* بطاقة "البداية" - حدود حمراء */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-5 rounded-2xl shadow-xl z-20 border-b-4 border-red-600 hidden sm:flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-600">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">البداية</p>
                  <p className="text-sm font-bold text-blue-900">معهد صغير</p>
                </div>
              </div>

              {/* بطاقة "الآن" - حدود زرقاء */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 sm:p-5 rounded-2xl shadow-xl z-20 border-b-4 border-blue-600 hidden md:flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">اليوم</p>
                  <p className="text-sm font-bold text-blue-900">صرح معتمد</p>
                </div>
              </div>

              {/* زخرفة خلفية حمراء */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-50/50 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
