import { History, Target, BadgeCheck } from "lucide-react";

const historia = `A loja Ouro Preto Materiais de Construção foi idealizada em meados de 2014, com cadastro de CNPJ aberto em 13 de maio de 2015 e início das atividades em fevereiro de 2016. Passamos por diversas modificações desde então: começamos em uma área de 48m² e atualmente contamos com 204m² de vendas e exposição. Em 2024 construímos um estoque separado para melhor armazenamento das mercadorias. A loja está em constante evolução e, para continuarmos crescendo e alcançando metas e objetivos, é essencial que nossos colaboradores também estejam focados nesse desenvolvimento, executando seu trabalho com zelo, amor e dedicação.`;

const missao = `Gerar satisfação para nossos clientes, equipe de trabalho e a sociedade.`;

const visao = [
  "Ser a maior e melhor loja de construção da região, referência em qualidade de atendimento e entrega.",
  "Abrir uma filial em cinco anos.",
];

const valores = [
  "CREDIBILIDADE: Qualidade de quem demonstra confiança.",
  "COMPROMETIMENTO: Ação de comprometer-se com alguém; atributo de quem é comprometido.",
  "RESPONSABILIDADE SOCIAL: Conjunto amplo de ações que beneficiam a sociedade.",
  "ÉTICA: Conjunto de regras e preceitos de ordem valorativa e moral de um indivíduo.",
  "CORDIALIDADE: Comportamento informal e educado, especialmente no ambiente de trabalho.",
  "PONTUALIDADE: Cumprimento de horários e compromissos.",
  "PRODUTIVIDADE: Produzir com excelência no menor tempo possível para a atividade.",
  "PROATIVIDADE: Capacidade de antecipar situações e planejar soluções de forma independente.",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4 space-y-10">
        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-primary/15">
              <History />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Nossa História</h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                {historia}
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-primary/15">
                <BadgeCheck />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Missão</h3>
                <p className="mt-2 text-sm text-muted-foreground">{missao}</p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-primary/15">
                <Target />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Visão</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {visao.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>

        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Valores</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
            {valores.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
