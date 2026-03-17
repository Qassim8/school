import React from "react";
import { Baby, School, GraduationCap, Check } from "lucide-react";

const StagesSection = () => {
  const stages = [
    {
      title: "المرحلة الثانوية",
      subtitle: "طريقك نحو الجامعة",
      description:
        "تركيز مكثف على المنهج السوداني مع حصص تقوية واختبارات تجريبية دورية لضمان التفوق في الشهادة الثانوية.",
      icon: GraduationCap,
      features: ["مسار علمي وأدبي", "توجيه أكاديمي", "معامل مجهزة"],
    },
    {
      title: "المرحلة المتوسطة والابتدائية",
      subtitle: "بناء التأسيس المتين",
      description:
        "نهتم بتطوير المهارات الأساسية في اللغة والرياضيات والعلوم، مع غرس القيم التربوية والوطنية.",
      icon: School,
      features: ["بيئة تعليمية آمنة", "أنشطة لا صفية", "متابعة دورية"],
    },
    {
      title: "رياض الأطفال (KG)",
      subtitle: "خطواتهم الأولى بحب",
      description:
        "نعتمد أساليب التعلم باللعب والترفيه لتنمية خيال الطفل وقدراته الحركية والذهنية في مراحل نموه الأولى.",
      icon: Baby,
      features: ["منتسوري مبسط", "رعاية خاصة", "تنمية مواهب"],
    },
  ];

  return (
    <section className="py-24 bg-white" data-aos="zoom-in" id="stage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - الهيدر بتطعيم أحمر */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-sm tracking-widest mb-3 block">
            مستقبل أبنائنا أمانة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 mb-6">
            برامجنا التعليمية المتكاملة
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-[2.5rem] bg-blue-50 transition-all duration-500 border-2 border-red-100 shadow-lg shadow-red-50 hover:border-red-500 hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-2"
            >
              {/* Icon Container - خلفية حمراء للأيقونة */}
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200 group-hover:rotate-10 transition-transform duration-500">
                <stage.icon size={32} />
              </div>

              <h3 className="text-2xl font-black text-blue-900 mb-2">
                {stage.title}
              </h3>

              <p className="font-bold text-red-600 mb-4 text-sm uppercase tracking-wide">
                {stage.subtitle}
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                {stage.description}
              </p>

              {/* Features List - نقاط زرقاء للتوازن */}
              <ul className="space-y-4">
                {stage.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-blue-900 font-bold text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* لمسة جمالية في زاوية البوكس */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-red-600/5 rounded-br-full -z-10 transition-all group-hover:bg-red-600/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
