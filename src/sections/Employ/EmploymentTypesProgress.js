import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { ProgressBar } from "react-bootstrap";
const employmentData = [
    { label: "Employee", value: 80 },
    { label: "Independent Contractor", value: 65 },
    { label: "Contracted Employee", value: 70 },
    { label: "Stakeholders", value: 50 },
];
export default function EmploymentTypesProgress() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const textColor = isDark ? "text-white" : "text-dark";
    const progressBg = isDark ? "#2c2c2c" : "#dee2e6";
    const progressVariant = isDark ? "secondary" : "dark";
    return (_jsx("div", { className: "px-3 py-4", children: employmentData.map((item, idx) => (_jsxs("div", { className: "mb-5", children: [_jsx("div", { className: `mb-3 ${textColor}`, children: item.label }), _jsx(ProgressBar, { now: item.value, variant: progressVariant, style: {
                        height: "8px",
                        backgroundColor: progressBg,
                        borderRadius: "5px",
                    } })] }, idx))) }));
}
