import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("hero.title.reactify")}
          </span>
          <br />
          <span className="text-foreground">
            {t("hero.title.main")}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          {t("hero.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            asChild
          >
            <a 
              href="https://wa.me/6281804476548?text=Halo,%20saya%20tertarik%20dengan%20Reactify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.cta.start")}
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
            asChild
          >
            <a href="#fitur">
              {t("hero.cta.features")}
            </a>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>{t("hero.stat.voices")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>{t("hero.stat.subtitle")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>{t("hero.stat.bulk")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
