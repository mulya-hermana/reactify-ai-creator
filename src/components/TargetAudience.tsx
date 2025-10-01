import { Users, TrendingUp, Briefcase, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "YouTuber & TikToker",
    description: "Konten reaksi cepat jadi & siap viral"
  },
  {
    icon: TrendingUp,
    title: "Content Creator Meme",
    description: "Editing instan untuk short video"
  },
  {
    icon: Briefcase,
    title: "Brand & Influencer",
    description: "Tambah watermark & branding otomatis"
  },
  {
    icon: Sparkles,
    title: "Agency/Freelancer",
    description: "Proses banyak video untuk klien"
  }
];

const TargetAudience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siapa yang Cocok <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pakai Reactify?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
