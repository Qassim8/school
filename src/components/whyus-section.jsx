import React from "react";
import { Target, Users, BriefcaseBusiness, School } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Target,
      title: "منهج سوداني معتمد",
      description:
        "تدريس المنهج السوداني الرسمي بالكامل، مما يضمن توافقاً تاماً ومعادلة أكاديمية صحيحة.",
      // تخصيص الألوان لكل بطاقة لتبديل الأدوار بين الأحمر والأزرق
      accentColor: "bg-red-600",
      iconColor: "text-red-600",
      bgLight: "bg-red-50",
    },
    {
      icon: Users,
      title: "نخبة من المعلمين",
      description:
        "كادر تعليمي تربوي متميز بخبرة طويلة في تدريس المناهج السودانية والتعامل مع الطلاب.",
      accentColor: "bg-blue-900",
      iconColor: "text-blue-900",
      bgLight: "bg-blue-50",
    },
    {
      icon: BriefcaseBusiness,
      title: "تأهيل جامعي",
      description:
        "برامج خاصة مكثفة لتأهيل طلاب المرحلة الثانوية لاجتياز امتحانات الشهادة بتفوق.",
      accentColor: "bg-red-600",
      iconColor: "text-red-600",
      bgLight: "bg-red-50",
    },
    {
      icon: School,
      title: "بيئة محفزة",
      description:
        "فصول مجهزة بأحدث الوسائل التعليمية التي تدعم الإبداع والتركيز الأكاديمي.",
      accentColor: "bg-blue-900",
      iconColor: "text-blue-900",
      bgLight: "bg-blue-50",
    },
  ];

  return (
    <section
      className="relative py-20 bg-white overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-100/50 border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-red-100 text-right relative overflow-hidden"
            >
              {/* لمسة خلفية تظهر عند الحوام (Hover) */}
              <div
                className={`absolute -bottom-12 -left-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 ${feature.accentColor}`}
              ></div>

              {/* الأيقونة بتصميم "Badge" */}
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bgLight} ${feature.iconColor} flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-sm`}
              >
                <feature.icon size={32} strokeWidth={2} />
              </div>

              {/* العنوان بخط عريض */}
              <h3 className="text-xl font-black text-blue-950 mb-4 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>

              {/* الوصف */}
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>

              {/* خط سفلي يظهر عند الحوام */}
              <div
                className={`mt-6 w-10 h-1 rounded-full transition-all duration-500 group-hover:w-full ${feature.accentColor}`}
              ></div>
            </div>
          ))}
        </div>

        {/* السطر التحفيزي السفلي */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-blue-50 px-8 py-3 rounded-full border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <p className="text-blue-900 font-black text-sm sm:text-base">
              نحن لا ندرس فقط، نحن نعدُّ جيلاً للمستقبل.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
