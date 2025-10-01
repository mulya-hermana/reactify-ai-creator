import { Button } from "@/components/ui/button";
import { Check, Shield, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  
  const features = [
    t("pricing.feature.1"),
    t("pricing.feature.2"),
    t("pricing.feature.3"),
    t("pricing.feature.4"),
    t("pricing.feature.5"),
    t("pricing.feature.6"),
    t("pricing.feature.7"),
    t("pricing.feature.8"),
    t("pricing.feature.9"),
  ];

  return (
    <section id="harga" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pricing.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("pricing.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("pricing.description")}
          </p>
        </div>
        
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
          
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/50 shadow-[0_0_50px_hsl(var(--primary)/0.2)]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              {t("pricing.badge")}
            </div>
            
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Rp200.000
                </span>
                <span className="text-2xl text-muted-foreground">{t("pricing.per.year")}</span>
              </div>
              <p className="text-muted-foreground">{t("pricing.license")}</p>
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* License info */}
            <div className="bg-secondary/50 rounded-lg p-4 mb-8 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-medium">{t("pricing.license.year")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RefreshCw className="w-4 h-4 text-primary" />
                <span className="font-medium">{t("pricing.license.support")}</span>
              </div>
            </div>
            
            {/* CTA */}
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full text-lg py-6 h-auto"
              asChild
            >
              <a 
                href="https://lynk.id/mulyadigital/jp10oxvkyqze"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("pricing.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
