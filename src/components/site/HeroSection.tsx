import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construcao.jpg";
import { MessageCircle, Phone } from "lucide-react";
import { useCallback } from "react";

const phoneTel = "+558230282936";
const whatsappNumber = "558230282936";

const HeroSection = () => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  }, []);

  return (
    <section onMouseMove={handleMouseMove} className="relative overflow-hidden spotlight-bg">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Materiais de construção: cimento, tijolos, aço e tintas"
          className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-multiply"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-border">Entrega grátis na região</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Ouro Preto Construção – Materiais de Construção
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A loja da sua construção! Qualidade, preço justo e atendimento especializado.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" variant="cta" aria-label="Fazer orçamento no WhatsApp">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2" /> Fazer orçamento
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" aria-label="Ligar agora">
              <a href={`tel:${phoneTel}`}>
                <Phone className="mr-2" /> Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[100%] bg-primary/20 blur-3xl" />
    </section>
  );
};

export default HeroSection;
