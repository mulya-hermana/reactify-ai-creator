import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Jangan Buang Waktu Lagi <br />
          Edit Manual
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Dengan Reactify, kamu bisa fokus bikin ide konten, biar urusan editing dikerjakan AI otomatis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto group"
            asChild
          >
            <a 
              href="https://wa.me/6281804476548?text=Halo,%20saya%20tertarik%20dengan%20Reactify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Chat via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <div className="text-sm text-muted-foreground">
            atau hubungi: <a href="tel:081804476548" className="text-primary hover:underline">0818-0447-6548</a>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-sm text-muted-foreground">Suara AI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              10x
            </div>
            <div className="text-sm text-muted-foreground">Lebih Cepat</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground">Otomatis</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
