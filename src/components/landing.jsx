"use client";
import { useState } from "react";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import WhyUsSection from "./whyus-section";
import StagesSection from "./stage-section";
import StatsSection from "./status-section";
import ContactSection from "./contactus-section";
import TeamSection from "./sttaf-section";
import Footer from "./footer";

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-semibold text-blue-800 mb-3">{children}</h2>
  );
}

export default function Landing() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // simple client-side demo: open mail client
    const subject = encodeURIComponent("تواصل من موقع مؤسسة آمال كباشي");
    const body = encodeURIComponent(
      `الاسم: ${form.name}\nالبريد: ${form.email}\nالرسالة:\n${form.message}`,
    );
    window.location.href = `mailto:info@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="">
      <HeroSection />

      <WhyUsSection />

      <AboutSection />

      <StagesSection />

      <StatsSection />

      <TeamSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
