// src/components/sections/ProjectsLog.tsx
import { motion } from 'motion/react';

const projects = [
    {
        command: 'run omnia-erp',
        stack: ['React', 'Node.js', 'PostgreSQL'],
        output: 'Deployed to 11 branches (Production)',
        link: 'https://github.com/emilio/omnia-erp',
    },
    {
        command: 'open logistics-dashboard',
        stack: ['Flask', 'Chart.js', 'REST API'],
        output: 'Live metrics available — v2.3.1',
        link: 'https://github.com/emilio/logistics-dashboard',
    },
    {
        command: 'execute ai-document-processor',
        stack: ['FastAPI', 'OCR', 'MongoDB'],
        output: 'Pipeline processed 30k docs in 2.5s',
        link: 'https://github.com/emilio/ai-document-processor',
    },
];

export const ProjectsLog = () => {
    return (
        <section
            id="projects"
            className="bg-background text-primary flex min-h-screen items-center justify-center px-4 font-mono"
        >
            <div className="w-full max-w-3xl">
                <h2 className="text-muted mb-4 text-sm font-bold tracking-tight">
                    // projects.log
                </h2>
                <div className="bg-surface/80 border-border space-y-6 rounded-md border p-6 text-sm shadow-sm backdrop-blur-sm">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.command}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-1"
                        >
                            <p className="text-brand">$ {project.command}</p>
                            <p className="text-secondary"> {project.output}</p>
                            <p className="text-muted"># stack: {project.stack.join(', ')}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent text-xs hover:underline"
                            >
                                ↗ View code
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
