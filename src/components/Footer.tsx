import { MessageCircle, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reactify
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>{t("footer.developed")} <span className="font-semibold text-primary">Mulya Digital</span></span>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.product")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#fitur" className="hover:text-foreground transition-colors">
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-foreground transition-colors">
                  {t("footer.pricing")}
                </a>
              </li>
              <li>
                <a href="#howitworks" className="hover:text-foreground transition-colors">
                  {t("footer.howitworks")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.support")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/6281804476548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mulyadigital.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Reactify by Mulya Digital. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
