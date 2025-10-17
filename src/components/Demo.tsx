import { useLanguage } from "@/contexts/LanguageContext";
import { Play } from "lucide-react";

const Demo = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">{t('demo.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('demo.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fGk0SJ9P0qg"
              title="Reactify Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('demo.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
