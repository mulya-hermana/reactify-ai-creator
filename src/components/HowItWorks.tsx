import { Upload, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Pilih Video",
    description: "Upload atau pilih video yang ingin diproses"
  },
  {
    icon: Settings,
    number: "02",
    title: "Atur Preferensi",
    description: "Setting narasi, subtitle, musik, watermark, dan overlay"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Generate & Done",
    description: "Klik generate, tunggu sebentar, video reaksi siap upload!"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cara Kerja <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Reactify</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hanya 3 langkah sederhana untuk video reaksi profesional
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-xl p-8 border border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold border-4 border-background">
                  {step.number}
                </div>
                
                <div className="mt-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
