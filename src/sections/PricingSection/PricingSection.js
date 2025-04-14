import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useTheme } from "next-themes";
import { FaCheck } from "react-icons/fa";
import { getPricingData } from "./pricingData";
import SharedButton from "../../@shared/SharedButton";
const PricingSection = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const pricingData = getPricingData(isDark);
    return (_jsx("div", { children: _jsxs(Container, { className: "py-5", children: [_jsxs("div", { className: "text-center mb-3", children: [_jsx(Badge, { bg: "success", className: "rounded-pill px-3 py-1 mb-2", children: "Pricing" }), _jsx("h2", { className: "display-5 fw-bold mb-4", children: "Find the right plan" }), _jsx("p", { className: "mx-auto text-center mb-5", style: { maxWidth: "500px" }, children: "Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals." })] }), _jsx(Row, { className: "g-4 justify-content-center", children: pricingData.map((plan, index) => (_jsx(Col, { md: 4, className: "d-flex", children: _jsxs(Card, { className: "w-100", style: {
                                width: "100%",
                                borderRadius: "24px",
                                backgroundColor: isDark ? "#111111" : "#f8f9fa",
                                position: "relative",
                                overflow: "hidden",
                                border: isDark
                                    ? "1px solid rgba(255, 255, 255, 0.2)"
                                    : "1px solid #dee2e6",
                            }, children: [plan.popular && (_jsx("div", { style: {
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                    }, children: _jsx(Badge, { className: "rounded-pill px-3 py-1", style: { backgroundColor: "#39A7FF" }, children: "Popular" }) })), _jsxs(Card.Body, { className: "d-flex flex-column", style: { padding: "72px 40px 40px 40px" }, children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("h3", { className: "mb-3", style: {
                                                        color: plan.name === "Pro" || plan.name === "Enterprise"
                                                            ? "#BBFF00"
                                                            : "",
                                                        fontSize: "28px",
                                                    }, children: plan.name }), _jsx("p", { className: " mb-4", style: { fontSize: "14px" }, children: plan.description }), _jsxs("h2", { className: "mb-5", style: { fontSize: "48px", fontWeight: "bold" }, children: [plan.price, _jsx("span", { style: {
                                                                fontSize: "14px",
                                                                fontWeight: "normal",
                                                                opacity: 0.7,
                                                            }, children: "/month" })] })] }), _jsx("div", { className: "mb-5", style: {
                                                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                                                paddingTop: "24px",
                                            }, children: plan.features.map((feature, i) => (_jsxs("div", { className: "d-flex align-items-start mb-3", children: [_jsx(FaCheck, { size: 16, className: "me-2 mt-1" }), _jsx("span", { style: { fontSize: "14px" }, children: feature })] }, i))) }), _jsx("div", { className: "mt-auto", children: _jsx(SharedButton, { variant: plan.buttonVariant, className: "w-100 py-3 rounded-pill", style: {
                                                    backgroundColor: plan.name === "Enterprise"
                                                        ? "#BBFF00"
                                                        : plan.name === "Pro"
                                                            ? "white"
                                                            : "",
                                                    color: plan.name === "Enterprise"
                                                        ? "black"
                                                        : plan.name === "Pro"
                                                            ? "black"
                                                            : "white",
                                                    border: plan.name === "Basic"
                                                        ? "1px solid rgba(255, 255, 255, 0.3)"
                                                        : "none",
                                                }, children: plan.buttonText }) })] })] }) }, index))) })] }) }));
};
export default PricingSection;
