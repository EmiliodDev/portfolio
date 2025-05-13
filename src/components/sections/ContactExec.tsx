import { useState } from 'react';
import { motion } from 'motion/react';

export function ContactExec() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="bg-background text-primary flex min-h-screen items-center justify-center px-4 font-mono"
        >
            <div className="w-full max-w-3xl">
                <h2 className="text-muted mb-4 text-sm font-bold tracking-tight">
                    // contact.exec
                </h2>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border-border bg-surface/80 space-y-4 rounded-md border p-6 text-sm shadow-sm backdrop-blur-sm"
                >
                    <p className="text-[--color-brand]">$ send-message --to emilio@dev.com</p>

                    <div className="space-y-1">
                        <label htmlFor="name">&gt; name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="border-border text-primary placeholder:text-muted focus:border-brand w-full border-b bg-transparent py-1 focus:outline-none"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email">&gt; email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="border-border text-primary placeholder:text-muted focus:border-brand w-full border-b bg-transparent py-1 focus:outline-none"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="message">&gt; message:</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            className="border-border text-primary placeholder:text-muted focus:border-brand w-full rounded-md border bg-transparent p-2 focus:outline-none"
                            placeholder="Type your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="border-border hover:border-accent hover:text-accent mt-4 inline-block rounded-md border px-5 py-2 text-sm transition"
                    >
                        Press [Enter] to send
                    </button>

                    {submitted && (
                        <p className="text-muted mt-2 text-xs">Message sent successfully!</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
}
