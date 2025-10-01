import { Users, TrendingUp, Briefcase, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TargetAudience = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      icon: Users,
      title: t("audience.1.title"),
      description: t("audience.1.desc")
    },
    {
      icon: TrendingUp,
      title: t("audience.2.title"),
      description: t("audience.2.desc")
    },
    {
      icon: Briefcase,
      title: t("audience.3.title"),
      description: t("audience.3.desc")
    },
    {
      icon: Sparkles,
      title: t("audience.4.title"),
      description: t("audience.4.desc")
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("audience.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("audience.title.highlight")}</span>
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
