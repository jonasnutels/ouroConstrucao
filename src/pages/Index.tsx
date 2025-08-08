import BrandHeader from "@/components/site/BrandHeader";
import HeroSection from "@/components/site/HeroSection";
import FeaturesStrip from "@/components/site/FeaturesStrip";
import AboutSection from "@/components/site/AboutSection";
import ContactSection from "@/components/site/ContactSection";
import SiteFooter from "@/components/site/SiteFooter";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const title = "Ouro Preto Construção | Materiais de Construção";
  const description = "Entrega grátis na região. Parcele em até 6x. Seg-Sáb 07h30-18h, Dom 08h-12h. Ligue: (82) 3028-2936 ou fale no WhatsApp.";
  const canonical = typeof window !== "undefined" ? window.location.href : "/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: "Ouro Preto Construção",
    slogan: "A loja da sua construção!",
    url: canonical,
    telephone: "+55 82 3028-2936",
    areaServed: "Região",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "07:30", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "08:00", "closes": "12:00" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <BrandHeader />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesStrip />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
