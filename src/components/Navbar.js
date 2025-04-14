import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Container, Nav } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
export default function AppNavbar() {
    const { theme } = useTheme();
    return (_jsx(Navbar, { expand: "lg", className: `shadow-sm ${theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"}`, children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { as: Link, to: "/", children: "FinBiz" }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsxs(Navbar.Collapse, { id: "basic-navbar-nav", children: [_jsxs(Nav, { className: "mx-auto", children: [_jsx(Nav.Link, { as: Link, to: "/product", children: "Product" }), _jsx(Nav.Link, { as: Link, to: "/pages", children: "Pages" }), _jsx(Nav.Link, { as: Link, to: "/integrations", children: "Integrations" }), _jsx(Nav.Link, { as: Link, to: "/blog", children: "Blog" }), _jsx(Nav.Link, { as: Link, to: "/pricing", children: "Pricing" })] }), _jsx("div", { className: "d-flex gap-2", children: _jsx(ThemeToggle, {}) })] })] }) }));
}
