import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer")
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer")
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer")
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer")
    },
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer")
    },
    {
      question: t("faq.6.question"),
      answer: t("faq.6.answer")
    },
    {
      question: t("faq.7.question"),
      answer: t("faq.7.answer")
    },
    {
      question: t("faq.8.question"),
      answer: t("faq.8.answer")
    },
    {
      question: t("faq.9.question"),
      answer: t("faq.9.answer")
    },
    {
      question: t("faq.10.question"),
      answer: t("faq.10.answer")
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("faq.title")} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t("faq.title.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("faq.description")}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;