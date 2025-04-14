import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Row, Col } from "react-bootstrap";
import SmCard from "../../components/SmollCard";
export default function FinancialStatistics() {
    const { theme } = useTheme();
    const cardDetails = [
        { title: "Total Profit", price: "$350.240", pons: "+18.23", iconColor: "green" },
        { title: "Total revenue", price: "$400.690", pons: "+28.35", iconColor: "red" },
        { title: "Product sold", price: "$200.000", pons: "+28.35", iconColor: "blue" },
    ];
    return (_jsx("div", { className: `p-0 ${theme === "dark" ? "bg-black text-white" : "bg-light text-dark"}`, children: _jsx(Row, { className: "g-3", children: cardDetails.map((item, index) => (_jsx(Col, { md: 4, children: _jsx(SmCard, { title: item.title, price: item.price, pons: item.pons, iconColor: item.iconColor }) }, index))) }) }));
}
;
