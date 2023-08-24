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
        <div>

        </div>
    );
}