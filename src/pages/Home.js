import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import DashboardSection from "../sections/DashboardSection";
import FinanceBanner from "../sections/FinanceBanner/FinanceBanner";
import PricingSection from "../sections/PricingSection/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection/TestimonialsSection";
import Menu from "../sections/Menu/Menu";
import FeatureShowcase from "../sections/FeatureShowcase/FeatureShowcase";
export default function Home() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsxs(_Fragment, { children: [_jsx(DashboardSection, {}), _jsx(Menu, {}), _jsx(FeatureShowcase, {}), _jsx("div", { className: "my-4 d-flex justify-content-center align-items-center", children: _jsx(TestimonialsSection, {}) }), _jsxs("div", { className: `${isDark ? "bg-dark text-white" : "bg-light text-dark"}`, children: [_jsx(PricingSection, {}), _jsx(FinanceBanner, {})] })] }));
}
