import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const build = (x: number, y: number): Variants => ({
  hidden: { opacity: 0, x, y },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}) {
  const variants =
    from === "left" ? build(-60, 0) : from === "right" ? build(60, 0) : build(0, 40);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
