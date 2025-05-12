import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>('light');

    const enableTransition = () => {
        document.documentElement.classList.add('theme-transition');
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
    };

    const applyTheme = (newTheme: Theme) => {
        enableTransition();
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = storedTheme ?? (prefersDark ? 'dark' : 'light');
        setTheme(initial);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme have to use inside a ThemeProvider');
    }
    return context;
};
