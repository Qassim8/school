import React from "react";
import { Users2, GraduationCap, Award, Calendar } from "lucide-react";
import AnimatedCounter from "./counter";

const StatsSection = () => {
  const stats = [
    {
      label: "طالب وطالبة",
      value: "1,200+",
      icon: Users2,
      delay: "0",
    },
    {
      label: "نسبة النجاح",
      value: "98%",
      icon: Award,
      delay: "100",
    },
    {
      label: "قبول جامعي",
      value: "450+",
      icon: GraduationCap,
      delay: "200",
    },
    {
      label: "سنوات الخبرة",
      value: "10+",
      icon: Calendar,
      delay: "300",
    },
  ];

  return (
    <section
      className="relative py-24 bg-blue-950 overflow-hidden"
      data-aos="fade-down"
    >
      {/* عناصر زخرفية مطعمة بالأحمر والأزرق */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group transition-all duration-500 hover:-translate-y-3"
            >
              {/* أيقونة بخلفية حمراء عند التحويم وحدود حمراء دائمة */}
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 mb-6 rounded-[22px] bg-white/5 border-2 border-red-600/30 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-500">
                <stat.icon size={28} className="sm:w-10 sm:h-10" />
              </div>

              {/* الأرقام باللون الأبيض الصريح لتبرز فوق الأزرق */}
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter">
                <AnimatedCounter endValue={stat.value} />
              </h3>

              {/* الوصف باللون الأحمر الخفيف */}
              <p className="text-red-100/80 font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
                {stat.label}
              </p>

              {/* خط ديكوري أحمر يظهر عند التحويم */}
              <div className="mt-5 w-10 h-1.5 bg-red-600 mx-auto rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
