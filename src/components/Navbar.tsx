import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const logo = "/assets/eagle-logo.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#projetos", label: "Projetos" },
  { href: "#equipa", label: "Equipa" },
  { href: "#contactos", label: "Contactos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Logótipo Eagle Criative" width={40} height={40} className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight">
            Eagle <span className="text-gradient">Creative</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="story-link text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contactos"
          className="hidden rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-block"
        >
          Vamos falar
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-border p-2 md:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="ml-auto flex h-full w-72 flex-col gap-2 border-l border-border bg-card p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="mb-6 self-end rounded-lg border border-border p-2"
              >
                <X size={18} />
              </button>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
