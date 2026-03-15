import React from "react";
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
      className="bg-blue-950 text-white pt-20 pb-10 relative overflow-hidden"
      data-aos="fade"
    >
      {/* لمسة فنية في الخلفية */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right mb-16">
          {/* العمود الأول: عن المؤسسة */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-bold">مؤسسة آمال كباشي</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              مؤسسة تعليمية رائدة معتمدة لدى السفارة السودانية في مصر، نسعى
              لبناء جيل متميز أكاديمياً وتربوياً من خلال بيئة تعليمية ملهمة
              ومبتكرة.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-800"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-800"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-800"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  عن المدرسة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  المراحل الدراسية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  طاقم العمل
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  شروط التسجيل
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: المراحل الدراسية */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">
              أقسامنا
            </h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li>رياض الأطفال (KG)</li>
              <li>المرحلة الابتدائية</li>
              <li>المرحلة المتوسطة</li>
              <li>المرحلة الثانوية</li>
            </ul>
          </div>

          {/* العمود الرابع: معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">
              اتصل بنا
            </h4>
            <ul className="space-y-4 text-blue-200 text-sm" dir="ltr">
              <li className="flex items-center gap-3">
                <span>القاهرة، جمهورية مصر العربية</span>
                <MapPin size={16} className="text-blue-500" />
              </li>
              <li className="flex items-center gap-3">
                <span>+20 1XX XXX XXXX</span>
                <Phone size={16} className="text-blue-500" />
              </li>
              <li className="flex items-center gap-3 justify-start">
                <span>info@reyada-school.com</span>
                <Mail size={16} className="text-blue-500" />
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-blue-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-blue-400 text-xs gap-4">
          <p>© 2026 مؤسسة آمال كباشي. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            صُنع بكل <Heart size={12} className="text-red-500 fill-red-500" />{" "}
            لجيل المستقبل
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
