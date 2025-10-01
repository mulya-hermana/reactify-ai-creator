import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navbar
    "nav.features": "Fitur",
    "nav.pricing": "Harga",
    "nav.contact": "Kontak",
    
    // Hero
    "hero.badge": "Video Reaction Generator dengan AI",
    "hero.title.reactify": "Reactify",
    "hero.title.main": "Bikin Video Reaksi Viral dalam Hitungan Menit",
    "hero.description": "Video reaksi otomatis, profesional, dan siap upload. Powered by AI untuk content creator yang ingin viral!",
    "hero.cta.start": "Mulai Sekarang",
    "hero.cta.features": "Lihat Fitur",
    "hero.stat.voices": "30+ Suara AI",
    "hero.stat.subtitle": "Auto Subtitle",
    "hero.stat.bulk": "Bulk Processing",
    
    // Problem
    "problem.title": "Mengapa Harus",
    "problem.title.highlight": "Reactify?",
    "problem.description": "Bikin video reaksi yang viral memakan banyak waktu. Dengan Reactify, semua jadi otomatis.",
    "problem.without.title": "Tanpa Reactify",
    "problem.without.subtitle": "Ribet & Memakan Waktu",
    "problem.without.1": "Rekam audio narasi manual",
    "problem.without.2": "Edit video satu per satu",
    "problem.without.3": "Tambahkan subtitle secara manual",
    "problem.without.4": "Pasang watermark & musik",
    "problem.without.5": "Render berulang kali",
    "problem.without.6": "Total waktu: Berjam-jam per video",
    "problem.with.title": "Dengan Reactify",
    "problem.with.subtitle": "Cepat, Mudah & Otomatis",
    "problem.with.1": "Pilih video target",
    "problem.with.2": "AI generate narasi otomatis",
    "problem.with.3": "Subtitle otomatis dalam detik",
    "problem.with.4": "Watermark & musik auto-apply",
    "problem.with.5": "Bulk processing banyak video sekaligus",
    "problem.with.6": "Total waktu: Hitungan menit!",
    
    // Features
    "features.title": "Fitur",
    "features.title.highlight": "Unggulan",
    "features.description": "Semua yang kamu butuhkan untuk bikin video reaksi profesional dan viral",
    "features.narration.title": "Narasi AI Otomatis",
    "features.narration.desc": "30+ pilihan suara Gemini TTS dengan berbagai gaya: lucu, dramatis, investigatif, edukatif, dan lainnya.",
    "features.subtitle.title": "Auto Subtitle",
    "features.subtitle.desc": "Generate subtitle otomatis dengan Whisper AI. Mendukung banyak bahasa dan customizable styling.",
    "features.music.title": "Musik Latar & Custom Audio",
    "features.music.desc": "Tambahkan background music agar video lebih hidup. Atur volume dan gunakan audio eksternal.",
    "features.watermark.title": "Watermark & Branding",
    "features.watermark.desc": "Lindungi video dengan watermark teks atau logo. Atur posisi, ukuran, dan opacity sesuai kebutuhan.",
    "features.overlay.title": "Video Overlay",
    "features.overlay.desc": "Tambahkan video overlay manual untuk reaction. Mode split atau corner dengan auto overlay.",
    "features.ai.title": "AI Judul Otomatis",
    "features.ai.desc": "Generate judul video catchy & SEO-friendly secara otomatis untuk maksimalkan views.",
    "features.bulk.title": "Bulk Processing",
    "features.bulk.desc": "Proses banyak video sekaligus dalam satu folder. Hemat waktu untuk produksi massal.",
    "features.ui.title": "Tampilan Modern",
    "features.ui.desc": "UI modern dengan Dark/Light Mode. Navigasi mudah dengan tab Log, Info Video, Script & Settings.",
    
    // Target Audience
    "audience.title": "Siapa yang Cocok",
    "audience.title.highlight": "Pakai Reactify?",
    "audience.1.title": "YouTuber & TikToker",
    "audience.1.desc": "Konten reaksi cepat jadi & siap viral",
    "audience.2.title": "Content Creator Meme",
    "audience.2.desc": "Editing instan untuk short video",
    "audience.3.title": "Brand & Influencer",
    "audience.3.desc": "Tambah watermark & branding otomatis",
    "audience.4.title": "Agency/Freelancer",
    "audience.4.desc": "Proses banyak video untuk klien",
    
    // How it works
    "howitworks.title": "Cara Kerja",
    "howitworks.title.highlight": "Reactify",
    "howitworks.description": "Hanya 3 langkah sederhana untuk video reaksi profesional",
    "howitworks.step1.title": "Pilih Video",
    "howitworks.step1.desc": "Upload atau pilih video yang ingin diproses",
    "howitworks.step2.title": "Atur Preferensi",
    "howitworks.step2.desc": "Setting narasi, subtitle, musik, watermark, dan overlay",
    "howitworks.step3.title": "Generate & Done",
    "howitworks.step3.desc": "Klik generate, tunggu sebentar, video reaksi siap upload!",
    
    // Pricing
    "pricing.title": "Harga",
    "pricing.title.highlight": "Spesial",
    "pricing.description": "Investasi kecil untuk produktivitas besar",
    "pricing.badge": "Lisensi Resmi & Aman",
    "pricing.per.year": "/ tahun",
    "pricing.license": "1 lisensi untuk 1 device",
    "pricing.feature.1": "Semua fitur lengkap tanpa batasan",
    "pricing.feature.2": "30+ suara AI Gemini TTS",
    "pricing.feature.3": "Auto subtitle multi-bahasa",
    "pricing.feature.4": "Bulk processing unlimited",
    "pricing.feature.5": "Watermark & branding custom",
    "pricing.feature.6": "Video overlay manual & auto",
    "pricing.feature.7": "AI judul otomatis",
    "pricing.feature.8": "Update versi terbaru gratis",
    "pricing.feature.9": "Support via WhatsApp",
    "pricing.license.year": "Lisensi berlaku 1 tahun penuh",
    "pricing.license.support": "Gratis update & support",
    "pricing.cta": "Aktivasi Sekarang via WhatsApp",
    
    // CTA
    "cta.title": "Jangan Buang Waktu Lagi Edit Manual",
    "cta.description": "Dengan Reactify, kamu bisa fokus bikin ide konten, biar urusan editing dikerjakan AI otomatis.",
    "cta.button": "Chat via WhatsApp",
    "cta.contact": "atau hubungi:",
    "cta.stat.voices": "Suara AI",
    "cta.stat.faster": "Lebih Cepat",
    "cta.stat.auto": "Otomatis",
    
    // Footer
    "footer.tagline": "Video Reaction Generator dengan AI",
    "footer.product": "Produk",
    "footer.features": "Fitur",
    "footer.pricing": "Harga",
    "footer.howitworks": "Cara Kerja",
    "footer.support": "Dukungan",
    "footer.contact": "Kontak",
    "footer.whatsapp": "WhatsApp",
    "footer.email": "Email",
    "footer.developed": "Dikembangkan oleh",
    "footer.rights": "All rights reserved.",
  },
  en: {
    // Navbar
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "AI-Powered Video Reaction Generator",
    "hero.title.reactify": "Reactify",
    "hero.title.main": "Create Viral Reaction Videos in Minutes",
    "hero.description": "Automated, professional reaction videos ready to upload. AI-powered for content creators who want to go viral!",
    "hero.cta.start": "Get Started",
    "hero.cta.features": "View Features",
    "hero.stat.voices": "30+ AI Voices",
    "hero.stat.subtitle": "Auto Subtitle",
    "hero.stat.bulk": "Bulk Processing",
    
    // Problem
    "problem.title": "Why Choose",
    "problem.title.highlight": "Reactify?",
    "problem.description": "Creating viral reaction videos takes time. With Reactify, everything is automated.",
    "problem.without.title": "Without Reactify",
    "problem.without.subtitle": "Complex & Time-Consuming",
    "problem.without.1": "Record audio narration manually",
    "problem.without.2": "Edit videos one by one",
    "problem.without.3": "Add subtitles manually",
    "problem.without.4": "Apply watermark & music",
    "problem.without.5": "Render repeatedly",
    "problem.without.6": "Total time: Hours per video",
    "problem.with.title": "With Reactify",
    "problem.with.subtitle": "Fast, Easy & Automated",
    "problem.with.1": "Select target video",
    "problem.with.2": "AI generates narration automatically",
    "problem.with.3": "Auto subtitles in seconds",
    "problem.with.4": "Watermark & music auto-apply",
    "problem.with.5": "Bulk process multiple videos at once",
    "problem.with.6": "Total time: Just minutes!",
    
    // Features
    "features.title": "Key",
    "features.title.highlight": "Features",
    "features.description": "Everything you need to create professional and viral reaction videos",
    "features.narration.title": "AI Auto Narration",
    "features.narration.desc": "30+ Gemini TTS voice options with various styles: funny, dramatic, investigative, educational, and more.",
    "features.subtitle.title": "Auto Subtitle",
    "features.subtitle.desc": "Generate automatic subtitles with Whisper AI. Supports multiple languages and customizable styling.",
    "features.music.title": "Background Music & Custom Audio",
    "features.music.desc": "Add background music to bring videos to life. Adjust volume and use your own external audio.",
    "features.watermark.title": "Watermark & Branding",
    "features.watermark.desc": "Protect videos with text watermark or logo. Adjust position, size, and opacity as needed.",
    "features.overlay.title": "Video Overlay",
    "features.overlay.desc": "Add manual video overlay for reactions. Split or corner mode with auto overlay.",
    "features.ai.title": "AI Auto Title",
    "features.ai.desc": "Generate catchy & SEO-friendly video titles automatically to maximize views.",
    "features.bulk.title": "Bulk Processing",
    "features.bulk.desc": "Process multiple videos at once in one folder. Save time for mass production.",
    "features.ui.title": "Modern Interface",
    "features.ui.desc": "Modern UI with Dark/Light Mode. Easy navigation with Log, Video Info, Script & Settings tabs.",
    
    // Target Audience
    "audience.title": "Who Should",
    "audience.title.highlight": "Use Reactify?",
    "audience.1.title": "YouTuber & TikToker",
    "audience.1.desc": "Quick reaction content ready to go viral",
    "audience.2.title": "Meme Content Creator",
    "audience.2.desc": "Instant editing for short videos",
    "audience.3.title": "Brand & Influencer",
    "audience.3.desc": "Add automatic watermark & branding",
    "audience.4.title": "Agency/Freelancer",
    "audience.4.desc": "Process multiple videos for clients",
    
    // How it works
    "howitworks.title": "How",
    "howitworks.title.highlight": "Reactify Works",
    "howitworks.description": "Just 3 simple steps to professional reaction videos",
    "howitworks.step1.title": "Select Video",
    "howitworks.step1.desc": "Upload or select the video to process",
    "howitworks.step2.title": "Set Preferences",
    "howitworks.step2.desc": "Configure narration, subtitle, music, watermark, and overlay",
    "howitworks.step3.title": "Generate & Done",
    "howitworks.step3.desc": "Click generate, wait a moment, reaction video ready to upload!",
    
    // Pricing
    "pricing.title": "Special",
    "pricing.title.highlight": "Price",
    "pricing.description": "Small investment for big productivity",
    "pricing.badge": "Official & Secure License",
    "pricing.per.year": "/ year",
    "pricing.license": "1 license for 1 device",
    "pricing.feature.1": "All features without limits",
    "pricing.feature.2": "30+ Gemini TTS AI voices",
    "pricing.feature.3": "Auto multi-language subtitles",
    "pricing.feature.4": "Unlimited bulk processing",
    "pricing.feature.5": "Custom watermark & branding",
    "pricing.feature.6": "Manual & auto video overlay",
    "pricing.feature.7": "AI auto title",
    "pricing.feature.8": "Free updates",
    "pricing.feature.9": "WhatsApp support",
    "pricing.license.year": "License valid for 1 full year",
    "pricing.license.support": "Free updates & support",
    "pricing.cta": "Activate Now via WhatsApp",
    
    // CTA
    "cta.title": "Don't Waste Time on Manual Editing",
    "cta.description": "With Reactify, focus on creating content ideas while AI handles the editing automatically.",
    "cta.button": "Chat via WhatsApp",
    "cta.contact": "or contact:",
    "cta.stat.voices": "AI Voices",
    "cta.stat.faster": "Faster",
    "cta.stat.auto": "Automated",
    
    // Footer
    "footer.tagline": "AI-Powered Video Reaction Generator",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.howitworks": "How It Works",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.whatsapp": "WhatsApp",
    "footer.email": "Email",
    "footer.developed": "Developed by",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
