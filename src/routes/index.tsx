import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Mail,
  MessageCircle,
  Sparkles,
  Rocket,
  ShoppingBag,
  Palette,
  Globe,
  Camera,
  Cpu,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
const logo = "/assets/eagle-logo.png";
const eliseu = "/assets/team/eliseu.png";
import { partners } from "@/lib/partners";
import { EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site";
const josue = "/assets/team/josue.png";
const lucia = "/assets/team/lucia.png";
const tilson = "/assets/team/tilson.png";

const WHATSAPP = WHATSAPP_URL;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eagle Creative" },
      {
        name: "description",
        content:
          "Onde a criatividade ganha asas. Transformamos ideias em marcas que se destacam.",
      },
      { property: "og:title", content: "Eagle Criative" },
      {
        property: "og:description",
        content:
          "Criatividade que comunica. Estratégia que conecta. Resultados que fazem crescer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const about = [
  {
    icon: Palette,
    title: "Design Gráfico",
    text: "Damos forma às suas ideias.",
  },
  {
    icon: Camera,
    title: "Produção de Conteúdo",
    text: "Criamos conteúdos que captam atenção e geram conexão.",
  },
  {
    icon: Globe,
    title: "Gestão de Redes Sociais",
    text: "Construímos presença. Criamos comunidade. Geramos resultados.",
  },
  {
    icon: Sparkles,
    title: "Estratégia Criativa",
    text: "Criatividade que comunica. Estratégia que conecta. Resultados que fazem crescer.",
  },
];

const team = [
  { name: "Tilson Contreira",
    role: "CEO, DIRETOR CRIATIVO & GESTOR DE REDES SOCIAIS",
    image: tilson },
  { name: "Lúcia Calala", role: "Apresentadora e Copywriter", image: lucia },
  { name: "Josué Manuel", role: "Video Maker", image: josue },
  {
    name: "Eliseu Bernardo", role: "Designer Gráfico", image: eliseu,
  },
];



function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="inicio" className="ambient-glow relative overflow-hidden px-5 pt-36 pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              src={logo}
              alt="Eagle Criative"
              width={112}
              height={112}
              className="mx-auto h-24 w-24 drop-shadow-[0_0_40px_rgba(250,100,0,0.45)]"
            />
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 text-4xl leading-[1.1] font-extrabold sm:text-6xl"
            >
              Eagle Creative
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
            >
              <p>Onde a criatividade ganha asas.</p>
              <p className="mt-4">
                <Typewriter
                  phrases={[
                    "Transformamos ideias em marcas que se destacam.",
                    "Criatividade que comunica. Estratégia que conecta. Resultados que fazem crescer.",
                  ]}
                />
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#sobre"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Explorar Agência
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-7 py-3.5 font-semibold backdrop-blur-md transition-colors hover:border-primary"
              >
                <MessageCircle size={18} className="text-primary" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal from="left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Quem Somos & <span className="text-gradient">Nossos Serviços</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                A <span className="text-gradient">Eagle Creative</span> é uma agência deicada a elavar marcas através do design e da comunicação com propósito.
                O nosso compromisso é simples: dar forma âs tuas ideias, captar a atenção do teu público e gerar resulatdos que fazem o teu negócio crescer. Trabalhamos na interseção entre a criatividade que comunica e a estratégia que converte, garantindo que cada projeto deixe um impacto duradouro no mercado.
                A sua marca tem potencial e nós damos-lhe asas para conquistar novos horizontes.                                        
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {about.map((item, i) => (
                <Reveal key={item.title} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
                  <article className="glass-card h-full rounded-3xl p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                      <item.icon size={22} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS & PARCERIAS */}
        <section id="projetos" className="ambient-glow px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal from="left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Projetos & <span className="text-gradient">Parcerias</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Marcas que confiaram em nós para dar o próximo passo  e os resultados que
                construímos juntos.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner, i) => (
                <Reveal key={partner.slug} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
                  <Link
                    to="/parceiros/$partner"
                    params={{ partner: partner.slug }}
                    className="group glass-card flex h-full flex-col overflow-hidden rounded-3xl p-0 text-left transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                      <div>
                        <h3 className="text-xl font-semibold">{partner.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          Clique para ver os projetos realizados.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {partner.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal from="up" delay={0.15}>
              <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-glass p-8 text-center backdrop-blur-md sm:flex-row sm:text-left">
                <p className="max-w-md text-muted-foreground">
                  Quer ver a sua marca nesta lista? Vamos criar algo memorável juntos.
                </p>
                <a
                  href="#contactos"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Iniciar parceria
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>


        {/* EQUIPA */}
        <section id="equipa" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal from="right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                A <span className="text-gradient">Equipa</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
               Conheça as pessoas que tornam tudo isso possível.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <Reveal key={member.name} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
                  <article className="glass-card h-full rounded-3xl p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto h-20 w-20 rounded-full object-cover"
                    />
                    <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTOS */}
        <section id="contactos" className="ambient-glow px-5 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <Reveal from="left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pronto para fazer a sua marca voar?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Conte-nos a sua ideia. Respondemos em menos de 24 horas.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Mail size={18} />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="font-medium">{EMAIL}</span>
                  </span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <MessageCircle size={18} />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">WhatsApp</span>
                    <span className="font-medium">{WHATSAPP_NUMBER}</span>
                  </span>
                </a>
                <div className="glass-card rounded-2xl p-5">
                  <p className="text-sm text-muted-foreground">Redes sociais</p>
                  <SocialLinks className="mt-4 flex gap-3" />
                </div>
              </div>
            </Reveal>

            <Reveal from="right">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Eagle Criative" width={32} height={32} loading="lazy" className="h-8 w-8" />
            <span className="font-display font-bold">
              Eagle <span className="text-gradient">Creative</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-foreground">Início</a>
            <a href="#sobre" className="hover:text-foreground">Sobre Nós</a>
            <a href="#projetos" className="hover:text-foreground">Projetos</a>
            <a href="#equipa" className="hover:text-foreground">Equipa</a>
            <a href="#contactos" className="hover:text-foreground">Contactos</a>
          </nav>

          <SocialLinks />
        </div>
        <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eagle Creative | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
