import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink, PlayCircle } from "lucide-react";

const Results = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <PlayCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{t('results.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('results.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <ExternalLink className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              {t('results.description')}
            </h3>
            
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ratusan video reaksi profesional yang telah dihasilkan menggunakan Reactify. Lihat sendiri kualitas dan variasi konten yang bisa kamu buat!
            </p>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="gap-2 hover:scale-105 transition-transform"
                asChild
              >
                <a 
                  href="https://drive.google.com/drive/folders/1zceYEvdkzk29tozmF3pTVXAfmE-g3ltl?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('results.cta')}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Video Samples</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">HD</div>
                <div className="text-sm text-muted-foreground">Quality Output</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Viral</div>
                <div className="text-sm text-muted-foreground">Ready Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
