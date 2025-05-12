import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-secondary hover:text-accent inline-flex h-6 w-6 items-center justify-center align-middle transition"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};
