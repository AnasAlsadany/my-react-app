import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import "./Menu.scss";
export default function Menu() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { className: `navbar-wrapper ${isDark ? "dark" : "light"}`, children: _jsxs("div", { className: "navbar-container", children: [_jsx("a", { href: "#", children: "Product" }), _jsx("a", { href: "#", children: "Integration" }), _jsx("a", { href: "#", children: "Demo" }), _jsx("a", { href: "#", children: "Pricing" }), _jsx("a", { href: "#", className: "login-btn", children: "Login" })] }) }));
}
