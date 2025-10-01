import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Comparison = () => {
  const { t } = useLanguage();
  
  const features = [
    { feature: t("comparison.features.1") },
    { feature: t("comparison.features.2") },
    { feature: t("comparison.features.3") },
    { feature: t("comparison.features.4") },
    { feature: t("comparison.features.5") },
    { feature: t("comparison.features.6") },
    { feature: t("comparison.features.7") },
    { feature: t("comparison.features.8") },
    { feature: t("comparison.features.9") },
    { feature: t("comparison.features.10") }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("comparison.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("comparison.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("comparison.description")}
          </p>
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50">
            <div className="font-semibold"></div>
            <div className="text-center">
              <div className="font-bold text-lg">{t("comparison.manual")}</div>
              <div className="text-sm text-muted-foreground">{t("comparison.manual.sub")}</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("comparison.reactify")}
              </div>
              <div className="text-sm text-muted-foreground">{t("comparison.reactify.sub")}</div>
            </div>
          </div>
          
          {features.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-4 border-t border-border hover:bg-muted/30 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="font-medium text-sm md:text-base">{item.feature}</div>
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="font-semibold">{t("comparison.total")}</div>
              <div>
                <div className="text-2xl font-bold text-destructive">2-4 {t("comparison.hours")}</div>
                <div className="text-sm text-muted-foreground">{t("comparison.per.video")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  5-10 {t("comparison.minutes")}
                </div>
                <div className="text-sm text-muted-foreground">{t("comparison.per.video")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;