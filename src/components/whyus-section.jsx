import React from "react";
import { Target, Users, BriefcaseBusiness, School } from "lucide-react"; // تأكد من تثبيت lucide-react

const WhyUsSection = () => {
  const features = [
    {
      icon: Target,
      title: "منهج سوداني معتمد",
      description:
        "تدريس المنهج السوداني الرسمي بالكامل، مما يضمن توافقاً تاماً للطلاب.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Users,
      title: "نخبة من المعلمين",
      description: "كادر تعليمي تربوي متميز بخبرة طويلة في تدريس المناهج.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: BriefcaseBusiness,
      title: "تأهيل جامعي",
      description:
        "برامج خاصة لتأهيل طلاب الثانوي لاجتياز امتحانات الشهادة بنجاح.",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      icon: School,
      title: "بيئة محفزة",
      description: "فصول مجهزة ووسائل تعليمية حديثة تدعم الإبداع والتركيز.",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section className="relative py-16 bg-white">
      {/* هذا الـ -mt-16 يجعل السيكشن يرتفع قليلاً فوق الـ Hero لكسر الرتابة */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* شبكة البطاقات (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md shadow-blue-100 border border-blue-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-100 group text-right"
            >
              {/* الأيقونة داخل خلفية دائرية */}
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
              >
                <feature.icon size={32} strokeWidth={1.5} />
              </div>

              {/* العنوان */}
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {feature.title}
              </h3>

              {/* الوصف */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* سطر تحفيزي سفلي بسيط (اختياري) */}
        <div className="text-center mt-16">
          <p className="text-blue-800 font-medium">
            نحن لا ندرس فقط، نحن نعدُّ جيلاً للمستقبل.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
