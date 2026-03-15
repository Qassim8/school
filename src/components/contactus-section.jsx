"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
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
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "الاسم يجب أن يكون 3 أحرف على الأقل";
    } else if (!/^[\u0600-\u06FF\s]+$/.test(formData.name.trim())) {
      newErrors.name = "الاسم يجب أن يحتوي على أحرف عربية فقط";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^(\+20|0)?1[0-2,5]\d{8}$/.test(formData.phone.trim())) {
      newErrors.phone = "رقم الهاتف غير صحيح (مثال: +20 1XX XXX XXXX)";
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = "service_yzadpdf";
      const templateId = "template_j7onfw8";

      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.message,
        to_email: "mohamedalgasim123@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-24 bg-white" data-aos="slide-up" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الـ Container الرئيسي بلمسة فاتحة وحديثة */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100/70 flex flex-col lg:flex-row border border-blue-50">
          {/* --- الجانب الأيمن: معلومات التواصل (الآن بخلفية فاتحة) --- */}
          <div className="flex-1 p-6 sm:p-8 lg:p-16 text-right bg-blue-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3 sm:mb-4">
              يسعدنا تواصلكم معنا
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-10 leading-relaxed text-sm sm:text-base">
              نحن هنا للإجابة على كافة استفساراتكم حول التسجيل والمنهج الدراسي.
              تفضلوا بزيارتنا أو تواصلوا معنا عبر القنوات التالية.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {/* العنوان */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-blue-950 font-bold text-sm sm:text-base">
                    المقر الرئيسي
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    جمهورية مصر العربية - القاهرة - (مدينة بدر, جوار مدرسة طه
                    حسين)
                  </p>
                </div>
              </div>

              {/* الهاتف والواتساب */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0 border border-green-200">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-blue-950 font-bold text-sm sm:text-base">
                    اتصل بنا أو واتساب
                  </h4>
                  <p
                    className="text-green-700 text-xs sm:text-sm font-medium mt-1"
                    dir="ltr"
                  >
                    +20 1XX XXX XXXX
                  </p>
                </div>
              </div>

              {/* ساعات العمل */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0 border border-blue-200">
                  <Clock size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-blue-950 font-bold text-sm sm:text-base">
                    مواعيد العمل
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    الأحد - الخميس: 8:00 ص - 3:00 م
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- الجانب الأيسر: نموذج الاتصال (The Form) بدلاً من الخريطة --- */}
          <div className="flex-1 p-6 sm:p-8 lg:p-16 bg-white">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-6 sm:mb-8 text-right">
              أو اترك لنا رسالة وسنعاود الاتصال بك
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">
                  تم استلام رسالتكم بنجاح سنتواصل معكم في اقرب وقت
                </span>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-800">
                <AlertCircle size={20} />
                <span className="text-sm font-medium">
                  المعذرة فشل ارسال الرسالة حاول مرة اخرى
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 text-right"
            >
              {/* حقل الاسم */}
              <div className="relative">
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">
                  اسم ولي الأمر / الطالب <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    className="absolute map-y-1/2 right-3 sm:right-4 text-gray-400"
                    size={18}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="الاسم الثلاثي"
                    className={`w-full px-10 sm:px-12 py-3 sm:py-3.5 border rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all outline-none bg-gray-50/50 text-sm sm:text-base ${
                      errors.name
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.name && (
                  <div className="flex items-center gap-1 mt-1 text-red-600 text-xs">
                    <AlertCircle size={14} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* حقل الهاتف */}
              <div className="relative">
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">
                  رقم الهاتف (واتساب) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone
                    className="absolute map-y-1/2 right-3 sm:right-4 text-gray-400"
                    size={18}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+20 XXXXXXXXXX"
                    dir="ltr"
                    className={`w-full px-10 sm:px-12 py-3 sm:py-3.5 border rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all outline-none bg-gray-50/50 text-sm sm:text-base ${
                      errors.phone
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <div className="flex items-center gap-1 mt-1 text-red-600 text-xs">
                    <AlertCircle size={14} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              {/* حقل الرسالة */}
              <div className="relative">
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 block">
                  الاستفسار <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب استفسارك هنا حول التسجيل أو الرسوم..."
                    rows={3}
                    className={`w-full px-10 sm:px-12 py-3 sm:py-3.5 border rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all outline-none bg-gray-50/50 resize-none text-sm sm:text-base ${
                      errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.message && (
                  <div className="flex items-center gap-1 mt-1 text-red-600 text-xs">
                    <AlertCircle size={14} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 disabled:hover:translate-y-0 shadow-lg shadow-blue-200 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <span>إرسال الطلب</span>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
