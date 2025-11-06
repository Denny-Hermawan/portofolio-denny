"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fiska POS screenshots
  const fiskaScreenshots = [
    "/images/fiska-1.jpg",
    "/images/fiska-2.jpg",
    "/images/fiska-3.jpg",
    "/images/fiska-4.jpg"
  ];

  // Oshe Coffee screenshots
  const osheScreenshots = [
    "/images/oshe-1.jpg",
    "/images/oshe-2.jpg",
    "/images/oshe-3.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto slide for Fiska POS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % fiskaScreenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = ["Tentang", "Proyek", "Pengalaman", "Keahlian", "Kontak"];

  return (
    <main className="min-h-screen bg-black text-gray-300 selection:bg-white/20 overflow-x-hidden" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '-0.05em' }}>
      
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-black text-white tracking-tighter hover:scale-110 transition-transform duration-300 relative group" style={{ letterSpacing: '-0.06em' }}>
            <span className="relative z-10">Denny<span className="text-white">.DEV</span></span>
            <span className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="hidden md:flex space-x-8 text-sm font-bold">
            {navLinks.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-white transition-all duration-300 relative group ${activeSection === item.toLowerCase() ? 'text-white' : ''}`}
                style={{ letterSpacing: '-0.04em' }}
              >
                <span className="text-gray-500 font-mono text-xs mr-1">0{idx + 1}.</span>
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white font-bold py-2 border-b border-white/5 last:border-0 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ letterSpacing: '-0.04em' }}
                >
                  <span className="text-gray-500 font-mono text-xs mr-2">0{idx + 1}.</span>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-8 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-7/12 flex flex-col items-start text-left space-y-6">
            <div className="overflow-hidden">
              <h2 className="text-white font-bold text-lg tracking-tight animate-slide-up" style={{ letterSpacing: '-0.04em' }}>
                Halo, nama saya
              </h2>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-none animate-slide-up-delay-1" style={{ letterSpacing: '-0.08em' }}>
                Denny<br/>Hermawan<span className="text-white">.</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-gray-500 leading-tight animate-slide-up-delay-2" style={{ letterSpacing: '-0.07em' }}>
                Software Developer<span className="text-white">.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-medium animate-slide-up-delay-3" style={{ letterSpacing: '-0.04em' }}>
              Spesialis dalam pengembangan aplikasi <span className="text-white font-bold hover:text-gray-200 transition-colors cursor-default">Flutter</span>, serta website modern menggunakan <span className="text-white font-bold hover:text-gray-200 transition-colors cursor-default">Laravel</span> dan <span className="text-white font-bold hover:text-gray-200 transition-colors cursor-default">Next.js</span>.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-4 animate-slide-up-delay-4">
              <a href="#proyek" className="group relative w-full sm:w-auto text-center px-10 py-4 bg-white text-black font-black rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/30" style={{ letterSpacing: '-0.04em' }}>
                <span className="relative z-10">Lihat Proyek</span>
                <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="/CV DENNY HERMAWAN - TERBARU.pdf" target="_blank" className="group relative w-full sm:w-auto text-center px-10 py-4 border-2 border-white text-white rounded-lg font-black overflow-hidden transition-all duration-300 hover:scale-105 hover:text-black" style={{ letterSpacing: '-0.04em' }}>
                <span className="relative z-10">Unduh CV</span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="md:w-5/12 flex justify-center md:justify-end relative w-full group">
            <div className="relative w-64 h-80 sm:w-72 sm:h-[400px] md:w-80 md:h-[440px]">
              <div className="absolute inset-0 border-2 border-white rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/20" />
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                <img 
                  src="/images/foto-denny.jpg" 
                  alt="Foto Denny Hermawan" 
                  className="w-full h-full object-cover object-top md:object-center transition-all duration-700 scale-100 group-hover:scale-110 brightness-100 group-hover:brightness-110 contrast-100 group-hover:contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-all duration-500" />
                <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/20 ring-inset transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="tentang" className="relative py-24 px-6 md:px-8 lg:px-12 z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="flex items-center mb-12 text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: '-0.06em' }}>
            <span className="text-gray-500 font-mono mr-4 text-2xl md:text-3xl">01.</span> 
            <span>Tentang Saya</span>
            <span className="ml-6 h-px bg-gradient-to-r from-white/30 to-transparent flex-grow max-w-md" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-base md:text-lg text-gray-400 leading-relaxed font-medium" style={{ letterSpacing: '-0.04em' }}>
              <p className="hover:text-gray-300 transition-colors">
                Lulusan <span className="text-white font-bold">Teknik Informatika</span> dari Universitas Islam Kalimantan MAB dengan IPK <span className="text-white font-bold">3.79</span>. Saya memiliki passion kuat dalam menciptakan perangkat lunak yang efisien dan inovatif.
              </p>
              <p className="hover:text-gray-300 transition-colors">
                Sebagai <span className="text-white font-bold">Freelance Software Developer</span>, saya berpengalaman menangani proyek end-to-end, dari diskusi kebutuhan hingga implementasi teknis dan deployment.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: "📱", text: "Mobile Development dengan Flutter" },
                { icon: "🌐", text: "Web Development (Laravel & Next.js)" },
                { icon: "🤖", text: "AI-Assisted Development" },
                { icon: "☁️", text: "Cloud Integration & Deployment" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group cursor-default">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors" style={{ letterSpacing: '-0.04em' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="proyek" className="relative py-24 px-6 md:px-8 lg:px-12 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="flex items-center mb-16 text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: '-0.06em' }}>
            <span className="text-gray-500 font-mono mr-4 text-2xl md:text-3xl">02.</span> 
            <span>Proyek Unggulan</span>
            <span className="ml-6 h-px bg-gradient-to-r from-white/30 to-transparent flex-grow max-w-md" />
          </h2>
          
          <div className="flex flex-col space-y-32">
            {/* PROJECT 1 - FISKA POS (FEATURED) */}
            <div className="group relative grid md:grid-cols-12 gap-8 items-center">
              {/* Screenshot Carousel */}
              <div className="md:col-span-7 relative h-[280px] sm:h-[380px] md:h-[500px] rounded-2xl overflow-hidden bg-zinc-900 border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20 group-hover:border-yellow-500 transition-all duration-500 group-hover:shadow-yellow-500/40">
                {/* On Progress Badge */}
                <div className="absolute top-4 left-4 z-30 bg-yellow-500 text-black px-4 py-2 rounded-full font-black text-xs flex items-center gap-2 shadow-lg animate-pulse">
                  <span className="w-2 h-2 bg-black rounded-full animate-ping" />
                  ON PROGRESS
                </div>

                {/* Carousel Images */}
                <div className="relative w-full h-full">
                  {fiskaScreenshots.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        idx === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Fiska POS Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {fiskaScreenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>

              <div className="md:col-span-5 z-20 flex flex-col md:items-end text-left md:text-right md:-ml-16 mt-4 md:mt-0 space-y-4">
                <div className="flex items-center gap-2 md:flex-row-reverse">
                  <p className="text-yellow-500 font-mono text-xs md:text-sm tracking-wider uppercase font-black" style={{ letterSpacing: '0.1em' }}>⭐ FEATURED PROJECT</p>
                </div>
                <h3 className="text-white font-black text-4xl md:text-5xl hover:text-yellow-400 transition-colors cursor-default" style={{ letterSpacing: '-0.06em' }}>Fiska POS</h3>
                <div className="bg-zinc-900/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-yellow-500/30 text-gray-300 text-sm md:text-base leading-relaxed md:w-[130%] hover:border-yellow-500/50 hover:shadow-yellow-500/10 transition-all duration-500" style={{ letterSpacing: '-0.04em' }}>
                  Aplikasi POS berbasis cloud dengan fitur <span className="text-yellow-400 font-bold">manajemen printer multi-peran</span>, pelacakan sesi kasir real-time, dan <span className="text-yellow-400 font-bold">editor struk visual</span> yang intuitif untuk meningkatkan efisiensi operasional bisnis modern.
                </div>
                <ul className="flex flex-wrap gap-3 mt-4 md:justify-end text-xs font-bold text-white" style={{ letterSpacing: '-0.03em' }}>
                  <li className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full hover:bg-yellow-500/30 transition-colors">Flutter</li>
                  <li className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full hover:bg-yellow-500/30 transition-colors">Firebase</li>
                  <li className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full hover:bg-yellow-500/30 transition-colors">Provider</li>
                  <li className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2 rounded-full hover:bg-yellow-500/30 transition-colors">Cloud Print</li>
                </ul>
              </div>
            </div>

            {/* PROJECT 2 - OSHE COFFEE */}
            <div className="group relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 z-20 flex flex-col items-start text-left md:-mr-16 order-2 md:order-1 mt-4 md:mt-0 space-y-4">
                <p className="text-white font-mono text-xs md:text-sm tracking-wider uppercase font-bold" style={{ letterSpacing: '0.1em' }}>Web Application</p>
                <h3 className="text-white font-black text-3xl md:text-4xl hover:text-gray-300 transition-colors cursor-default" style={{ letterSpacing: '-0.06em' }}>Oshe Coffee Manager</h3>
                <div className="bg-zinc-900/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10 text-gray-300 text-sm md:text-base leading-relaxed md:w-[130%] hover:border-white/30 hover:shadow-white/5 transition-all duration-500" style={{ letterSpacing: '-0.04em' }}>
                  Sistem manajemen keuangan dan inventaris untuk coffee shop. Digitalisasi pencatatan stok, perhitungan HPP otomatis, dan laporan laba rugi komprehensif untuk efisiensi bisnis.
                </div>
                <ul className="flex flex-wrap gap-3 mt-4 text-xs font-bold text-white" style={{ letterSpacing: '-0.03em' }}>
                  <li className="bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">Laravel</li>
                  <li className="bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">MySQL</li>
                  <li className="bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">Bootstrap</li>
                </ul>
              </div>
              
              {/* Oshe Screenshots Carousel */}
              <div className="md:col-span-7 relative h-[280px] sm:h-[380px] md:h-[450px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl order-1 md:order-2 group-hover:border-white/30 transition-all duration-500 group-hover:shadow-white/10">
                <div className="relative w-full h-full">
                  {osheScreenshots.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        idx === Math.floor(currentSlide * osheScreenshots.length / fiskaScreenshots.length) % osheScreenshots.length ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Oshe Coffee Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {osheScreenshots.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === Math.floor(currentSlide * osheScreenshots.length / fiskaScreenshots.length) % osheScreenshots.length ? 'bg-white w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="pengalaman" className="relative py-24 px-6 md:px-8 lg:px-12 z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="flex items-center mb-12 text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: '-0.06em' }}>
            <span className="text-gray-500 font-mono mr-4 text-2xl md:text-3xl">03.</span> 
            <span>Pengalaman</span>
            <span className="ml-6 h-px bg-gradient-to-r from-white/30 to-transparent flex-grow max-w-md" />
          </h2>

          <div className="space-y-6">
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-gray-200 transition-colors" style={{ letterSpacing: '-0.05em' }}>Freelance Software Developer</h3>
                  <span className="text-xs font-mono font-bold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full" style={{ letterSpacing: '0.05em' }}>MAR 2024 - SEKARANG</span>
                </div>
                <ul className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed font-medium" style={{ letterSpacing: '-0.04em' }}>
                  <li className="flex items-start gap-3 hover:text-gray-300 transition-colors">
                    <span className="text-white mt-1">▹</span>
                    <span>Mengembangkan aplikasi Flutter (Mobile) dan Laravel/Next.js (Web) sesuai kebutuhan klien dengan standar kualitas tinggi</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-gray-300 transition-colors">
                    <span className="text-white mt-1">▹</span>
                    <span>Bertanggung jawab penuh atas siklus pengembangan dari desain database hingga deployment dan maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-gray-200 transition-colors" style={{ letterSpacing: '-0.05em' }}>Staff Kitchen</h3>
                  <span className="text-xs font-mono font-bold text-gray-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full" style={{ letterSpacing: '0.05em' }}>NOV 2023 - SEKARANG</span>
                </div>
                <p className="text-gray-500 font-bold mb-4 text-sm" style={{ letterSpacing: '-0.03em' }}>Oshe Coffee Banjarmasin</p>
                <ul className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed font-medium" style={{ letterSpacing: '-0.04em' }}>
                  <li className="flex items-start gap-3 hover:text-gray-300 transition-colors">
                    <span className="text-gray-500 mt-1">▹</span>
                    <span>Mengelola data Master Food dan perhitungan HPP untuk efisiensi biaya operasional</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-gray-300 transition-colors">
                    <span className="text-gray-500 mt-1">▹</span>
                    <span>Memastikan operasional harian berjalan lancar dengan ketelitian data stok inventory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="keahlian" className="relative py-24 px-6 md:px-8 lg:px-12 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="flex items-center justify-center mb-16 text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: '-0.06em' }}>
            <span className="text-gray-500 font-mono mr-4 text-2xl md:text-3xl">04.</span> 
            <span>Keahlian Teknis</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
              { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
              { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
              { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
              { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
              { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
              { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
              { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            ].map((skill) => (
              <div key={skill.name} className="group relative flex flex-col items-center justify-center p-6 bg-zinc-900/50 rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-2 hover:bg-zinc-900 transition-all duration-500 cursor-default shadow-lg hover:shadow-white/10">
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 mb-4 transition-all duration-500 scale-100 group-hover:scale-125 relative z-10 grayscale group-hover:grayscale-0">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="font-black text-gray-300 text-sm group-hover:text-white transition-colors relative z-10" style={{ letterSpacing: '-0.04em' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontak" className="relative py-32 px-6 md:px-8 lg:px-12 text-center z-10">
        <div className="container mx-auto max-w-3xl">
          <p className="text-white font-mono mb-4 tracking-widest text-sm font-bold" style={{ letterSpacing: '0.15em' }}>05. SELANJUTNYA?</p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none" style={{ letterSpacing: '-0.08em' }}>
            Hubungi Saya<span className="text-white">.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-medium max-w-2xl mx-auto" style={{ letterSpacing: '-0.04em' }}>
            Saya terbuka untuk proyek baru, kolaborasi, atau sekadar berdiskusi tentang teknologi. Mari terhubung dan ciptakan sesuatu yang luar biasa!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:dennyhermawan.pro@gmail.com" className="group relative px-10 py-4 border-2 border-white bg-white/5 text-white rounded-xl font-black hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-white/30" style={{ letterSpacing: '-0.04em' }}>
              <span className="relative z-10 flex items-center gap-2">
                <span>📧</span> Kirim Email
              </span>
            </a>
            <a href="https://wa.me/6285347303790" target="_blank" className="group relative px-10 py-4 bg-white text-black rounded-xl font-black hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-white/50" style={{ letterSpacing: '-0.04em' }}>
              <span className="relative z-10 flex items-center gap-2">
                <span>💬</span> WhatsApp
              </span>
              <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-8 text-center text-gray-500 font-mono text-xs border-t border-white/10 z-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="space-y-2">
            <p style={{ letterSpacing: '-0.03em' }}>
              Dibuat dengan <span className="text-white font-bold">Next.js</span> & <span className="text-white font-bold">Tailwind CSS</span>
            </p>
            <p className="text-white font-bold" style={{ letterSpacing: '-0.04em' }}>Denny Hermawan</p>
            <p className="opacity-60">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-slide-up-delay-1 {
          opacity: 0;
          animation: slide-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-up-delay-2 {
          opacity: 0;
          animation: slide-up 0.8s ease-out 0.4s forwards;
        }
        
        .animate-slide-up-delay-3 {
          opacity: 0;
          animation: slide-up 0.8s ease-out 0.6s forwards;
        }
        
        .animate-slide-up-delay-4 {
          opacity: 0;
          animation: slide-up 0.8s ease-out 0.8s forwards;
        }
        
        .animate-fade-in {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}