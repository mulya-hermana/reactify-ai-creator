import { Youtube, TrendingUp, Briefcase, GraduationCap, Gamepad2, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const UseCases = () => {
  const { t } = useLanguage();
  
  const useCases = [
    {
      icon: Youtube,
      title: t("usecases.youtube.title"),
      description: t("usecases.youtube.desc"),
      examples: [
        t("usecases.youtube.ex1"),
        t("usecases.youtube.ex2"),
        t("usecases.youtube.ex3")
      ]
    },
    {
      icon: TrendingUp,
      title: t("usecases.tiktok.title"),
      description: t("usecases.tiktok.desc"),
      examples: [
        t("usecases.tiktok.ex1"),
        t("usecases.tiktok.ex2"),
        t("usecases.tiktok.ex3")
      ]
    },
    {
      icon: Briefcase,
      title: t("usecases.business.title"),
      description: t("usecases.business.desc"),
      examples: [
        t("usecases.business.ex1"),
        t("usecases.business.ex2"),
        t("usecases.business.ex3")
      ]
    },
    {
      icon: GraduationCap,
      title: t("usecases.education.title"),
      description: t("usecases.education.desc"),
      examples: [
        t("usecases.education.ex1"),
        t("usecases.education.ex2"),
        t("usecases.education.ex3")
      ]
    },
    {
      icon: Gamepad2,
      title: t("usecases.gaming.title"),
      description: t("usecases.gaming.desc"),
      examples: [
        t("usecases.gaming.ex1"),
        t("usecases.gaming.ex2"),
        t("usecases.gaming.ex3")
      ]
    },
    {
      icon: ShoppingBag,
      title: t("usecases.ecommerce.title"),
      description: t("usecases.ecommerce.desc"),
      examples: [
        t("usecases.ecommerce.ex1"),
        t("usecases.ecommerce.ex2"),
        t("usecases.ecommerce.ex3")
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("usecases.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("usecases.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("usecases.description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;