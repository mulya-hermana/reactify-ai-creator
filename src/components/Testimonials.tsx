import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      content: t("testimonials.1.content"),
      rating: 5
    },
    {
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      content: t("testimonials.2.content"),
      rating: 5
    },
    {
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      content: t("testimonials.3.content"),
      rating: 5
    },
    {
      name: t("testimonials.4.name"),
      role: t("testimonials.4.role"),
      content: t("testimonials.4.content"),
      rating: 5
    },
    {
      name: t("testimonials.5.name"),
      role: t("testimonials.5.role"),
      content: t("testimonials.5.content"),
      rating: 5
    },
    {
      name: t("testimonials.6.name"),
      role: t("testimonials.6.role"),
      content: t("testimonials.6.content"),
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("testimonials.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("testimonials.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;