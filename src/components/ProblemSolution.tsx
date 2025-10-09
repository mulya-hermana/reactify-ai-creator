import { Clock, DollarSign, Zap, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSolution = () => {
  const { t } = useLanguage();

  const items = [
    {
      problem: {
        icon: Clock,
        title: t("problemsolution.time.problem"),
        description: t("problemsolution.time.problem.desc"),
      },
      solution: {
        icon: Zap,
        title: t("problemsolution.time.solution"),
        description: t("problemsolution.time.solution.desc"),
      },
    },
    {
      problem: {
        icon: DollarSign,
        title: t("problemsolution.cost.problem"),
        description: t("problemsolution.cost.problem.desc"),
      },
      solution: {
        icon: CheckCircle,
        title: t("problemsolution.cost.solution"),
        description: t("problemsolution.cost.solution.desc"),
      },
    },
    {
      problem: {
        icon: AlertCircle,
        title: t("problemsolution.quality.problem"),
        description: t("problemsolution.quality.problem.desc"),
      },
      solution: {
        icon: TrendingUp,
        title: t("problemsolution.quality.solution"),
        description: t("problemsolution.quality.solution.desc"),
      },
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("problemsolution.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("problemsolution.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("problemsolution.description")}
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {items.map((item, index) => {
            const ProblemIcon = item.problem.icon;
            const SolutionIcon = item.solution.icon;
            
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                {/* Problem */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-destructive/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card rounded-2xl p-6 md:p-8 border-2 border-destructive/30 hover:border-destructive/50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <ProblemIcon className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-semibold mb-2">
                          MASALAH
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {item.problem.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.problem.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Solution */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card rounded-2xl p-6 md:p-8 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-[0_0_30px_hsl(var(--primary)/0.1)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.2)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <SolutionIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2">
                          SOLUSI
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {item.solution.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.solution.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
