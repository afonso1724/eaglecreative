import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import logo from "@/assets/eagle-logo.png";
import { getPartnerBySlug, PartnerData } from "@/lib/partners";

export const Route = createFileRoute("/parceiros/$partner")({
  head: ({ params }) => {
    const partner = getPartnerBySlug(params.partner ?? "") ?? null;
    return {
      meta: [
        { title: partner ? `${partner.name} — Eagle Criative` : "Parceiro — Eagle Criative" },
        {
          name: "description",
          content: partner
            ? partner.description
            : "Detalhes dos nossos parceiros e projetos realizados.",
        },
      ],
    };
  },
  component: PartnerPage,
});

function PartnerPage(props?: { params?: { partner?: string } }) {
  const partner = props?.params?.partner;
  const data = getPartnerBySlug(partner ?? "");

  const [media, setMedia] = useState<PartnerMediaItem[] | null>(null);

  useEffect(() => {
    if (!data) return;

    let mounted = true;
    async function loadIndex() {
      try {
        const res = await fetch(import.meta.env.BASE_URL + "assets/parceiros/index.json");
        if (!res.ok) {
          if (mounted) setMedia([]);
          return;
        }
        const index = await res.json();

        const normalize = (s: string) =>
          s
            .toString()
            .normalize("NFKD")
            .replace(/\p{Diacritic}/gu, "")
            .toLowerCase()
            .replace(/[^a-z0-9-]+/g, "-")
            .replace(/^-+|-+$/g, "");

        const folder = data.assetFolder.replace(/\\/g, "/");
        const entry = index.find((e: any) => normalize(e.folder) === normalize(folder));

        if (entry && entry.files.length > 0) {
          const items: PartnerMediaItem[] = entry.files.map((f: any, i: number) => {
            const fileName = f.file;
            const baseName = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
            const fileNameLower = baseName.toLowerCase();
            const extension = fileName.split('.').pop()?.toLowerCase() ?? "";
            const type = extension === "mp4" ? "video" : "image";

            let specific = "Imagem";
            if (type === "video") specific = "Vídeo";
            else if (/flyer|panfleto|poster|cartaz/.test(fileNameLower)) specific = "Flyer / Panfleto";
            else if (/art|arte|design|cover|poster/.test(fileNameLower)) specific = "Arte";

            const projectTitle = data.projects?.[i]?.title;
            const title = projectTitle ? projectTitle : `${data.name} — ${specific}`;
            const description = specific;
            const category = specific;

            return {
              title,
              description,
              category,
              tags: [type === "video" ? "Motion" : "Visual", ...(data.tags.slice(0, 1) || [])],
              type: type as "image" | "video",
              src: import.meta.env.BASE_URL + f.src,
            };
          });

          if (mounted) setMedia(items);
          return;
        }

        // fallback to partner image + projects
        const fallback = [
          {
            title: `${data.name} — Destaque`,
            description: data.description,
            category: "Apresentação",
            tags: data.tags.slice(0, 2),
            type: "image",
            src: data.image,
          },
          ...data.projects.map((project) => ({
            title: project.title,
            description: project.category,
            category: project.category,
            tags: project.tags,
            type: "image" as const,
            src: data.image,
          })),
        ];

        if (mounted) setMedia(fallback);
      } catch (e) {
        if (mounted) setMedia([]);
      }
    }

    loadIndex();
    return () => {
      mounted = false;
    };
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="px-5 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold">Parceiro não encontrado</h1>
            <p className="mt-4 text-muted-foreground">Tente voltar à página inicial e escolher outro parceiro.</p>
            <Link
              to="/"
              className="mt-8 inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Voltar ao início
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // media is loaded asynchronously into state by the effect above
  // `media` state may be null (loading), [] (no media) or array of items

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section className="ambient-glow px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Eagle Criative" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Parceiro</p>
                  <h1 className="text-4xl font-extrabold sm:text-5xl">{data.name}</h1>
                </div>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-semibold transition hover:border-primary"
              >
                <ArrowLeft size={16} /> Voltar ao início
              </Link>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{data.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal from="left">
              <h2 className="text-3xl font-bold sm:text-4xl">Projetos para {data.name}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Veja o trabalho que realizámos para este parceiro, com vídeos, artes e desenvolvimento digital.
              </p>
            </Reveal>

            <div className="mt-12">
              {media.length === 0 ? (
                <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-border p-12 text-center">
                  <h3 className="text-xl font-semibold">As mídias serão carregadas em breve</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Estamos a preparar os conteúdos para este parceiro. Volte mais tarde para ver atualizações.</p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {media.map((item, i) => (
                    <Reveal key={`${item.title}-${i}`} from="up">
                      <article className="glass-card h-full rounded-3xl p-7">
                        {item.type === "video" ? (
                          <video controls className="mb-5 w-full rounded-2xl bg-black">
                            <source src={item.src} type="video/mp4" />
                          </video>
                        ) : (
                          <img src={item.src} alt={item.title} className="mb-5 w-full rounded-2xl object-cover" />
                        )}
                        <div className="flex items-center justify-between gap-4">
                          <span className="rounded-full bg-gradient-brand px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                            {item.category}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-[11px] text-secondary-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Eagle Criative" width={32} height={32} loading="lazy" className="h-8 w-8" />
            <span className="font-display font-bold">
              Eagle <span className="text-gradient">Criative</span>
            </span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link
              to="/"
              onClick={() => setTimeout(() => (window.location.hash = "inicio"), 40)}
              className="hover:text-foreground"
            >
              Início
            </Link>
            <Link
              to="/"
              onClick={() => setTimeout(() => (window.location.hash = "sobre"), 40)}
              className="hover:text-foreground"
            >
              Sobre Nós
            </Link>
            <Link
              to="/"
              onClick={() => setTimeout(() => (window.location.hash = "projetos"), 40)}
              className="hover:text-foreground"
            >
              Projetos
            </Link>
            <Link
              to="/"
              onClick={() => setTimeout(() => (window.location.hash = "equipa"), 40)}
              className="hover:text-foreground"
            >
              Equipa
            </Link>
            <Link
              to="/"
              onClick={() => setTimeout(() => (window.location.hash = "contactos"), 40)}
              className="hover:text-foreground"
            >
              Contactos
            </Link>
          </div>

          <SocialLinks />
        </div>
        <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eagle Criative | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

const partnerMediaImports = import.meta.glob(
  "../../assets/parceiros/**/*.{jpeg,jpg,png,webp,mp4}",
  { eager: true, as: "url" },
) as Record<string, string>;

type PartnerMediaItem = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  type: "image" | "video";
  src: string;
};

function getPartnerMedia(partner: PartnerData): PartnerMediaItem[] {
  // If this partner is known to not have available media yet, return empty so
  // the UI shows the placeholder message.
  if (partner.slug === "sanilimp") return [];

  const folder = partner.assetFolder.replace(/\\/g, "/");
  const entries = Object.entries(partnerMediaImports).filter(([key]) =>
    key.includes(`parceiros/${folder}/`),
  );

  const mediaItems = entries.map(([key, src], i) => {
    const fileName = key.split("/").pop() ?? "media";
    const baseName = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    const fileNameLower = baseName.toLowerCase();
    const extension = fileName.split(".").pop()?.toLowerCase() ?? "";
    const type = extension === "mp4" ? "video" : "image";

    // Try to detect more specific media type from the filename
    let specific = "Imagem";
    if (type === "video") specific = "Vídeo";
    else if (/flyer|panfleto|poster|cartaz/.test(fileNameLower)) specific = "Flyer / Panfleto";
    else if (/art|arte|design|cover|poster/.test(fileNameLower)) specific = "Arte";

    // Prefer using a project title if it exists at the same index
    const projectTitle = partner.projects?.[i]?.title;
    const title = projectTitle ? projectTitle : `${partner.name} — ${specific}`;
    const description = specific;
    const category = specific;

    return {
      title,
      description,
      category,
      tags: [type === "video" ? "Motion" : "Visual", ...(partner.tags.slice(0, 1) || [])],
      type: type as "image" | "video",
      src,
    };
  });

  if (mediaItems.length > 0) return mediaItems;

  // Fallback: show partner image and projects (but these will be generic)
  return [
    {
      title: `${partner.name} — Destaque`,
      description: partner.description,
      category: "Apresentação",
      tags: partner.tags.slice(0, 2),
      type: "image",
      src: partner.image,
    },
    ...partner.projects.map((project) => ({
      title: project.title,
      description: project.category,
      category: project.category,
      tags: project.tags,
      type: "image" as const,
      src: partner.image,
    })),
  ];
}
