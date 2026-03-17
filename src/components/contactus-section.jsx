"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    emailjs.init("your_public_key");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    } else if (formData.name.trim().length < 8) {
      newErrors.name = "الاسم يجب أن يكون 8 أحرف على الأقل";
    } else if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(formData.name.trim())) {
      newErrors.name = "الاسم يجب أن يحتوي على أحرف عربية أو إنجليزية فقط";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^(\+20|0)?1[0-2,5]\d{8}$/.test(formData.phone.trim())) {
      newErrors.phone = "رقم الهاتف غير صحيح (مصري فقط)";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "الرسالة يجب أن تكون 10 أحرف على الأقل";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const serviceId = "service_yzadpdf";
      const templateId = "template_j7onfw8";
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.message,
        to_email: "mohamedalgasim123@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams);
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50" data-aos="slide-up" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100/50 flex flex-col lg:flex-row border-4 border-white">
          {/* --- الجانب الأيمن: معلومات التواصل (خلفية زرقاء داكنة مع لمسات حمراء) --- */}
          <div className="lg:w-[40%] p-8 lg:p-12 bg-blue-950 text-white relative overflow-hidden">
            {/* زخرفة خلفية حمراء */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <span className="text-red-500 font-black text-sm tracking-widest uppercase mb-4 block">
                تواصل مباشر
              </span>
              <h2 className="text-3xl font-black mb-6 leading-tight">
                يسعدنا دائمًا <br />{" "}
                <span className="text-red-500">استقبال استفساراتكم</span>
              </h2>
              <p className="text-blue-100/70 mb-12 text-sm leading-relaxed">
                نحن هنا للإجابة على كافة استفساراتكم حول التسجيل والمنهج
                الدراسي. تفضلوا بزيارتنا أو تواصلوا معنا.
              </p>

              <div className="space-y-8">
                {/* العنوان */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1">
                      المقر الرئيسي
                    </h4>
                    <p className="text-white text-sm font-medium">
                      مدينة بدر، جوار مدرسة طه حسين
                    </p>
                  </div>
                </div>

                {/* الهاتف */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 shrink-0 border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1">
                      اتصل بنا أو واتساب
                    </h4>
                    <p className="text-white text-sm font-medium" dir="ltr">
                      +20 1XX XXX XXXX
                    </p>
                  </div>
                </div>

                {/* المواعيد */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 shrink-0 border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1">
                      ساعات العمل
                    </h4>
                    <p className="text-white text-sm font-medium">
                      الأحد - الخميس: 8ص - 3م
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- الجانب الأيسر: الفورم --- */}
          <div className="flex-1 p-8 lg:p-16 bg-white">
            <h3 className="text-2xl font-black text-blue-950 mb-8 text-right">
              أرسل رسالة <span className="text-red-600">سريعة</span>
            </h3>

            {isSubmitted && (
              <div className="mb-8 p-4 bg-green-50 border-r-4 border-green-500 rounded-xl flex items-center gap-3 text-green-800 animate-bounce">
                <CheckCircle size={20} />
                <span className="text-sm font-bold">
                  تم الإرسال بنجاح! سنتواصل معك قريباً.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              {/* الحقول مع تأثير Focus أحمر */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-blue-900 mr-2">
                  اسم ولي الأمر / الطالب
                </label>
                <div className="relative">
                  <User
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="الاسم الثلاثي"
                    className={`text-slate-700 w-full pr-12 pl-4 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all focus:bg-white focus:border-red-600 ${errors.name ? "border-red-300" : "border-transparent"}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-blue-900 mr-2">
                  رقم الهاتف <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+20 XXX XXX XXXX"
                    dir="ltr"
                    className={`text-slate-700 w-full pr-12 pl-4 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all focus:bg-white focus:border-red-600 text-right ${errors.phone ? "border-red-300" : "border-transparent"}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-blue-900 mr-2">
                  رسالتك <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute right-4 top-4 text-gray-400"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="كيف يمكننا مساعدتك؟"
                    rows={4}
                    className={`text-slate-700 w-full pr-12 pl-4 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all focus:bg-white focus:border-red-600 resize-none ${errors.message ? "border-red-300" : "border-transparent"}`}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-blue-900 text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-red-200 disabled:opacity-50"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب الآن"}
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
