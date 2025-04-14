import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Container, Row, Col, Badge, Form, InputGroup, } from "react-bootstrap";
import Review from "../Review/Review";
import './HeroSection.scss';
import SharedButton from "../../@shared/SharedButton";
export default function HeroSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { className: `py-5`, children: _jsxs(Container, { className: "text-center", children: [_jsxs("div", { className: "d-inline-block mb-3", children: [_jsx(Badge, { bg: "success", className: "px-3 py-2 rounded-pill fs-6", children: "New" }), _jsx("span", { className: "ms-2 text-success", children: "Introducing AI Automation \u2192" })] }), _jsxs("h1", { className: "custom-hero-title mb-3", children: ["The Finance Solutions ", _jsx("br", {}), " For Your Business"] }), _jsx("p", { className: "display-10 mb-3", style: { color: isDark ? "#9B9CA1" : "inherit" }, children: "Empower your finance team. The onestop platform for all financial management of small and medium-sized business." }), _jsx(Row, { className: "justify-content-center mb-4", children: _jsx(Col, { md: 8, lg: 6, children: _jsxs(InputGroup, { className: "mb-3", children: [_jsx(Form.Control, { type: "email", placeholder: "Enter your email address", className: `rounded-start-pill p-3` }), _jsx(SharedButton, { variant: "auto", className: "rounded-end-pill px-4 fw-semibold", children: "Book a Demo" })] }) }) }), _jsx("div", { className: "d-flex justify-content-center align-items-center gap-2", children: _jsx("div", { className: "d-flex", style: { marginRight: "10px" }, children: _jsx(Review, {}) }) })] }) }));
}
