import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ListGroup, Badge } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedCard from "../../@shared/SharedCard";
const invoiceFiles = [
    { name: "John Client_download.Pdf", color: "pink" },
    { name: "Michele Leos_download.Pdf", color: "blue" },
    { name: "John Smith_download.Pdf", color: "lightgreen" },
];
const InvoiceCard = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx(SharedCard, { title: "$3453.00", description: "MonthlyInvoice", children: _jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [_jsx("div", { className: "d-flex align-items-center gap-3 mx-3", children: _jsx("div", { className: "card" }) }), _jsx(ListGroup, { variant: "flush", style: { width: "100%" }, children: invoiceFiles.map((file, index) => (_jsx(ListGroup.Item, { className: `d-flex justify-content-between align-items-center px-0 ${isDark ? "bg-dark text-white" : "bg-white text-dark"}`, children: _jsxs("div", { className: "d-flex align-items-center gap-2", children: [_jsx(Badge, { style: {
                                        backgroundColor: file.color,
                                        width: "25px",
                                        height: "25px",
                                        borderRadius: "50%",
                                    } }), _jsx("span", { className: "small", children: file.name })] }) }, index))) })] }) }));
};
export default InvoiceCard;
