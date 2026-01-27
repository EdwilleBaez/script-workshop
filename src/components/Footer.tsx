const Footer = () => {
  return (
    <footer className="py-12 bg-soft/30 border-t border-border">
      <div className="section-container">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Edwille Báez · Escritura de guiones · Mentoría creativa
          </p>
          <div className="divider" />
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
