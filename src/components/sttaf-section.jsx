import React from "react";
import Image from "next/image"; // استيراد مكون الصورة من Next.js
import { Award, Briefcase, Users, Star } from "lucide-react";

const TeamSection = () => {
  const teachers = [
    { name: "أ. محمد صلاح", subject: "اللغة العربية", initial: "م" },
    { name: "أ. فاطمة عمر", subject: "الرياضيات", initial: "ف" },
    { name: "د. علي حسن", subject: "الفيزياء", initial: "ع" },
    { name: "أ. سارة سعيد", subject: "اللغة الإنجليزية", initial: "س" },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
      id="team"
    >
      {/* خلفية جمالية */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dots"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#dc2626" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="mb-12 sm:mb-20">
          <span className="inline-block py-1 px-6 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-4 border border-red-100">
            القيادة والكفاءة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 mb-6">
            تعرف على صناع التميز
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* --- المستوى الأول: المؤسس (المعدل لإضافة الصورة) --- */}
        <div
          className="flex justify-center mb-12 sm:mb-16 relative"
          data-aos="fade-up"
        >
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-red-600 to-blue-200"></div>

          <div className="bg-red-500 text-white p-8 lg:p-12 rounded-[3rem] shadow-2xl shadow-red-200 w-full max-w-xl relative transform hover:-translate-y-2 transition-all duration-500 border-[8px] border-white">
            <Award
              className="absolute -top-8 -right-8 text-yellow-300 bg-blue-900 p-3 rounded-2xl shadow-xl border-4 border-white"
              size={64}
            />

            {/* الحاوية الدائرية للصورة */}
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/40 shadow-inner overflow-hidden relative">
              <Image
                src="/mrs-amal-3.jpg" // مسار الصورة في مجلد public
                alt="الأستاذة آمال كباشي - المؤسس"
                fill // ملء الحاوية بالكامل
                className="object-cover" // الحفاظ على النسبة والتغطية
                priority // تحميل الصورة بأولوية عالية
              />
            </div>

            <h3 className="text-3xl sm:text-4xl font-black mb-2">آمال كباشي</h3>
            <p className="text-red-100 font-bold text-lg uppercase tracking-widest mb-4">
              المؤسس ورئيس مجلس الإدارة
            </p>
            <div className="h-px w-20 bg-white/30 mx-auto mb-4"></div>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm mx-auto italic">
              "رؤية طموحة بدأت بفكرة، وكبرت لتصبح صرحاً تعليمياً معتمداً يخدم
              جيل المستقبل."
            </p>
          </div>
        </div>

        {/* --- المستوى الثاني: الإدارة --- */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative"
          data-aos="fade-up"
        >
          {[
            { name: "د. عزام خوجلي", role: "الشؤون الأكاديمية", initial: "ع" },
            {
              name: "أ. خوجلي",
              role: "المدير العام للمؤسسة",
              initial: "خ",
              featured: true,
            },
            { name: "أ. هـ.", role: "شؤون الطلاب والتسجيل", initial: "هـ" },
          ].map((admin, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2.5rem] transition-all duration-500 border-2 group
                ${
                  admin.featured
                    ? "bg-white border-red-600 shadow-2xl shadow-red-100 md:-translate-y-6"
                    : "bg-white border-blue-50 shadow-xl shadow-blue-50 hover:border-red-200"
                }`}
            >
              <Briefcase
                className={`w-14 h-14 p-3 rounded-2xl mb-6 mx-auto transition-colors
                ${admin.featured ? "bg-red-600 text-white" : "bg-blue-50 text-blue-600 group-hover:bg-red-50 group-hover:text-red-600"}`}
              />
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 border-2 
                ${admin.featured ? "bg-red-50 border-red-200" : "bg-blue-50 border-blue-100"}`}
              >
                <span
                  className={`text-4xl font-black ${admin.featured ? "text-red-600" : "text-blue-900"}`}
                >
                  {admin.initial}
                </span>
              </div>
              <h4 className="text-2xl font-black text-blue-900 mb-1">
                {admin.name}
              </h4>
              <p
                className={`font-bold text-sm ${admin.featured ? "text-red-600" : "text-blue-500"}`}
              >
                {admin.role}
              </p>
            </div>
          ))}
        </div>

        {/* --- المستوى الثالث: المدرسون --- */}
        <div className="relative mt-24">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full border-2 border-red-600 flex items-center gap-3 text-red-600 font-black shadow-lg z-10">
            <Users size={20} />
            الكادر التعليمي المتميز
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-blue-50 hover:border-red-600 hover:shadow-2xl transition-all duration-500 group text-right"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-900 group-hover:bg-red-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl transition-colors duration-500 shadow-lg">
                    {teacher.initial}
                  </div>
                  <div>
                    <h5 className="font-black text-blue-950 group-hover:text-red-600 transition-colors">
                      {teacher.name}
                    </h5>
                    <p className="text-sm text-gray-500 font-medium">
                      {teacher.subject}
                    </p>
                    <div className="flex gap-1 mt-1 text-red-500">
                      <Star size={12} className="fill-red-500" />
                      <Star size={12} className="fill-red-500" />
                      <Star size={12} className="fill-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
