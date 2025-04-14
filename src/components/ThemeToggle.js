import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted)
        return null;
    return (_jsx(Button, { variant: "outline-secondary", onClick: () => setTheme(theme === 'light' ? 'dark' : 'light'), children: theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode' }));
}
