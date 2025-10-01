import { Cpu, HardDrive, Monitor, Wifi, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TechSpecs = () => {
  const { t } = useLanguage();
  
  const specs = [
    {
      icon: Monitor,
      category: t("techspecs.platform.title"),
      items: [
        t("techspecs.platform.1"),
        t("techspecs.platform.2"),
        t("techspecs.platform.3")
      ]
    },
    {
      icon: Cpu,
      category: t("techspecs.processor.title"),
      items: [
        t("techspecs.processor.1"),
        t("techspecs.processor.2")
      ]
    },
    {
      icon: HardDrive,
      category: t("techspecs.storage.title"),
      items: [
        t("techspecs.storage.1"),
        t("techspecs.storage.2")
      ]
    },
    {
      icon: Wifi,
      category: t("techspecs.connection.title"),
      items: [
        t("techspecs.connection.1"),
        t("techspecs.connection.2")
      ]
    }
  ];

  const formats = [
    { type: t("techspecs.formats.input"), list: ["MP4", "AVI", "MOV", "MKV", "WebM", "FLV"] },
    { type: t("techspecs.formats.output"), list: ["MP4", "WebM", "AVI"] },
    { type: t("techspecs.formats.audio"), list: ["MP3", "WAV", "AAC", "OGG"] },
    { type: t("techspecs.formats.subtitle"), list: ["SRT", "VTT", "ASS"] }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("techspecs.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("techspecs.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("techspecs.description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("techspecs.formats.title")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3 text-primary">{format.type}</h4>
                <div className="flex flex-wrap gap-2">
                  {format.list.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;