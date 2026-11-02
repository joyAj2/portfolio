import { useState, type ChangeEvent, type FormEvent } from "react";
import { contactTopics } from "../content/portfolio";
import { supabase } from "../lib/supabase";
import { buttonPrimary } from "./styles";

type FormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm: FormValues = {
  name: "",
  email: "",
  topic: contactTopics[0],
  message: "",
};

const fieldClass =
  "w-full border-b border-ink-600 bg-transparent py-4 text-lg text-bone-100 placeholder:text-ink-500 outline-none transition-colors duration-300 focus:border-accent-400";

function validate(values: FormValues): string | null {
  if (!values.name.trim()) return "Please enter your name.";
  if (!emailPattern.test(values.email.trim())) return "Please enter a valid email address.";
  if (!values.message.trim()) return "Please write a short message.";
  return null;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState<string | null>(null);

  const handleChange = (field: "name" | "email" | "message") => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationError = validate(values);
    if (validationError) {
      setProblem(validationError);
      return;
    }

    setProblem(null);
    setStatus("sending");
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: values.name.trim(),
        email: values.email.trim(),
        topic: values.topic,
        message: values.message.trim(),
      });
      if (error) throw error;
      setValues(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success-400/40 bg-ink-900 p-8">
        <p className="font-display text-4xl leading-[1.2]">Thank you, your message is on its way.</p>
        <p className="mt-4 leading-[1.5] text-bone-300">I read every message personally and will reply soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-accent-400 underline underline-offset-8 hover:text-accent-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">Name</span>
        <input
          type="text"
          autoComplete="name"
          maxLength={120}
          value={values.name}
          onChange={handleChange("name")}
          placeholder="Your name"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">Email</span>
        <input
          type="email"
          autoComplete="email"
          maxLength={200}
          value={values.email}
          onChange={handleChange("email")}
          placeholder="you@company.com"
          className={fieldClass}
        />
      </label>

      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">What is this about?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {contactTopics.map((topic) => {
            const active = values.topic === topic;
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={active}
                onClick={() => setValues((prev) => ({ ...prev, topic }))}
                className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  active
                    ? "border-bone-100 bg-bone-100 text-ink-950"
                    : "border-ink-600 text-bone-300 hover:border-bone-100 hover:text-bone-100"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">Message</span>
        <textarea
          rows={4}
          maxLength={5000}
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell me about the role, project or idea."
          className={`${fieldClass} resize-none`}
        />
      </label>

      {problem && (
        <p role="alert" className="text-sm text-error-400">
          {problem}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-error-400">
          Something went wrong while sending. Please try again in a moment.
        </p>
      )}

      <button type="submit" disabled={sending} className={`${buttonPrimary} w-full justify-between disabled:opacity-60`}>
        {sending ? "Sending..." : "Send message"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
