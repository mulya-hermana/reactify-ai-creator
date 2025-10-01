import { Mic, MessageSquare, Music, Droplet, Video, Brain, Zap, Palette } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Narasi AI Otomatis",
    description: "30+ pilihan suara Gemini TTS dengan berbagai gaya: lucu, dramatis, investigatif, edukatif, dan lainnya.",
    gradient: "from-primary to-primary/50"
  },
  {
    icon: MessageSquare,
    title: "Auto Subtitle",
    description: "Generate subtitle otomatis dengan Whisper AI. Mendukung banyak bahasa dan customizable styling.",
    gradient: "from-accent to-accent/50"
  },
  {
    icon: Music,
    title: "Musik Latar & Custom Audio",
    description: "Tambahkan background music agar video lebih hidup. Atur volume dan gunakan audio eksternal.",
    gradient: "from-primary to-primary/50"
  },
  {
    icon: Droplet,
    title: "Watermark & Branding",
    description: "Lindungi video dengan watermark teks atau logo. Atur posisi, ukuran, dan opacity sesuai kebutuhan.",
    gradient: "from-accent to-accent/50"
  },
  {
    icon: Video,
    title: "Video Overlay",
    description: "Tambahkan video overlay manual untuk reaction. Mode split atau corner dengan auto overlay.",
    gradient: "from-primary to-primary/50"
  },
  {
    icon: Brain,
    title: "AI Judul Otomatis",
    description: "Generate judul video catchy & SEO-friendly secara otomatis untuk maksimalkan views.",
    gradient: "from-accent to-accent/50"
  },
  {
    icon: Zap,
    title: "Bulk Processing",
    description: "Proses banyak video sekaligus dalam satu folder. Hemat waktu untuk produksi massal.",
    gradient: "from-primary to-primary/50"
  },
  {
    icon: Palette,
    title: "Tampilan Modern",
    description: "UI modern dengan Dark/Light Mode. Navigasi mudah dengan tab Log, Info Video, Script & Settings.",
    gradient: "from-accent to-accent/50"
  }
];

const Features = () => {
  return (
    <section id="fitur" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fitur <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Unggulan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Semua yang kamu butuhkan untuk bikin video reaksi profesional dan viral
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
