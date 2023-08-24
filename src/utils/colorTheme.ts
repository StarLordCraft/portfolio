export function detectColorTheme()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        return 'dark';
    else return 'light';
}

export function toggleColorTheme (colorTheme: string)
{
    const newColorTheme = colorTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(colorTheme);
    document.documentElement.classList.add(newColorTheme);
    
    return newColorTheme;
}