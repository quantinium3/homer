"use client"

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme)
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    return (
        <button
            onClick={toggleTheme}
            className="relative w-8 h-8 overflow-hidden"
        >
            <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300
            ${theme === 'light' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        `}
            >
                <Sun />
            </span>
            <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300
            ${theme === 'dark' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
            >
                <Moon />
            </span>
        </button>
    );
}
