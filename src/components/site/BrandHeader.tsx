import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const phoneDisplay = "(82) 3028-2936";
const phoneTel = "+558230282936";
const whatsappNumber = "558230282936"; // country code +55

const BrandHeader = () => {
  return (
    <header className="w-full border-b bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Ouro Preto Construção - Início">
          <img
            src="/lovable-uploads/f85b157d-fd96-4c80-b99b-80463f5cff9f.png"
            alt="Ouro Preto Construção - Logo"
            width={44}
            height={44}
            loading="eager"
            className="h-11 w-11 rounded-sm"
          />
          <div className="leading-tight">
            <span className="block text-lg font-semibold">Ouro Preto Construção</span>
            <span className="block text-xs text-muted-foreground">A loja da sua construção!</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-3 text-white">
          <a href="#sobre" className="text-sm hover:text-foreground transition-colors">Sobre</a>
          <a href="#contato" className="text-sm hover:text-foreground transition-colors">Contato</a>
          <a href="#horarios" className="text-sm hover:text-foreground transition-colors">Horários</a>
        </nav>

        <div className="flex items-center gap-2 text-black">
          <Button asChild variant="outline" size="sm" aria-label={`Ligar para ${phoneDisplay}`}>
            <a href={`tel:${phoneTel}`}>
              <Phone className="mr-2" /> Ligar
            </a>
          </Button>
          <Button asChild variant="cta" size="sm" aria-label="Abrir conversa no WhatsApp">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BrandHeader;
