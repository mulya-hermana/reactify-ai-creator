import { Mic, MessageSquare, Music, Droplet, Video, Brain, Zap, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Mic,
      title: t("features.narration.title"),
      description: t("features.narration.desc"),
      gradient: "from-primary to-primary/50"
    },
    {
      icon: MessageSquare,
      title: t("features.subtitle.title"),
      description: t("features.subtitle.desc"),
      gradient: "from-accent to-accent/50"
    },
    {
      icon: Music,
      title: t("features.music.title"),
      description: t("features.music.desc"),
      gradient: "from-primary to-primary/50"
    },
    {
      icon: Droplet,
      title: t("features.watermark.title"),
      description: t("features.watermark.desc"),
      gradient: "from-accent to-accent/50"
    },
    {
      icon: Video,
      title: t("features.overlay.title"),
      description: t("features.overlay.desc"),
      gradient: "from-primary to-primary/50"
    },
    {
      icon: Brain,
      title: t("features.ai.title"),
      description: t("features.ai.desc"),
      gradient: "from-accent to-accent/50"
    },
    {
      icon: Zap,
      title: t("features.bulk.title"),
      description: t("features.bulk.desc"),
      gradient: "from-primary to-primary/50"
    },
    {
      icon: Palette,
      title: t("features.ui.title"),
      description: t("features.ui.desc"),
      gradient: "from-accent to-accent/50"
    }
  ];

  return (
    <section id="fitur" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("features.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("features.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("features.description")}
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
