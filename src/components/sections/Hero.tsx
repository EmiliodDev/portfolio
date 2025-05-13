import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'motion/react';

export const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-background text-primary flex min-h-screen items-center justify-center px-4 font-mono"
        >
            <div className="w-full max-w-3xl">
                <motion.div
                    className="withespace-pre-wrap text-sm leading-relaxed sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="text-brand">
                        $ boot emilio.dev{' '}
                        <span className="text-muted">--fullstack-developer</span>{' '}
                    </span>
                    <br />
                    <Typewriter
                        words={[
                            '✓ profile.config loaded',
                            '✓ stack.modules initialized',
                            '✓ projects.log parsed',
                            '✓ contact.exec registered',
                            '→ System ready. Enter to explore.',
                        ]}
                        typeSpeed={40}
                        deleteSpeed={0}
                        delaySpeed={900}
                        loop={1}
                        cursor
                    />
                </motion.div>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                >
                    <a
                        href="#profile"
                        className="border-border hover:text-accent hover:border-accent inline-block rounded-lg border px-6 py-3 text-sm transition"
                    >
                        Enter system
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
