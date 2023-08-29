import ToggleTheme from "./ToggleTheme";

export default function Header()
{
    return (
    <header className="absolute z-30 w-full flex justify-end">
        <ToggleTheme />
    </header>
    );
}