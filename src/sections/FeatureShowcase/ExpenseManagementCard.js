import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import SharedCard from "../../@shared/SharedCard";
import SharedButton from "../../@shared/SharedButton";
const ExpenseManagementCard = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx(SharedCard, { title: "Optimise expense Management as a team", description: "Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.", children: _jsx("div", { className: "mt-3", children: _jsx(SharedButton, { className: "px-4 py-2 rounded-pill fw-semibold", children: "Explore more" }) }) }));
};
export default ExpenseManagementCard;
