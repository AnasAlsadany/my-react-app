import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { BsBarChartFill } from "react-icons/bs";
const SmCard = ({ title, pons, price, iconColor }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const iconColors = {
        green: "text-success",
        red: "text-danger",
        blue: "text-primary",
    };
    return (_jsxs("div", { className: `rounded p-5 shadow-sm mb-3 ${isDark ? "bg-dark text-white" : "bg-white text-dark"}`, children: [_jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [_jsx("h6", { className: "mb-0", children: title }), _jsx("span", { className: `small fw-semibold ${iconColors[iconColor]}`, children: pons })] }), _jsxs("div", { className: "d-flex justify-content-between align-items-center mt-2", children: [_jsx("span", { className: "fs-4 fw-bold", children: price }), _jsx(BsBarChartFill, { size: 28, className: iconColors[iconColor] })] })] }));
};
export default SmCard;
