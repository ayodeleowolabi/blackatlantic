import { useMemo, useState } from "react"
import { motion } from "framer-motion"

const SUBJECT_OPTIONS = [
  "Afrocidade",
  "Sahel",
  "Atlantic Aerial",
  "Workshops",
  "Other",
]

function Contact() {
  // Formspree endpoint goes here:
  // After you create a Formspree form, you'll get something like:
  // https://formspree.io/f/abcdwxyz
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdaqznn"

  const [status, setStatus] = useState({ state: "idle", message: "" })
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Afrocidade",
    message: "",
  })

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.subject.trim() &&
      form.message.trim()
    )
  }, [form])

  function onChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: "loading", message: "" })

    try {
      // Payload that Formspree will email to blkatlantic@gmail.com
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        subject: form.subject,
        message: form.message,
        _replyto: form.email, // helps email clients reply to sender
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Failed to send message.")
      }

      setStatus({ state: "success", message: "Message sent. We’ll get back to you soon." })
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "Afrocidade",
        message: "",
      })
    } catch (err) {
      setStatus({
        state: "error",
        message: "Something went wrong sending your message. Please try again.",
      })
    }
  }

  return (
    <main className="pt-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-muted text-sm tracking-widest uppercase mb-4"
        >
          Reach Out
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl text-primary leading-tight mb-4"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-muted text-lg max-w-2xl mx-auto"
        >
          Send a message to Black Atlantic. We’ll respond as soon as possible.
        </motion.p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="bg-surface border border-white/10 rounded-none p-6 md:p-8"
      >
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-body text-sm text-muted mb-2" htmlFor="firstName">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              className="w-full bg-base border border-white/10 px-4 py-3 text-primary outline-none focus:border-sahel"
              placeholder="First name"
              required
            />
          </div>

          <div>
            <label className="block font-body text-sm text-muted mb-2" htmlFor="lastName">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              className="w-full bg-base border border-white/10 px-4 py-3 text-primary outline-none focus:border-sahel"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="block font-body text-sm text-muted mb-2" htmlFor="email">
            Email (where you’re emailing from)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full bg-base border border-white/10 px-4 py-3 text-primary outline-none focus:border-sahel"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Subject dropdown */}
        <div className="mt-5">
          <label className="block font-body text-sm text-muted mb-2" htmlFor="subject">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={onChange}
            className="w-full bg-base border border-white/10 px-4 py-3 text-primary outline-none focus:border-sahel"
            required
          >
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="mt-5">
          <label className="block font-body text-sm text-muted mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            className="w-full bg-base border border-white/10 px-4 py-3 text-primary outline-none focus:border-sahel min-h-[180px] resize-y"
            placeholder="Write your message…"
            required
          />
        </div>

        {/* Status + Submit */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="font-body text-sm">
            {status.state === "success" && (
              <span className="text-sahel">{status.message}</span>
            )}
            {status.state === "error" && (
              <span className="text-afrocidade">{status.message}</span>
            )}
            {status.state === "loading" && (
              <span className="text-muted">Sending…</span>
            )}
          </div>

          <button
            type="submit"
            disabled={!canSubmit || status.state === "loading"}
            className={[
              "font-body text-sm tracking-widest uppercase px-8 py-3 border",
              "transition-all duration-300",
              "border-sahel text-sahel hover:bg-sahel hover:text-base",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-sahel",
            ].join(" ")}
          >
            Send
          </button>
        </div>
      </motion.form>

      {/* Optional fallback */}
      <div className="mt-8 text-center font-body text-muted text-sm">
        Prefer email?{" "}
        <a className="text-sahel underline underline-offset-4" href="mailto:blkatlantic@gmail.com">
          blkatlantic@gmail.com
        </a>
      </div>
    </main>
  )
}

export default Contact