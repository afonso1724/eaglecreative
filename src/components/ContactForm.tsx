"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const body = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-7">
      {status === "success" && (
        <p
          role="status"
          className="mb-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
        >
          Mensagem enviada com sucesso! Entraremos em contacto em breve.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="mb-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground"
        >
          Não foi possível enviar a mensagem. Tente novamente ou contacte-nos pelo WhatsApp.
        </p>
      )}

      <label className="block text-sm text-muted-foreground" htmlFor="name">
        Nome
      </label>
      <input
        id="name"
        name="name"
        required
        placeholder="O seu nome"
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
      />

      <label className="mt-5 block text-sm text-muted-foreground" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="O seu e-mail"
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
      />

      <label className="mt-5 block text-sm text-muted-foreground" htmlFor="message">
        Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        placeholder="Fale-nos do seu projeto..."
        className="mt-2 w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-gradient-brand py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "A enviar…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
