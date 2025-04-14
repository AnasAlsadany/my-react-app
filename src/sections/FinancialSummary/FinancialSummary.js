import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedButton from "../../@shared/SharedButton";
import SharedCard from "../../@shared/SharedCard"; // Importing SharedCard
export default function FinancialSummary() {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";
    return (_jsx(SharedCard, { title: "Total Balance", children: _jsxs(Container, { fluid: true, className: "p-0", children: [_jsx(Row, { children: _jsxs(Col, { children: [_jsx("h2", { className: "fw-bold mb-3", children: "$350.0" }), _jsx(SharedButton, { variant: "auto", className: "w-100 mb-4", children: "Transfer" })] }) }), _jsx(Row, { className: "mt-3", children: _jsxs(Col, { children: [_jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [_jsx("small", { children: "Total Income" }), _jsx(Badge, { bg: isDarkMode ? "secondary" : "dark", pill: true, children: "92%" })] }), _jsx("h3", { className: "fw-bold mb-4", children: "$320.0" })] }) }), _jsx(Row, { children: _jsxs(Col, { children: [_jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [_jsx("small", { children: "Total Expense" }), _jsx(Badge, { bg: isDarkMode ? "secondary" : "dark", pill: true, children: "92%" })] }), _jsx("h3", { className: "fw-bold", children: "$220.0" })] }) })] }) }));
}
