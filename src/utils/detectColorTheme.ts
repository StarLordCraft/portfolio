export default function detectColorTheme()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        return 'dark';
    else return 'light';
}