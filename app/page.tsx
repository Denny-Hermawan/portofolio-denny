"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Efek untuk mendeteksi section aktif saat scroll
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

  const navLinks = ["Tentang", "Proyek", "Pengalaman", "Keahlian", "Kontak"];

  return (
    <main className="min-h-screen bg-dark text-gray-300 selection:bg-primary-light/40 font-sans tracking-tight">
      
      {/* --- NAVBAR RESPONSIF (Lebih Ramping) --- */}
      <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#hero" className="text-lg font-extrabold text-white tracking-tighter hover:scale-105 transition-transform">
            Denny<span className="text-primary-light">.DEV</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-semibold">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-primary-light transition-all duration-300 relative group ${activeSection === item.toLowerCase() ? 'text-primary-light' : ''}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-light transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary-light focus:outline-none"
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-secondary/95 backdrop-blur-md border-b border-white/10 px-6 py-4 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-primary-light font-medium py-2 border-b border-white/5 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Lebih Dempet & Interaktif) --- */}
      <section id="hero" className="pt-24 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-7/12 flex flex-col items-start text-left">
            <h2 className="text-primary-light font-semibold mb-2 tracking-wide animate-fade-in">Halo, nama saya</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-2 leading-tight tracking-tighter">
              Denny Hermawan.
            </h1>
            {/* Contoh lebih kecil */}
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-400 mb-5 leading-tight tracking-tight">
              Software Developer.
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-medium">
            Spesialis dalam pengembangan aplikasi <span className="text-white font-bold hover:text-primary-light transition-colors cursor-default">Flutter</span>, serta website modern menggunakan <span className="text-white font-bold hover:text-[#F05340] transition-colors cursor-default">Laravel</span> dan <span className="text-white font-bold hover:text-white transition-colors cursor-default">Next.js</span>.
            </p>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <a href="#proyek" className="w-full sm:w-auto text-center px-8 py-3 bg-primary-light text-dark font-bold rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-light/20 active:scale-95">
                Lihat Proyek
              </a>
              <a href="/CV DENNY HERMAWAN - TERBARU.pdf" target="_blank" className="w-full sm:w-auto text-center px-8 py-3 border-2 border-primary-light text-primary-light rounded-lg font-bold hover:bg-primary-light/10 hover:scale-105 transition-all duration-300 active:scale-95">
                Unduh CV
              </a>
            </div>
          </div>

          <div className="md:w-5/12 flex justify-center md:justify-end relative w-full group">
              <div className="relative w-60 h-72 sm:w-64 sm:h-80 md:w-[280px] md:h-[360px]">
                  <div className="absolute inset-0 border-2 border-primary-light rounded-2xl translate-x-3 translate-y-3 -z-10 md:translate-x-4 md:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-secondary grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out">
                    <Image
                      src="/images/foto-denny.jpg"
                      alt="Foto Denny Hermawan"
                      fill
                      className="object-cover object-top md:object-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 scale-100 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION (Jarak Lebih Rapat) --- */}
      <section id="tentang" className="py-20 bg-dark-secondary/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="flex items-center mb-8 text-2xl md:text-3xl font-bold text-white">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">01.</span> Tentang Saya
            <span className="ml-4 h-[1px] bg-white/20 flex-grow max-w-xs"></span>
          </h2>
          <div className="text-base md:text-lg text-gray-400 leading-relaxed space-y-4 font-medium">
            <p>
              Lulusan Teknik Informatika dari Universitas Islam Kalimantan MAB dengan IPK 3.79. Saya memiliki passion kuat dalam menciptakan perangkat lunak yang efisien.
            </p>
            <p>
              Sebagai <span className="text-primary-light font-bold">Freelance Software Developer</span>, saya berpengalaman menangani proyek *end-to-end*, dari diskusi kebutuhan hingga implementasi teknis.
            </p>
            <p>
              Saya terbiasa dengan teknologi mobile (Flutter) dan web (Laravel, Next.js), serta memanfaatkan AI untuk mempercepat proses pengembangan.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="proyek" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="flex items-center mb-12 text-2xl md:text-3xl font-bold text-white md:justify-start">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">02.</span> Proyek Unggulan
            <span className="ml-4 h-[1px] bg-white/20 flex-grow max-w-xs"></span>
          </h2>
          
          <div className="flex flex-col space-y-24">
            {/* PROJECT 1 */}
            <div className="group relative grid md:grid-cols-12 gap-4 items-center hover:-translate-y-2 transition-all duration-500">
              <div className="md:col-span-7 relative h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden bg-dark-secondary border border-white/10 shadow-2xl cursor-pointer">
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <div className="flex h-full items-center justify-center text-gray-600 font-mono bg-dark-secondary/50 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-lg">[Screenshot Fiska POS]</span>
                </div>
              </div>
              <div className="md:col-span-5 z-20 flex flex-col md:items-end text-left md:text-right md:-ml-12 mt-4 md:mt-0">
                <p className="text-primary-light font-mono text-xs md:text-sm mb-2 tracking-wider uppercase">Cross-Platform App</p>
                <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-4 hover:text-primary-light transition-colors">Fiska POS</h3>
                <div className="bg-dark-secondary/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 text-gray-300 text-sm md:text-base leading-relaxed md:w-[120%] hover:shadow-primary-light/5 transition-all">
                  Aplikasi POS berbasis <em>cloud</em> dengan fitur manajemen printer multi-peran, pelacakan sesi kasir, dan editor struk visual.
                </div>
                <ul className="flex flex-wrap gap-2 mt-4 md:justify-end text-xs font-mono text-primary-light/80">
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Flutter</li>
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Firebase</li>
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Provider</li>
                </ul>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="group relative grid md:grid-cols-12 gap-4 items-center hover:-translate-y-2 transition-all duration-500">
               <div className="md:col-span-5 z-20 flex flex-col items-start text-left md:-mr-12 order-2 md:order-1 mt-4 md:mt-0">
                  <p className="text-primary-light font-mono text-xs md:text-sm mb-2 tracking-wider uppercase">Web Application</p>
                  <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-4 hover:text-primary-light transition-colors">Oshe Coffee Manager</h3>
                  <div className="bg-dark-secondary/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 text-gray-300 text-sm md:text-base leading-relaxed md:w-[120%] hover:shadow-primary-light/5 transition-all">
                    Sistem manajemen keuangan dan inventaris untuk <em>coffee shop</em>. Digitalisasi pencatatan stok, HPP otomatis, dan laporan laba rugi.
                  </div>
                  <ul className="flex flex-wrap gap-2 mt-4 text-xs font-mono text-primary-light/80">
                    <li className="bg-dark/50 px-3 py-1 rounded-full">Laravel</li>
                    <li className="bg-dark/50 px-3 py-1 rounded-full">MySQL</li>
                    <li className="bg-dark/50 px-3 py-1 rounded-full">Bootstrap</li>
                  </ul>
                </div>
              <div className="md:col-span-7 relative h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden bg-dark-secondary border border-white/10 shadow-2xl order-1 md:order-2 cursor-pointer">
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                 <div className="flex h-full items-center justify-center text-gray-600 font-mono bg-dark-secondary/50 group-hover:scale-105 transition-transform duration-500">
                   <span className="text-lg">[Screenshot Web Oshe]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="pengalaman" className="py-20 bg-dark-secondary/20 px-6">
        <div className="container mx-auto max-w-3xl">
           <h2 className="flex items-center mb-10 text-2xl md:text-3xl font-bold text-white">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">03.</span> Pengalaman
            <span className="ml-4 h-[1px] bg-white/20 flex-grow max-w-xs"></span>
          </h2>

          <div className="space-y-4">
            <div className="group p-6 rounded-2xl border border-white/5 bg-dark hover:bg-dark-secondary/40 hover:border-primary-light/30 transition-all duration-300 cursor-default">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">Freelance Software Developer</h3>
                <span className="text-xs font-mono text-primary-light/80 bg-primary-light/10 px-2 py-1 rounded-full mt-1 sm:mt-0">Mar 2024 - Sekarang</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm md:text-base leading-relaxed">
                <li>Mengembangkan aplikasi Flutter (Mobile) dan Laravel/Next.js (Web) sesuai kebutuhan klien.</li>
                <li>Bertanggung jawab penuh atas siklus pengembangan dari database hingga deployment.</li>
              </ul>
            </div>

             <div className="group p-6 rounded-2xl border border-white/5 bg-dark hover:bg-dark-secondary/40 hover:border-primary-light/30 transition-all duration-300 cursor-default">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">Staff Kitchen</h3>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-full mt-1 sm:mt-0">Nov 2023 - Sekarang</span>
              </div>
              <p className="text-gray-500 font-semibold mb-2 text-sm">Oshe Coffee Banjarmasin</p>
               <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm md:text-base leading-relaxed">
                <li>Mengelola data Master Food dan perhitungan HPP untuk efisiensi biaya.</li>
                <li>Memastikan operasional harian berjalan lancar dengan ketelitian data stok.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* --- SKILLS SECTION (Updated Logos & Added Items) --- */}
       <section id="keahlian" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
           <h2 className="flex items-center mb-10 text-2xl md:text-3xl font-bold text-white justify-center">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">04.</span> Keahlian Teknis
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 mt-8">
            {[
              { name: "Flutter", icon: "💙", color: "text-blue-400" },
              { name: "Dart", icon: "🎯", color: "text-blue-300" },
              { name: "Laravel", icon: "🔴", color: "text-red-500" },
              { name: "Next.js", icon: "▲", color: "text-white" }, // Vercel/Next icon style
              { name: "React", icon: "⚛️", color: "text-cyan-400" },
              { name: "Vercel", icon: "▲", color: "text-white" },   // Added Vercel
              { name: "JavaScript", icon: "🟨", color: "text-yellow-400" }, // Added JS placeholder
              { name: "MySQL", icon: "🐬", color: "text-blue-500" },
              { name: "Firebase", icon: "🔥", color: "text-orange-500" },
              { name: "Tailwind", icon: "🎨", color: "text-teal-400" },
              { name: "Git", icon: "📦", color: "text-orange-600" },
              { name: "PHP", icon: "🐘", color: "text-indigo-400" },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-dark-secondary rounded-xl border border-white/5 hover:border-primary-light/30 hover:-translate-y-1 hover:bg-dark-secondary/60 transition-all duration-300 group cursor-default">
                {/* Removed grayscale, added specific colors if available */}
                <div className={`text-3xl mb-3 transition-transform duration-300 scale-100 group-hover:scale-110 ${skill.color || ''}`}>{skill.icon}</div>
                <div className="font-bold text-gray-300 text-sm group-hover:text-white transition-colors">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Added WhatsApp) --- */}
      <section id="kontak" className="py-28 px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="text-primary-light font-mono mb-3 tracking-widest text-sm">05. SELANJUTNYA?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Hubungi Saya</h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
            Saya terbuka untuk proyek baru atau sekadar berdiskusi. Mari terhubung!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:dennyhermawan.pro@gmail.com" className="px-8 py-3 border-2 border-primary-light bg-primary-light/5 text-primary-light rounded-lg font-bold hover:bg-primary-light/15 hover:-translate-y-1 transition-all duration-300">
              Kirim Email
            </a>
            {/* WhatsApp Button Added */}
            <a href="https://wa.me/6285347303790" target="_blank" className="px-8 py-3 bg-[#25D366] text-dark rounded-lg font-bold hover:bg-[#1ebc57] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-green-500/20">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-6 text-center text-gray-500 font-mono text-xs border-t border-white/5">
        <p>
          Dibuat dengan <span className="text-primary-light">Next.js</span> & <span className="text-primary-light">Tailwind CSS</span> oleh Denny Hermawan.
        </p>
        <p className="mt-2 opacity-60">© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}