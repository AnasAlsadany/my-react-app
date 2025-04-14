import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { useTheme } from "next-themes";
const SharedButton = ({ variant = "auto", size = "md", children, className, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const resolvedVariant = variant === "auto" ? (isDark ? "light" : "dark") : variant;
    return (_jsx("button", { className: classNames("btn", `btn-${resolvedVariant}`, {
            "btn-sm": size === "sm",
            "btn-lg": size === "lg",
        }, className), ...props, children: children }));
};
export default SharedButton;
