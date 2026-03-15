import React from "react";
import { Award, Briefcase, Users, Star } from "lucide-react";

const TeamSection = () => {
  // بيانات افتراضية للمدرسين - يمكن استبدالها ببيانات حقيقية
  const teachers = [
    { name: "أ. محمد صلاح", subject: "اللغة العربية", initial: "م" },
    { name: "أ. فاطمة عمر", subject: "الرياضيات", initial: "ف" },
    { name: "د. علي حسن", subject: "الفيزياء", initial: "ع" },
    { name: "أ. سارة سعيد", subject: "اللغة الإنجليزية", initial: "س" },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-blue-50/50 relative overflow-hidden"
      id="team"
    >
      {/* خلفية جمالية خفيفة */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <svg width="100%" h="100%">
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#1e3a8a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="mb-12 sm:mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-4">
            القيادة والكفاءة
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-blue-900 mb-4 sm:mb-6">
            تعرف على صناع التميز
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
            نخبة من التربويين والإداريين كرسوا خبراتهم لبناء جيل قيادي مبدع في
            بيئة تعليمية آمنة وملهمة.
          </p>
        </div>

        {/* --- المستوى الأول: المؤسس (The Founder) --- */}
        <div
          className="flex justify-center mb-12 sm:mb-16 relative"
          data-aos="fade-up"
        >
          {/* خط ربط عمودي */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-12 sm:h-16 bg-blue-200"></div>

          <div className="bg-blue-900 text-white p-6 sm:p-8 lg:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-200 w-full max-w-lg relative transform hover:-translate-y-2 transition-transform duration-300">
            <Award
              className="absolute -top-6 -right-6 text-yellow-400 bg-white p-2 rounded-full shadow-lg"
              size={50}
            />
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/20">
              {/* هنا يمكن وضع صورة المؤسس */}
              <span className="text-5xl font-black text-white">آ</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              أمال الكباشي
            </h3>
            <p className="text-blue-200 font-medium text-base sm:text-lg uppercase tracking-wider">
              المؤسس ورئيس مجلس الإدارة
            </p>
            <p className="text-blue-100 mt-4 text-sm leading-relaxed max-w-sm mx-auto">
              رؤية طموحة بدأت بفكرة، وكبرت لتصبح صرحاً تعليمياً معتمداً يخدم جيل
              المستقبل.
            </p>
          </div>
        </div>

        {/* --- المستوى الثاني: الإدارة (Administration) --- */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* خطوط ربط أفقية وعمودية (للـ Desktop) */}
          <div className="hidden md:block absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-1 h-12 sm:h-16 bg-blue-200 z-0"></div>

          {/* الإداري الأول (عزام خوجلي) */}
          <div
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-100 border border-blue-50 relative group transition-all hover:border-blue-100 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Briefcase className="w-12 h-12 text-blue-600 bg-blue-100 p-2.5 rounded-2xl mb-6 mx-auto" />
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-blue-100">
              {/* صورة الإداري */}
              <span className="text-4xl font-bold text-blue-900">ع</span>
            </div>
            <h4 className="text-2xl font-bold text-blue-950 mb-1">
              د. عزام خوجلي
            </h4>
            <p className="text-blue-600 font-medium text-sm">
              الشؤون الأكاديمية
            </p>
          </div>

          {/* إداري ثاني (مثال) */}
          <div
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-100 border border-blue-50 relative group transition-all hover:border-blue-100 hover:shadow-2xl md:-translate-y-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Briefcase className="w-12 h-12 text-blue-600 bg-blue-100 p-2.5 rounded-2xl mb-6 mx-auto" />
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-blue-100">
              <span className="text-4xl font-bold text-blue-900">أ</span>
            </div>
            <h4 className="text-2xl font-bold text-blue-950 mb-1">أ. خوجلي</h4>
            <p className="text-blue-600 font-medium text-sm">
              المدير العام للمؤسسة
            </p>
          </div>

          {/* إداري ثالث (مثال) */}
          <div
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-100 border border-blue-50 relative group transition-all hover:border-blue-100 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Briefcase className="w-12 h-12 text-blue-600 bg-blue-100 p-2.5 rounded-2xl mb-6 mx-auto" />
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-blue-100">
              <span className="text-4xl font-bold text-blue-900">هـ</span>
            </div>
            <h4 className="text-2xl font-bold text-blue-950 mb-1">أ.</h4>
            <p className="text-blue-600 font-medium text-sm">
              شؤون الطلاب والتسجيل
            </p>
          </div>
        </div>

        {/* --- المستوى الثالث: المدرسون (Teachers) --- */}
        <div className="relative mt-16 sm:mt-24">
          {/* عنوان فرعي */}
          <div className="relative -top-6 sm:absolute sm:-top-12 left-1/2 -translate-x-1/2 bg-blue-50 px-4 sm:px-6 py-2 rounded-full border border-blue-100 flex items-center gap-2 text-blue-800 font-bold shadow-sm z-10 text-sm sm:text-base">
            <Users size={16} className="sm:w-5 sm:h-5" />
            الكادر التعليمي المتميز
          </div>

          {/* شبكة المدرسين (Grid) */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white/70 p-4 sm:p-6 rounded-2xl border border-blue-100/50 hover:bg-white hover:shadow-lg transition-all group text-right"
                data-aos="fade-up"
                data-aos-delay={700 + index * 100}
              >
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl sm:text-2xl shrink-0">
                    {teacher.initial}
                  </div>
                  <div className="text-center sm:text-right">
                    <h5 className="font-bold text-blue-950 group-hover:text-blue-700 transition-colors text-sm sm:text-base">
                      {teacher.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {teacher.subject}
                    </p>
                    <div className="flex gap-0.5 mt-1 text-yellow-400 justify-center sm:justify-start">
                      <Star size={10} className="fill-yellow-400" />
                      <Star size={10} className="fill-yellow-400" />
                      <Star size={10} className="fill-yellow-400" />
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
