import { useEffect, useState } from "react";

export function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length] ?? "";
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        ),
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] bg-primary align-middle animate-pulse" />
    </span>
  );
}
