import { useEffect, useState } from "react"

export const useTheme = (themeElementId: string, defaultTheme: string): {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
} => {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || defaultTheme);
    useEffect(() => {
        const setThemeOnPage = () => {
            console.log('change theme');
            const rootElement = document.getElementById(themeElementId)
            if (!rootElement) { return }

            rootElement.classList.remove('light-theme')
            rootElement.classList.remove('dark-theme')
            rootElement.classList.add(theme)
        }

        window.localStorage.setItem('theme', theme)
        setThemeOnPage()
    }, [theme, themeElementId])

    return { theme, setTheme }
}
