import { CheckCircle2 } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mengapa Harus <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Reactify?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bikin video reaksi yang viral memakan banyak waktu. Dengan Reactify, semua jadi otomatis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sebelum Reactify */}
          <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
            <div className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
              Tanpa Reactify
            </div>
            <h3 className="text-2xl font-bold mb-6">Ribet & Memakan Waktu</h3>
            <ul className="space-y-4">
              {[
                "Rekam audio narasi manual",
                "Edit video satu per satu",
                "Tambahkan subtitle secara manual",
                "Pasang watermark & musik",
                "Render berulang kali",
                "Total waktu: Berjam-jam per video"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive text-xl">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Dengan Reactify */}
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-primary/20 shadow-[0_0_50px_hsl(var(--primary)/0.1)] space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Dengan Reactify
            </div>
            <h3 className="text-2xl font-bold mb-6">Cepat, Mudah & Otomatis</h3>
            <ul className="space-y-4">
              {[
                "Pilih video target",
                "AI generate narasi otomatis",
                "Subtitle otomatis dalam detik",
                "Watermark & musik auto-apply",
                "Bulk processing banyak video sekaligus",
                "Total waktu: Hitungan menit!"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
