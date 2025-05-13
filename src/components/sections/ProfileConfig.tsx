import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { motion } from 'motion/react';

export const ProfileConfig = () => {
    const profileObject = {
        name: 'Emilio Ortiz',
        title: 'Lead Software Engineer',
        location: 'Guadalajara, MX',
        stack: ['React', 'Typescript', 'Flask', 'SQL Server'],
        availableForHire: false,
        contact: {
            email: 'ortizemilio.dev@gmail.com',
            github: 'github.com/EmiliodDev',
            linkedin: 'linkedin.com/in/emiliod-ortiz',
        },
    };

    const codeString = JSON.stringify(profileObject, null, 2);

    return (
        <section
            id="profile"
            className="bg-background text-primary flex min-h-screen items-center justify-center px-4 font-mono"
        >
            <div className="w-full max-w-2xl">
                <h2 className="text-muted mb-2 text-sm font-bold tracking-tight">
                    // profile.config
                </h2>
                <motion.div
                    className="bg-surface/80 border-border w-full max-w-3xl rounded-md border p-6 shadow-sm backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() => navigator.clipboard.writeText(codeString)}
                        className="text-muted hover:text-brand absolute top-3 right-3 text-xs transition"
                    >
                        copy
                    </button>

                    <SyntaxHighlighter
                        language="json"
                        style={atomOneDark}
                        customStyle={{
                            background: 'transparent',
                            fontSize: '0.875rem',
                            lineHeight: '1.5rem',
                            fontFamily: 'var(--font-mono)',
                        }}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </motion.div>
            </div>
        </section>
    );
};
