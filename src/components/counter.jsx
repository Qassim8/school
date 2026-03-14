"use client"; // ضروري لأننا بنستخدم hooks
import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // مراقبة السيكشن: يبدأ العد فقط لما يظهر قدام المستخدم
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 },
    );

    if (countRef.current) observer.observe(countRef.current);

    if (hasStarted) {
      let start = 0;
      // استخراج الرقم من النص (مثلاً +1,200 تصير 1200)
      const finalValue = parseInt(endValue.replace(/[,+]/g, ""));
      const increment = finalValue / (duration / 16); // 16ms لـ 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          setCount(finalValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={countRef}>
      {/* إعادة صياغة الرقم ليكون بنفس التنسيق الأصلي */}
      {endValue.includes("+") ? "+" : ""}
      {count.toLocaleString()}
      {endValue.includes("%") ? "%" : ""}
    </span>
  );
};

export default AnimatedCounter;
