import { Clock, TrendingUp, DollarSign, Shield, Zap, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Clock,
      title: t("benefits.time.title"),
      description: t("benefits.time.desc"),
      stat: "90%",
      statLabel: t("benefits.time.stat")
    },
    {
      icon: TrendingUp,
      title: t("benefits.viral.title"),
      description: t("benefits.viral.desc"),
      stat: "3x",
      statLabel: t("benefits.viral.stat")
    },
    {
      icon: DollarSign,
      title: t("benefits.cost.title"),
      description: t("benefits.cost.desc"),
      stat: "100%",
      statLabel: t("benefits.cost.stat")
    },
    {
      icon: Shield,
      title: t("benefits.quality.title"),
      description: t("benefits.quality.desc"),
      stat: "HD",
      statLabel: t("benefits.quality.stat")
    },
    {
      icon: Zap,
      title: t("benefits.speed.title"),
      description: t("benefits.speed.desc"),
      stat: "5min",
      statLabel: t("benefits.speed.stat")
    },
    {
      icon: Users,
      title: t("benefits.scale.title"),
      description: t("benefits.scale.desc"),
      stat: "∞",
      statLabel: t("benefits.scale.stat")
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("benefits.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("benefits.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("benefits.description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-primary mb-1">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;