import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider as NextThemeProvider } from 'next-themes';
export default function ThemeProvider({ children }) {
    return (_jsx(NextThemeProvider, { attribute: "class", defaultTheme: "light", children: children }));
}
