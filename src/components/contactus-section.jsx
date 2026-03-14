import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الـ Container الرئيسي بلمسة فاتحة وحديثة */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100/70 flex flex-col lg:flex-row border border-blue-50">
          {/* --- الجانب الأيمن: معلومات التواصل (الآن بخلفية فاتحة) --- */}
          <div className="flex-1 p-8 lg:p-16 text-right bg-blue-100">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              يسعدنا تواصلكم معنا
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              نحن هنا للإجابة على كافة استفساراتكم حول التسجيل والمنهج الدراسي.
              تفضلوا بزيارتنا أو تواصلوا معنا عبر القنوات التالية.
            </p>

            <div className="space-y-8">
              {/* العنوان */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-blue-950 font-bold">المقر الرئيسي</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    جمهورية مصر العربية - القاهرة - (مدينة بدر, جوار مدرسة طه
                    حسين)
                  </p>
                </div>
              </div>

              {/* الهاتف والواتساب */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0 border border-green-200">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-blue-950 font-bold">
                    اتصل بنا أو واتساب
                  </h4>
                  <p
                    className="text-green-700 text-sm font-medium mt-1"
                    dir="ltr"
                  >
                    +20 1XX XXX XXXX
                  </p>
                </div>
              </div>

              {/* ساعات العمل */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0 border border-blue-200">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-blue-950 font-bold">مواعيد العمل</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    الأحد - الخميس: 8:00 ص - 3:00 م
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- الجانب الأيسر: نموذج الاتصال (The Form) بدلاً من الخريطة --- */}
          <div className="flex-1 p-8 lg:p-16 bg-white">
            <h3 className="text-2xl font-bold text-blue-950 mb-8 text-right">
              أو اترك لنا رسالة وسنعاود الاتصال بك
            </h3>

            <form className="space-y-6 text-right">
              {/* حقل الاسم */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  اسم ولي الأمر / الطالب
                </label>
                <div className="relative">
                  <User
                    className="absolute map-y-1/2 right-4 text-gray-400"
                    size={20}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  />
                  <input
                    type="text"
                    placeholder="الاسم الثلاثي"
                    className="w-full px-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all outline-none bg-gray-50/50"
                  />
                </div>
              </div>

              {/* حقل الهاتف */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  رقم الهاتف (واتساب)
                </label>
                <div className="relative">
                  <Phone
                    className="absolute map-y-1/2 right-4 text-gray-400"
                    size={20}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  />
                  <input
                    type="tel"
                    placeholder="+20 XXXXXXXXXX"
                    dir="ltr"
                    className="w-full px-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all outline-none bg-gray-50/50"
                  />
                </div>
              </div>

              {/* حقل الرسالة */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  الاستفسار
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute top-4 right-4 text-gray-400"
                    size={20}
                  />
                  <textarea
                    placeholder="اكتب استفسارك هنا حول التسجيل أو الرسوم..."
                    rows={4}
                    className="w-full px-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all outline-none bg-gray-50/50 resize-none"
                  />
                </div>
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200"
              >
                <span>إرسال الطلب</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
