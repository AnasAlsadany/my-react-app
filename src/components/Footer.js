import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SharedButton from "../@shared/SharedButton";
import { useTheme } from "next-themes";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Menu() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const bgColor = isDark ? "#111" : "#f9f9f9";
    const textColor = isDark ? "#fff" : "#111";
    return (_jsx("div", { style: { backgroundColor: bgColor, color: textColor, padding: "3rem 0" }, children: _jsxs(Container, { children: [_jsxs(Row, { className: "gy-4", children: [_jsxs(Col, { md: 3, children: [_jsxs("div", { className: "fw-bold fs-5 mb-2", children: [_jsx("span", { style: { color: "#A4FF00" }, children: "+ " }), "FinBiz"] }), _jsx("p", { children: "Data analysis software is a type of software tool used for data analysis and reporting." }), _jsxs("div", { className: "d-flex gap-3", children: [_jsx(FaTwitter, {}), _jsx(FaFacebook, {}), _jsx(FaInstagram, {}), _jsx(FaGithub, {})] })] }), _jsxs(Col, { md: 2, children: [_jsx("h6", { className: "display fw-semibold mb-3", children: "Company" }), _jsxs("ul", { className: "list-unstyled  display-10", children: [_jsx("li", { children: "Service" }), _jsx("li", { children: "Resources" }), _jsx("li", { children: "About us" })] })] }), _jsxs(Col, { md: 2, children: [_jsx("h6", { className: "fw-semibold mb-3", children: "Help" }), _jsxs("ul", { className: "list-unstyled", children: [_jsx("li", { children: "Customer Support" }), _jsx("li", { children: "Terms & Conditions" }), _jsx("li", { children: "Privacy Policy" })] })] }), _jsxs(Col, { md: 5, children: [_jsx("h6", { className: "fw-semibold mb-3", children: "Subscribe to Newsletter" }), _jsxs("div", { className: "d-flex", children: [_jsx(Form.Control, { type: "email", placeholder: "Enter email address", className: "rounded-start", style: {
                                                // backgroundColor: inputBg,
                                                border: "none",
                                                borderRight: "none",
                                                padding: "0.75rem 1rem",
                                                flex: 1,
                                                borderRadius: "0",
                                            } }), _jsx(SharedButton, { style: {
                                                backgroundColor: "#A4FF00",
                                                color: "#000",
                                                border: "none",
                                                padding: "0.75rem 1.5rem",
                                                borderRadius: "0 0.375rem 0.375rem 0",
                                            }, className: "fw-semibold", children: "Join" })] })] })] }), _jsx("hr", { className: "mt-4", style: { borderColor: isDark ? "#222" : "#ccc" } })] }) }));
}
