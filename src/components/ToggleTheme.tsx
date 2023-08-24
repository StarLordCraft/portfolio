"use client"

import { useEffect, useState } from 'react';
import detectColorTheme from '@/utils/detectColorTheme';

export default function ToggleTHeme()
{
    const [isDarkTheme, setIsDarkTheme] = useState(detectColorTheme() === 'dark')
    
    useEffect(() => {
        const colorTheme = isDarkTheme ? 'dark' : 'light';
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(colorTheme);
    }, [isDarkTheme]);

    return (
        <button
        className={`${
            isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } min-h-[40px] min-w-[40px] transition-colors duration-300 rounded-full`}
            onClick={() => setIsDarkTheme(prevTheme => !prevTheme)}
        >
            <span className="material-symbols-outlined">
                {isDarkTheme? "dark_mode" : "light_mode" }
            </span>
        </button>
    );
}