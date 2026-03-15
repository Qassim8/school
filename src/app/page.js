"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Landing from "../components/landing";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slow animation
      once: true, // Animate only once
      offset: 100, // Trigger animation 100px before element enters viewport
    });
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      <Header />
      <Landing />
    </div>
  );
}
