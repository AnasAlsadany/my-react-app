import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Row from "react-bootstrap/esm/Row";
import SpendOverviewChart from "./SpendOverviewChart/SpendOverviewChart";
import { Col, Container } from "react-bootstrap";
import FinancialSummary from "./FinancialSummary/FinancialSummary";
import FinancialStatistics from "./FinancialStatistics/FinancialStatistics";
import { useTheme } from "next-themes";
import HeroSection from "./HeroSection/HeroSection";
import EmploymentTypesProgress from "./Employ/EmploymentTypesProgress";
export default function DashboardSection() {
    const { theme } = useTheme();
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "mb-4", children: _jsx(HeroSection, {}) }), _jsx("section", { className: "mt-2 card ", children: _jsx("div", { className: "d-flex justify-content-center align-items-center", children: _jsx(Container, { fluid: true, children: _jsxs(Row, { className: `p-3 shadow rounded-3  ${theme === "dark" ? "bg-black text-white" : "bg-light text-dark"}`, children: [_jsx(Col, { xs: 12, children: _jsx(FinancialStatistics, {}) }), _jsx(Col, { md: 3, children: _jsx(FinancialSummary, {}) }), _jsx(Col, { md: 6, children: _jsx(SpendOverviewChart, {}) }), _jsx(Col, { md: 3, children: _jsx(EmploymentTypesProgress, {}) })] }) }) }) })] }));
}
