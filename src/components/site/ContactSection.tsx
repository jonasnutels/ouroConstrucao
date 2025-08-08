import { Button } from "@/components/ui/button";
import { Clock, MessageCircle, Phone } from "lucide-react";

const phoneDisplay = "(82) 3028-2936";
const phoneTel = "+558230282936";
const whatsappNumber = "558230282936";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 border-t bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Fale com a gente</h2>
          <p className="mt-2 text-muted-foreground">
            Orçamentos, dúvidas e pedidos. Estamos prontos para atender você.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="cta" size="lg" aria-label="Pedir orçamento pelo WhatsApp">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" aria-label={`Ligar para ${phoneDisplay}`}>
              <a href={`tel:${phoneTel}`}>
                <Phone className="mr-2" /> {phoneDisplay}
              </a>
            </Button>
          </div>
        </div>

        <div id="horarios" className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Horário de funcionamento</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><strong>Seg à Sáb:</strong> 07h30 às 18h</li>
            <li><strong>Dom:</strong> 08h às 12h</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Entrega grátis na região e parcelamento em até 6x.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
