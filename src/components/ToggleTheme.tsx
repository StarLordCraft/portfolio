'use client'

import { useEffect, useState } from 'react';

export default function ToggleTheme()
{
  let themePrefference: string = 'dark';
  
  useEffect(function detectColorTheme() {
  if(typeof localStorage.getItem("dark") == 'string'){
    themePrefference = localStorage.getItem("dark") == 'true' ? 'dark' : 'light';
  }
  else{
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themePrefference = 'dark';
    } else {
      themePrefference = 'light';
    }
  }
  setIsDarkTheme(() => themePrefference === 'dark');
  }, []);

  const [isDarkTheme, setIsDarkTheme] = useState <boolean> (themePrefference == 'dark');
  
  useEffect(() => {
      const colorTheme = isDarkTheme ? 'dark' : 'light';
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(colorTheme);
  }, [isDarkTheme]);
  
  const setTheme = async () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    localStorage.setItem('dark', (!isDarkTheme).toString());
  }

  return (
  <button
    className={`${
      isDarkTheme
        ? 'bg-gray-800 shadow-sm shadow-white'
        : 'bg-white shadow-sm shadow-black'
    } flex items-center justify-evenly min-h-[40px] min-w-[80px] transition-colors duration-300 rounded-full relative`}
    onClick={setTheme}
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