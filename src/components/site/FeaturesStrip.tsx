import { CreditCard, Clock, Truck } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Entrega Grátis na Região",
    desc: "Receba seus materiais com rapidez e segurança.",
  },
  {
    icon: CreditCard,
    title: "Parcele em até 6x",
    desc: "Facilitamos o pagamento para sua obra não parar.",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    desc: "Seg à Sáb: 07h30–18h | Dom: 08h–12h",
  },
];

const FeaturesStrip = () => {
  return (
    <section className="py-10 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70" aria-label="Destaques da loja">
      <div className="container  mx-auto px-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="rounded-lg border bg-card p-5 shadow-sm transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-foreground">
                <Icon />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-tight">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesStrip;
