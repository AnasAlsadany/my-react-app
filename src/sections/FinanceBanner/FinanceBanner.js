import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedButton from "../../@shared/SharedButton";
export default function FinanceBanner() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { className: "py-5", children: _jsx(Container, { children: _jsx("div", { className: `${isDark ? "" : "bg-white text-dark"} rounded p-3`, children: _jsxs(Row, { className: "justify-content-between align-items-center", children: [_jsxs(Col, { md: 6, className: "mb-4 mb-md-0", children: [_jsx("h1", { className: "display-4 fw-bold mb-3", children: "Let's Upgrade your finances experience by using FinBiz" }), _jsxs("div", { className: "d-flex gap-2 mt-4", children: [_jsx(SharedButton, { variant: "success", className: "rounded-pill px-4 py-2", children: "Request Demo" }), _jsx(SharedButton, { variant: "auto", className: "rounded-pill px-4 py-2", children: "Watch Video" })] })] }), _jsx(Col, { md: 6, children: _jsx("img", { src: "/images/Rectangle.png", alt: "Person looking at planning board", className: "img-fluid rounded-3" }) })] }) }) }) }));
}
