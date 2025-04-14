import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InvoiceCard from "./InvoiceCard";
import { Container, Row, Col } from "react-bootstrap";
import ExpenseManagementCard from "./ExpenseManagementCard";
import SharedCard from "../../@shared/SharedCard";
export default function FeatureShowcase() {
    return (_jsxs(Container, { className: "py-5", children: [_jsxs(Row, { className: "g-4 mb-4", children: [_jsx(Col, { md: 4, children: _jsx(SharedCard, { title: "Simple analytics", description: "Make informed decisions backed by data through our analytics tools.", imageSrc: "/images/analytics.png" }) }), _jsx(Col, { md: 4, children: _jsx(SharedCard, { description: "Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.", imageSrc: "/images/analytics.png" }) }), _jsx(Col, { md: 4, children: _jsx(SharedCard, { title: "Easy collaboration", description: "Seamlessly collaborate with your team members like never before.", imageSrc: "/images/analytics.png" }) })] }), _jsxs(Row, { className: "g-4", children: [_jsx(Col, { md: 6, children: _jsx(InvoiceCard, {}) }), _jsx(Col, { md: 6, children: _jsx(ExpenseManagementCard, {}) })] })] }));
}
;
