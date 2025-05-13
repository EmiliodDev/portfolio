import { motion } from 'motion/react';

const stack = [
    { name: 'React 19', role: 'frontend.component' },
    { name: 'TypeScript', role: 'static.type-system' },
    { name: 'Flask API', role: 'backend.controller' },
    { name: 'PostgreSQL', role: 'relational.database' },
    { name: 'TailwindCSS', role: 'ui.style-engine' },
    { name: 'JetBrains Mono', role: 'terminal.font' },
    { name: 'Vite', role: 'build.tool' },
];

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: 'easeOut',
        },
    }),
};

export const StackModules = () => {
    return (
        <section
            id="stack"
            className="bg-background text-primary flex min-h-screen items-center justify-center px-4 font-mono"
        >
            <div className="w-full max-w-2xl">
                <h2 className="text-muted mb-4 text-sm font-bold tracking-tight">
                    // stack.modules{' '}
                </h2>
                <div className="bg-surface/80 border-border rounded-md border p-6 text-sm leading-relaxed shadow-sm backdrop-blur-sm">
                    <p className="text-brand mb-4">$ init stack.modules</p>
                    <ul className="space-y-2">
                        {stack.map((module, index) => (
                            <motion.li
                                key={module.name}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={itemVariants}
                                className="flex items-center justify-between"
                            >
                                <span className="text-secondary">✓ {module.name}</span>
                                <span className="text-muted">— {module.role}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
