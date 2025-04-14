import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '../components/Footer';
import AppNavbar from '../components/Navbar';
export default function Layout({ children }) {
    return (_jsxs("div", { className: "d-flex flex-column min-vh-100", children: [_jsx(AppNavbar, {}), _jsx("main", { className: "flex-grow-1", children: children }), _jsx(Footer, {})] }));
}
