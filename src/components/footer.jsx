import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-blue-950 text-white pt-24 pb-10 relative overflow-hidden"
      data-aos="fade"
    >
      {/* خط علوي أحمر متدرج لربط الهوية */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right mb-20">
          {/* العمود الأول: الشعار والرؤية */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="شعار مؤسسة آمال كباشي"
                width={80}
                height={80}
                className="brightness-0 invert opacity-90" // جعل الشعار أبيض ليتناسب مع الخلفية الداكنة
              />
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed font-medium">
              مؤسسة تعليمية رائدة معتمدة لدى السفارة السودانية في مصر، نسعى
              لبناء جيل متميز أكاديمياً وتربوياً من خلال بيئة تعليمية ملهمة.
            </p>
            {/* أيقونات السوشيال ميديا بالأحمر */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all duration-300 border border-white/10 hover:border-red-600 group"
                >
                  <Icon
                    size={18}
                    className="text-red-500 group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة بخط أحمر جانبي */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-red-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-blue-100/80 text-sm font-bold">
              {[
                "عن المدرسة",
                "المراحل الدراسية",
                "طاقم العمل",
                "شروط التسجيل",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الأقسام */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              أقسامنا التعليمية
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-red-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-blue-100/80 text-sm font-bold">
              {[
                "رياض الأطفال (KG)",
                "المرحلة الابتدائية",
                "المرحلة المتوسطة",
                "المرحلة الثانوية",
              ].map((dept, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: معلومات التواصل بالألوان الجديدة */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-red-600 rounded-full"></span>
            </h4>
            <ul className="space-y-6 text-blue-100/80 text-sm font-bold">
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={20}
                  className="text-red-600 shrink-0 group-hover:animate-bounce"
                />
                <span>القاهرة، مدينة بدر، جوار مدرسة طه حسين</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="text-red-600 shrink-0" />
                <span
                  dir="ltr"
                  className="group-hover:text-white transition-colors"
                >
                  +20 1XX XXX XXXX
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="text-red-600 shrink-0" />
                <span
                  dir="ltr"
                  className="group-hover:text-white transition-colors"
                >
                  info@amal-kabashi.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر بتصميم أنيق */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-blue-300/50 text-[10px] uppercase tracking-[2px] gap-6">
          <p>© 2026 مؤسسة آمال كباشي التعليمية. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            صُنع بكل{" "}
            <Heart
              size={14}
              className="text-red-600 fill-red-600 animate-pulse"
            />{" "}
            من أجل مستقبل أفضل
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
