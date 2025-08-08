const SiteFooter = () => {
  return (
    <footer className="border-t bg-background/70">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ouro Preto Construção. Todos os direitos reservados.
        </p>
        <nav className="text-sm text-muted-foreground">
          <a className="hover:text-foreground" href="#contato">Contato</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
