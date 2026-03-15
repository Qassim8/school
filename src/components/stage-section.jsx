import React from "react";
import { Baby, School, GraduationCap, ArrowLeft } from "lucide-react";

const StagesSection = () => {
  const stages = [
    {
      title: "المرحلة الثانوية",
      subtitle: "طريقك نحو الجامعة",
      description:
        "تركيز مكثف على المنهج السوداني مع حصص تقوية واختبارات تجريبية دورية لضمان التفوق في الشهادة الثانوية.",
      icon: GraduationCap,
      features: ["مسار علمي وأدبي", "توجيه أكاديمي", "معامل مجهزة"],
      color: "blue",
    },
    {
      title: "المرحلة المتوسطة والابتدائية",
      subtitle: "بناء التأسيس المتين",
      description:
        "نهتم بتطوير المهارات الأساسية في اللغة والرياضيات والعلوم، مع غرس القيم التربوية والوطنية.",
      icon: School,
      features: ["بيئة تعليمية آمنة", "أنشطة لا صفية", "متابعة دورية"],
      color: "blue",
    },
    {
      title: "رياض الأطفال (KG)",
      subtitle: "خطواتهم الأولى بحب",
      description:
        "نعتمد أساليب التعلم باللعب والترفيه لتنمية خيال الطفل وقدراته الحركية والذهنية في مراحل نموه الأولى.",
      icon: Baby,
      features: ["منتسوري مبسط", "رعاية خاصة", "تنمية مواهب"],
      color: "blue",
    },
  ];

  return (
    <section className="py-24 bg-white" data-aos="zoom-in" id="stage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-3 sm:mb-4">
            برامجنا التعليمية المتكاملة
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">
            نرافق أبناءنا في كافة مراحلهم الدراسية، من الخطوات الأولى في الروضة
            وحتى بوابة الجامعة.
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 group"
            >
              <div className="p-6 sm:p-8">
                {/* Icon & Title */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:rotate-6 transition-transform">
                  <stage.icon size={24} className="sm:w-[30px] sm:h-[30px]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-blue-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  {stage.subtitle}
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm leading-relaxed">
                  {stage.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {stage.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Action Link */}
                {/* <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all group-hover:text-blue-700">
                  <span>المزيد عن المنهج</span>
                  <ArrowLeft size={18} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
