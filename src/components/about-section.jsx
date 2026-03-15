import React from "react";
import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react"; // تأكد من تثبيت lucide-react
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AboutSection = () => {
  const ref = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-24  overflow-hidden animate-on-scroll"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="flex-1 text-right order-2 lg:order-1">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 mb-8 leading-snug">
              من بذرة طموح.. <br />
              <span className="text-blue-600">إلى صرح تعليمي متكامل</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                بدأت رحلتنا بفكرة بسيطة وبذرة صغيرة؛ حيث انطلقنا كمعهد تعليمي
                متواضع يهدف لتمكين الطلاب وتطوير مهاراتهم في بيئة داعمة.
              </p>

              <p className="bg-blue-50 p-4 border-r-4 border-blue-500 rounded-l-lg italic">
                "لم نكن نرى الجدران الأربعة، بل كنا نرى المستقبل في عيون
                طلابنا."
              </p>

              <p>
                بفضل الإصرار والجودة، كبر الحلم لنتحول اليوم إلى مؤسسة تعليمية
                رائدة، تفتخر بكونها **معتمدة لدى السفارة السودانية في جمهورية
                مصر العربية**، ومسجلة رسمياً تحت مظلة **وزارة التضامن
                الاجتماعي**.
              </p>
            </div>

            {/* نقاط الاعتماد الرسمي - بطاقات صغيرة */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white flex items-start gap-3 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <CheckCircle className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900">اعتماد السفارة</h4>
                  <p className="text-sm text-gray-500">
                    منهج سوداني معتمد بالكامل
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-start gap-3 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <Award className="text-blue-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900">ترخيص رسمي</h4>
                  <p className="text-sm text-gray-500">
                    مسجلة بوزارة التضامن الاجتماعي
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: الجرافيك والقصة البصرية */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="relative">
              {/* صورة رئيسية تعبر عن البيئة التعليمية */}
              <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative z-10 h-150">
                <div className="aspect-3/4 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-300">صورة المؤسسة الحالية</span>
                </div>
              </div>

              {/* بطاقة "البداية" العائمة */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border-b-4 border-blue-500 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">البداية</p>
                    <p className="font-bold text-blue-900">معهد صغير</p>
                  </div>
                </div>
              </div>

              {/* بطاقة "الآن" العائمة */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 border-b-4 border-green-500 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">اليوم</p>
                    <p className="font-bold text-blue-900">مؤسسة معتمدة</p>
                  </div>
                </div>
              </div>

              {/* العناصر الزخرفية */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
