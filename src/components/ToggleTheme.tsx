"use client"

import { useEffect, useState } from 'react';
import { detectColorTheme, toggleColorTheme} from '@/utils/colorTheme';

export default function ToggleTHeme()
{
    const [isDarkTheme, setIsDarkTheme] = useState(detectColorTheme() === 'dark')
    
    useEffect(() => {
        const colorTheme = isDarkTheme ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', colorTheme);
    }, [isDarkTheme]);

    return (
        <div>

        </div>
    );
}