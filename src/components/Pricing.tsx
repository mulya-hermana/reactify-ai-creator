import { Button } from "@/components/ui/button";
import { Check, Shield, RefreshCw, Sparkles, MessageCircle } from "lucide-react";
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

  const bundleFeatures = [
    t("pricing.bundle.feature.1"),
    t("pricing.bundle.feature.2"),
    t("pricing.bundle.feature.3"),
    t("pricing.bundle.feature.4"),
    t("pricing.bundle.feature.5"),
    t("pricing.bundle.feature.6"),
  ];

  return (
    <section id="harga" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pricing.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("pricing.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("pricing.description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Basic Package */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
            
            <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-primary/50 shadow-[0_0_50px_hsl(var(--primary)/0.2)] h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 w-fit">
                <Shield className="w-4 h-4" />
                {t("pricing.badge")}
              </div>
              
              <div className="mb-6 md:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Rp200.000
                  </span>
                  <span className="text-xl md:text-2xl text-muted-foreground">{t("pricing.per.year")}</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{t("pricing.license")}</p>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-secondary/50 rounded-lg p-3 md:p-4 mb-6 md:mb-8 space-y-2">
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{t("pricing.license.year")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <RefreshCw className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{t("pricing.license.support")}</span>
                </div>
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full text-base md:text-lg py-5 md:py-6 h-auto"
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

          {/* Bundle Package */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl -z-10" />
            
            <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-accent/50 shadow-[0_0_50px_hsl(var(--accent)/0.2)] h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 w-fit">
                <Sparkles className="w-4 h-4" />
                {t("pricing.bundle.badge")}
              </div>
              
              <div className="mb-6 md:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Rp250.000
                  </span>
                  <span className="text-xl md:text-2xl text-muted-foreground">{t("pricing.per.year")}</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{t("pricing.bundle.description")}</p>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {bundleFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-accent/10 rounded-lg p-3 md:p-4 mb-6 md:mb-8 border border-accent/20">
                <p className="text-xs md:text-sm font-medium text-center">
                  {t("pricing.bundle.voucher")}: <span className="text-accent font-bold">OKTOBER75</span>
                </p>
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full text-base md:text-lg py-5 md:py-6 h-auto"
                asChild
              >
                <a 
                  href="https://lynk.id/mulyadigital/r1zm5wg3g1xw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("pricing.bundle.cta")}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="text-center px-4">
          <p className="text-lg md:text-xl mb-4 md:mb-6 text-muted-foreground">
            {t("pricing.consultation.text")}
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-base md:text-lg py-5 md:py-6 h-auto gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 border-0"
            asChild
          >
            <a 
              href="https://wa.me/6281804476548?text=Halo%2C%20saya%20tertarik%20dengan%20Reactify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              {t("pricing.consultation.button")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
