import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Reactify
            </h3>
            <p className="text-sm text-muted-foreground">
              Video Reaction Generator dengan AI
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="https://wa.me/6281804476548"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">0818-0447-6548</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Reactify. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
