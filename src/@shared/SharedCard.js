import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "react-bootstrap";
import { useTheme } from "next-themes";
const SharedCard = ({ title, description, imageSrc, children, style, // Destructure style from props
 }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx(Card, { className: `p-3 shadow-sm rounded-4 ${isDark ? "bg-dark text-white" : "bg-white text-dark"}`, style: { minHeight: "300px", ...style }, children: _jsxs(Card.Body, { className: "d-flex flex-column justify-content-between h-100", children: [title && (_jsx("h6", { className: `mb-2 ${isDark ? "" : "text-secondary"}`, children: title })), _jsx("p", { children: description }), imageSrc && (_jsx("div", { className: "mt-auto", children: _jsx("img", { src: imageSrc, alt: "chart", className: "img-fluid", style: { maxHeight: "100px" } }) })), children] }) }));
};
export default SharedCard;
