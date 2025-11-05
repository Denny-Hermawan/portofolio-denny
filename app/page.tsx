"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Tentang", "Proyek", "Pengalaman", "Keahlian", "Kontak"];

  return (
    <main className="min-h-screen bg-dark text-gray-300 selection:bg-primary-light/30 font-sans tracking-tight">
      
      {/* --- NAVBAR RESPONSIF --- */}
      <nav className="sticky top-0 z-50 bg-dark/90 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold text-white tracking-tighter">
            Denny<span className="text-primary-light">.DEV</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary-light transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
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
          <div className="md:hidden bg-dark-secondary border-b border-white/10 px-6 py-4 shadow-2xl">
            <div className="flex flex-col space-y-4">
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

      {/* --- HERO SECTION --- */}
      <section id="hero" className="pt-28 pb-16 md:pt-40 md:pb-32 px-6">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-7/12 flex flex-col items-start text-left">
            <h2 className="text-primary-light font-semibold mb-3 tracking-wide">Halo, nama saya</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
              Denny Hermawan.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-400 mb-6 leading-tight tracking-tight">
              Software Developer.
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-medium">
            Spesialis dalam pengembangan aplikasi <span className="text-white font-bold">Flutter</span>, serta website modern menggunakan <span className="text-white font-bold">Laravel</span> dan <span className="text-white font-bold">Next.js</span>.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href="#proyek" className="w-full sm:w-auto text-center px-8 py-4 bg-primary-light text-dark font-bold rounded-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary-light/20">
                Lihat Proyek
              </a>
              <a href="/CV DENNY HERMAWAN - TERBARU.pdf" target="_blank" className="w-full sm:w-auto text-center px-8 py-4 border-2 border-primary-light text-primary-light rounded-lg font-bold hover:bg-primary-light/10 transition-all duration-300">
                Unduh CV
              </a>
            </div>
          </div>

          <div className="md:w-5/12 flex justify-center md:justify-end relative w-full">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[300px] md:h-[400px]">
                  {/* Dekorasi Border */}
                  <div className="absolute inset-0 border-2 border-primary-light rounded-2xl translate-x-4 translate-y-4 -z-10 md:translate-x-5 md:translate-y-5"></div>
                  {/* Container Foto */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-secondary grayscale hover:grayscale-0 transition-all duration-500 ease-in-out group">
                    <Image
                      src="/images/foto-denny.jpg"
                      alt="Foto Denny Hermawan"
                      fill
                      className="object-cover object-top md:object-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 scale-100 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="tentang" className="py-24 bg-dark-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="flex items-center mb-12 text-2xl md:text-3xl font-bold text-white">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">01.</span> Tentang Saya
            <span className="ml-4 h-[1px] bg-white/20 flex-grow max-w-xs"></span>
          </h2>
          <div className="text-base md:text-lg text-gray-400 leading-relaxed space-y-6 font-medium">
            <p>
              Lulusan Teknik Informatika dari Universitas Islam Kalimantan MAB dengan IPK 3.79. Saya memiliki passion kuat dalam menciptakan perangkat lunak yang tidak hanya berfungsi dengan baik, tetapi juga membantu efisiensi bisnis.
            </p>
            <p>
              Sebagai <span className="text-primary-light font-bold">Freelance Software Developer</span>, saya berpengalaman menangani proyek end-to-end, mulai dari diskusi kebutuhan klien hingga implementasi teknis.
            </p>
            <p>
              Saya terbiasa bekerja dengan teknologi mobile seperti Flutter untuk performa tinggi di Android/iOS, serta teknologi web yang kuat seperti Laravel dan Next.js.
            </p>
            <p>
              Saya juga terbiasa menggunakan AI seperti Gemini, ChatGPT atau Claude untuk mempercepat proses pengembangan, mulai dari penulisan kode hingga pembuatan dokumentasi teknis.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="proyek" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="flex items-center mb-16 text-2xl md:text-3xl font-bold text-white md:justify-start">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">02.</span> Proyek Unggulan
            <span className="ml-4 h-[1px] bg-white/20 flex-grow max-w-xs"></span>
          </h2>
          
          <div className="flex flex-col space-y-20 md:space-y-32">
            {/* PROJECT 1: FISKA POS */}
            <div className="group relative grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7 relative h-[250px] sm:h-[350px] md:h-[400px] rounded rounded-xl overflow-hidden bg-dark-secondary border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-dark/50 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                {/* Ganti dengan screenshot aplikasi yang berjalan di Tablet/Desktop untuk menunjukkan fitur responsif */}
                <div className="flex h-full items-center justify-center text-gray-600 font-mono bg-dark-secondary/50">
                  <span className="text-lg">[Screenshot Fiska POS Responsive]</span>
                </div>
              </div>

              <div className="md:col-span-5 z-20 flex flex-col md:items-end text-left md:text-right md:-ml-12 mt-4 md:mt-0">
                <p className="text-primary-light font-mono text-xs md:text-sm mb-2 tracking-wider uppercase">Featured Cross-Platform App</p>
                <h3 className="text-white font-extrabold text-2xl md:text-4xl mb-4 md:mb-6">Fiska POS</h3>
                <div className="bg-dark-secondary/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 text-gray-300 text-sm md:text-base leading-relaxed md:w-[120%]">
                  Aplikasi Point of Sales (POS) modern berbasis <em>cloud</em> dengan antarmuka responsif untuk Mobile & Tablet. Fitur unggulan meliputi manajemen printer multi-peran (Struk/Dapur/Bar), pelacakan sesi kasir detail, harga khusus <em>online order</em>, dan editor template struk visual.
                </div>
                <ul className="flex flex-wrap gap-3 mt-6 md:justify-end text-xs md:text-sm font-mono text-primary-light/80">
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Flutter</li>
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Firebase Cloud</li>
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Provider</li>
                  <li className="bg-dark/50 px-3 py-1 rounded-full">Thermal Printing (BT/WiFi)</li>
                </ul>
              </div>
            </div>

            {/* PROJECT 2: SKRIPSI */}
            <div className="group relative grid md:grid-cols-12 gap-4 items-center">
               <div className="md:col-span-5 z-20 flex flex-col items-start text-left md:-mr-12 order-2 md:order-1 mt-6 md:mt-0">
                  <p className="text-primary-light font-mono text-xs md:text-sm mb-2 tracking-wider uppercase">Web Application</p>
                  <h3 className="text-white font-extrabold text-2xl md:text-4xl mb-4 md:mb-6">Oshe Coffee Manager</h3>
                  <div className="bg-dark-secondary/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 text-gray-300 text-sm md:text-base leading-relaxed md:w-[120%]">
                    Sistem manajemen keuangan dan inventaris berbasis web untuk <em>coffee shop</em>. Mendigitalisasi pencatatan bahan baku masuk/keluar, menghitung HPP otomatis, dan menyajikan laporan laba rugi yang akurat.
                  </div>
                  <ul className="flex flex-wrap gap-3 mt-6 text-xs md:text-sm font-mono text-primary-light/80">
                    <li className="bg-dark/50 px-3 py-1 rounded-full">Laravel</li>
                    <li className="bg-dark/50 px-3 py-1 rounded-full">MySQL</li>
                    <li className="bg-dark/50 px-3 py-1 rounded-full">Bootstrap</li>
                  </ul>
                </div>

              <div className="md:col-span-7 relative h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden bg-dark-secondary border border-white/10 shadow-2xl order-1 md:order-2">
                <div className="absolute inset-0 bg-dark/50 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                 <div className="flex h-full items-center justify-center text-gray-600 font-mono bg-dark-secondary/50">
                   <span className="text-lg">[Screenshot Web Oshe]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="pengalaman" className="py-24 bg-dark-secondary/30 px-6">
        <div className="container mx-auto max-w-3xl">
           <h2 className="flex items-center mb-12 text-2xl md:text-3xl font-bold text-white">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">03.</span> Pengalaman
            <span className="ml-4 h-[1px] bg-white/20 flex-grow max-w-xs"></span>
          </h2>

          <div className="space-y-6">
            <div className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-dark hover:bg-dark-secondary/50 hover:border-primary-light/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-light transition-colors">Freelance Software Developer</h3>
                <span className="text-sm font-mono text-primary-light/80 bg-primary-light/10 px-3 py-1 rounded-full mt-2 sm:mt-0">Mar 2024 - Sekarang</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-400 text-base md:text-lg leading-relaxed">
                <li>Mengembangkan aplikasi sesuai kebutuhan bisnis klien menggunakan Flutter (Mobile) dan Laravel/Next.js (Web).</li>
                <li>Bertanggung jawab penuh atas siklus pengembangan dari desain database hingga deployment.</li>
              </ul>
            </div>

             <div className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-dark hover:bg-dark-secondary/50 hover:border-primary-light/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-light transition-colors">Staff Kitchen </h3>
                <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0">Nov 2023 - Sekarang</span>
              </div>
              <p className="text-gray-500 font-semibold mb-3">Oshe Coffee Banjarmasin</p>
               <ul className="list-disc list-outside ml-5 space-y-3 text-gray-400 text-base md:text-lg leading-relaxed">
                <li>Mengelola administrasi data Master Food dan melakukan perhitungan HPP untuk efisiensi biaya.</li>
                <li>Memastikan operasional harian berjalan lancar dengan ketelitian tinggi terhadap data stok.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* --- SKILLS SECTION (Updated with Laravel & MySQL) --- */}
       <section id="keahlian" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
           <h2 className="flex items-center mb-12 text-2xl md:text-3xl font-bold text-white justify-center">
            <span className="text-primary-light font-mono mr-3 text-xl md:text-2xl">04.</span> Keahlian Teknis
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
            {[
              { name: "Flutter", icon: "💙" },
              { name: "Dart", icon: "🎯" },
              { name: "Laravel", icon: "🔴" }, // Skill Baru
              { name: "Next.js", icon: "▲" },
              { name: "MySQL", icon: "🐬" },   // Skill Baru
              { name: "Firebase", icon: "🔥" },
              { name: "React", icon: "⚛️" },
              { name: "Tailwind", icon: "🎨" },
              { name: "Git", icon: "📦" },
              { name: "PHP", icon: "🐘" },     // Skill Baru (implied by Laravel)
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-6 bg-dark-secondary rounded-xl border border-white/5 hover:border-primary-light/50 hover:-translate-y-2 hover:bg-dark-secondary/80 transition-all duration-300 group cursor-default">
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110">{skill.icon}</div>
                <div className="font-bold text-gray-300 group-hover:text-white transition-colors">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="kontak" className="py-32 px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="text-primary-light font-mono mb-4 tracking-widest">05. SELANJUTNYA?</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Hubungi Saya</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-medium">
            Saya terbuka untuk kesempatan kerja *full-time* atau proyek *freelance* baru. Apakah Anda butuh aplikasi mobile, website sistem, atau sekadar ingin berdiskusi? Mari kita ngobrol!
          </p>
          <a href="mailto:dennyhermawan.pro@gmail.com" className="inline-block px-10 py-5 border-2 border-primary-light text-primary-light rounded-lg font-bold text-lg hover:bg-primary-light/15 transition-all duration-300">
            Kirim Email
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-gray-500 font-mono text-xs md:text-sm border-t border-white/5">
        <p>
          Dibuat dengan <span className="text-primary-light">Next.js</span> & <span className="text-primary-light">Tailwind CSS</span> oleh Denny Hermawan.
        </p>
        <p className="mt-2 opacity-60">© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}