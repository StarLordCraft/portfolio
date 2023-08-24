"use client"

import { useEffect, useState } from 'react';

export default function ToggleTHeme()
{
  let themePrefference; 
  useEffect(function detectColorTheme() {
    let themePreference;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themePreference = 'dark';
    } else {
      themePreference = 'light';
    }
    setIsDarkTheme(themePreference === 'dark');
  }, []);

  const [isDarkTheme, setIsDarkTheme] = useState(themePrefference === 'dark');
  
  useEffect(() => {
      const colorTheme = isDarkTheme ? 'dark' : 'light';
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(colorTheme);
  }, [isDarkTheme]);

    return (
    <button
      className={`${
        isDarkTheme
          ? 'bg-gray-800 shadow-sm shadow-white'
          : 'bg-white shadow-sm shadow-black'
      } flex items-center justify-evenly min-h-[40px] min-w-[80px] transition-colors duration-300 rounded-full relative`}
      onClick={() => setIsDarkTheme((prevTheme) => !prevTheme)}
    >
      <span
        className={`material-symbols-outlined relative z-20 
        ${isDarkTheme ? 'text-white' : 'invisible'
        }`}
      >
        dark_mode
      </span>

      <span
        className={`material-symbols-outlined relative z-20 
        ${isDarkTheme ? 'invisible' : 'text-white'
        }`}
      >
        light_mode
      </span>

      <div
        className={`absolute z-10 w-10 h-10 bg-indigo-500 rounded-full ${
          isDarkTheme ? 'animate-move-left' : 'animate-move-right'
        }`}></div>
    </button>
    );
}