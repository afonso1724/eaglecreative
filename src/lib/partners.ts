import partner1 from "@/assets/parceiros/WhatsApp Image 2026-08-10 at 8.01.54 PM.jpeg";
import partner2 from "@/assets/parceiros/WhatsApp Image 2026-08-10 at 8.01.54 PM (1).jpeg";
import partner3 from "@/assets/parceiros/WhatsApp Image 2026-08-10 at 8.01.56 PM.jpeg";
import partner4 from "@/assets/parceiros/WhatsApp Image 2026-08-10 at 8.01.57 PM.jpeg";

export interface PartnerProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface PartnerData {
  slug: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  assetFolder: string;
  projects: PartnerProject[];
}

export const partners: PartnerData[] = [
  {
    slug: "kompraki",
    name: "Kompra'ki",
    image: partner1,
    assetFolder: "Kompra''ki",
    description: "Marca de referência produção de alumínios e caixilharia.",
    tags: ["Branding", "Web", "Motion"],
    projects: [
      {
        title: "Rebranding Completo",
        category: "Branding",
        description: "Nova identidade visual, aplicações de marca e guidelines estratégicos.",
        tags: ["Branding", "Identidade"],
      },
      {
        title: "Rebranding Completo",
        category: "Web",
        description: "Site responsivo e moderno com foco em conversão e storytelling.",
        tags: ["Branding", "Identidade"],
      },
      {
        title: "Vídeos Motion",
        category: "Motion",
        description: "Conteúdos animados para redes sociais e campanhas digitais.",
        tags: ["Motion", "Vídeo"],
      },
    ],
  },
  {
    slug: "sanilimp",
    name: "Sanilimp",
    image: partner2,
    assetFolder: "Sanilimp",
    description: "Especialista em prestação de serviços de sanitários quimícos.",
    tags: ["Branding", "Web", "Motion"],
    projects: [
      {
        title: "Campanha de Lançamento",
        category: "Branding",
        description: "Criação de conceito de comunicação e identidade visual para lançamento.",
        tags: ["Branding", "Campanha"],
      },
      {
        title: "Website Promocional",
        category: "Web",
        description: "Página de produto otimizada para captação de leads.",
        tags: ["Web", "Performance"],
      },
      {
        title: "Animações Sociais",
        category: "Motion",
        description: "Séries de vídeos para feeds e stories que ampliam o alcance.",
        tags: ["Motion", "Social"],
      },
    ],
  },
  {
    slug: "sos-k",
    name: "SOS|K",
    image: partner3,
    assetFolder: "SOS_K",
    description: "Projeto focado em produção de caixilharia de alumínio.",
    tags: ["Branding", "Web", "Motion"],
    projects: [
      {
        title: "Identidade Visual",
        category: "Branding",
        description: "Criação do novo logotipo da marca.",
        tags: ["Branding", "Design"],
      },
      {
        title: "Identidade Visual",
        category: "Branding",
        description: "Criação a nova identidade visual da marca.",
        tags: ["Web", "Conteúdo"],
      },
      {
        title: "Série Motion Graphics",
        category: "Motion",
        description: "Videos animados para comunicação de produtos e serviços.",
        tags: ["Motion", "Animação"],
      },
    ],
  },
  {
    slug: "segredos-em-imagens",
    name: "Segredos em imagens",
    image: partner4,
    assetFolder: "Segredos_em_imagens",
    description: "Agência de fotografias, trabalhamos conteúdo visual que gera conexão e resultados reais.",
    tags: ["Branding", "Web", "Motion"],
    projects: [
      {
        title: "Flyer",
        category: "Branding",
        description: "Direção criativa para reposicionamento de marca.",
        tags: ["Branding", "Posicionamento"],
      },
      {
        title: "Flyer",
        category: "Branding",
        description: "Plataforma digital com portfólio e casos de sucesso.",
        tags: ["Web", "Portfólio"],
      },
      {
        title: "Conteúdos Animados",
        category: "Motion",
        description: "Peças visuais para campanhas e redes sociais.",
        tags: ["Motion", "Conteúdo"],
      },
    ],
  },
];

export function getPartnerBySlug(slug: string) {
  const normalize = (s: string) =>
    s
      .toString()
      .normalize("NFKD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const target = normalize(slug || "");
  return partners.find((partner) => normalize(partner.slug) === target);
}
