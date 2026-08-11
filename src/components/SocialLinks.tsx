import { Facebook, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.03 6.34 6.34 0 0 0 9.34 21.4a6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.91 1.6V6.9a4.85 4.85 0 0 1-1-.21z" />
    </svg>
  );
}

const iconByKind = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TikTokIcon,
} as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex gap-3"}>
      {SOCIAL_LINKS.map(({ label, href, kind }) => {
        const Icon = iconByKind[kind];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
