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
      className="relative py-20 bg-blue-900 overflow-hidden"
      data-aos="fade-down"
    >
      {/* عناصر زخرفية في الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group transition-transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl bg-blue-800/50 border border-blue-700 text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <stat.icon size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                <AnimatedCounter endValue={stat.value} />
              </h3>
              <p className="text-blue-200 font-medium text-sm sm:text-lg uppercase tracking-wide">
                {stat.label}
              </p>

              {/* خط ديكوري صغير */}
              <div className="mt-3 sm:mt-4 w-8 sm:w-12 h-1 bg-blue-500 mx-auto rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
