import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Premium badge with animation */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm shadow-lg animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("hero.badge")}
          </span>
          <Star className="w-4 h-4 text-accent animate-pulse delay-150" />
        </div>
        
        {/* Main heading with enhanced typography */}
        <div className="space-y-4 animate-fade-in delay-100">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {t("hero.title.reactify")}
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            {t("hero.title.main")}
          </h2>
        </div>
        
        {/* Description with better spacing */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          {t("hero.description")}
        </p>
        
        {/* CTA buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in delay-300">
          <Button 
            variant="hero" 
            size="lg" 
            className="group text-lg px-10 py-7 h-auto shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-all duration-300"
            asChild
          >
            <a 
              href="https://lynk.id/mulyadigital/jp10oxvkyqze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t("hero.cta.start")}
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-10 py-7 h-auto border-2 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            asChild
          >
            <a href="#fitur" className="flex items-center gap-2">
              {t("hero.cta.features")}
            </a>
          </Button>
        </div>
        
        {/* Stats with improved design */}
        <div className="flex items-center justify-center gap-8 pt-12 flex-wrap animate-fade-in delay-500">
          <div className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)] transition-all" />
            <span className="text-sm font-medium text-foreground">{t("hero.stat.voices")}</span>
          </div>
          <div className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.5)] group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.8)] transition-all" />
            <span className="text-sm font-medium text-foreground">{t("hero.stat.subtitle")}</span>
          </div>
          <div className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)] transition-all" />
            <span className="text-sm font-medium text-foreground">{t("hero.stat.bulk")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
