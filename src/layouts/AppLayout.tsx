import { ThemeToggle } from '@/components/common/ThemeToggle';
import type { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-background text-primary min-h-screen">
            <header className="rigth-0 bg-surface border-border fixed top-0 left-0 z-50 w-full border-b">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                    <span className="text-brand text-xl font-bold tracking-tight">emilio.dev</span>
                    <nav className="text-secondary space-x-6 text-sm font-medium">
                        <ThemeToggle />
                        <a href="#about" className="hover:text-accent transition">
                            About me
                        </a>
                        <a href="#stack" className="hover:text-accent transition">
                            Stack
                        </a>
                        <a href="#projects" className="hover:text-accent transition">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-accent transition">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            <main className="pt-20">{children}</main>
        </div>
    );
};
